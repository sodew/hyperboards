import * as d3 from "d3";
import React, { useEffect, useRef, useState } from "react";
import { HyperboardEntry } from "@/types/Hyperboard";
import { Tile } from "@/components/hyperboard/Tile";
import { useSize } from "@chakra-ui/react-use-size";
import { Flex, Text } from "@chakra-ui/react";

export interface HyperboardProps {
  data: HyperboardEntry[];
  height: number;
  label: string;
  onClickLabel: () => void;
}

type Leaf = {
  x0: number;
  x1: number;
  y0: number;
  y1: number;
} & d3.HierarchyNode<HyperboardEntry>;

export const Hyperboard = (props: HyperboardProps) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const ref = useRef<string>("");
  const dimensions = useSize(containerRef);

  const [leaves, setLeaves] = useState<Leaf[]>([]);

  const padding = 1;

  //how is value determined?
  const formattedData = {
    name: "root",
    image: "",
    value: 0,
    children: props.data.map((d) => ({
      ...d,
    })),
  };

  useEffect(() => {
    if (!containerRef.current) {
      return;
    }
    if (!dimensions) {
      return;
    }
    console.log("drawing", containerRef.current, dimensions);
    d3.select(ref.current)
      .attr("width", props.height)
      .attr("height", props.height)
      .attr("viewBox", `0 0 ${props.height} ${props.height}`);
    draw();
  }, [containerRef.current]);

  const draw = () => {
    if (!dimensions) {
      return;
    }
    // Append images as patterns
    const svg = d3.select(ref.current);
    const root = d3.hierarchy(formattedData).sum(function (d) {
      return d.value;
    });

    // Give the data to this cluster layout:

    // initialize treemap
    d3
      .treemap()
      .tile(d3.treemapSquarify.ratio(1 / 3))
      .size([dimensions.height, dimensions.height])
      // @ts-ignore
      .paddingInner(padding)(root);

    // Select the nodes
    const nodes = svg.selectAll("rect").data(root.leaves());

    // draw rectangles

    nodes.exit().remove();

    setLeaves(root.leaves() as unknown as Leaf[]);
  };

  const ratio = dimensions ? dimensions.width / dimensions.height : 1;
  console.log("dimensions", dimensions, ratio);

  return (
    <Flex
      width={"100%"}
      padding={"1px"}
      backgroundColor={"black"}
      flexDirection={"column"}
      overflow={"hidden"}
      maxHeight={props.height}
      minH={props.height}
    >
      <Flex
        paddingY={1}
        pl={1}
        onClick={props.onClickLabel}
        cursor={"pointer"}
        textTransform={"uppercase"}
        color={"white"}
        fontFamily={"Director-Variable"}
      >
        <Text>{props.label}</Text>
        <Text ml={6}>{props.data.length}</Text>
      </Flex>
      <div
        ref={containerRef}
        className="chart"
        style={{
          width: "100%",
          height: "100%",
          overflow: "hidden",
          position: "relative",
          backgroundColor: "black",
        }}
      >
        {leaves.map((leaf, index) => {
          const width = leaf.x1 - leaf.x0;
          return (
            <Tile
              padding={2}
              key={index}
              entry={leaf.data}
              width={width * ratio}
              height={leaf.y1 - leaf.y0}
              top={leaf.y0}
              left={leaf.x0 * ratio}
            />
          );
        })}
        <svg ref={ref as unknown as string} display={"hidden"}></svg>
      </div>
    </Flex>
  );
};
