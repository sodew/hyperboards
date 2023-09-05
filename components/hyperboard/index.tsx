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

  const padding = 3;

  const formattedData = {
    name: "root",
    image: "",
    value: 0,
    children: props.data.map((d) => ({
      ...d,
    })),
  };

  useEffect(() => {
    if (!dimensions) {
      return;
    }
    d3.select(ref.current)
      .attr("width", dimensions.width)
      .attr("height", dimensions.height)
      .attr("viewBox", `0 0 ${dimensions.width} ${dimensions.height}`);
    draw();
  }, [dimensions, props.data]);

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
      .size([dimensions.width, dimensions.height])
      // @ts-ignore
      .paddingInner(padding)(root);

    // Select the nodes
    const nodes = svg.selectAll("rect").data(root.leaves());

    // draw rectangles

    nodes.exit().remove();

    setLeaves(root.leaves() as unknown as Leaf[]);
  };

  return (
    <Flex
      width={"100%"}
      padding={"3px"}
      backgroundColor={"black"}
      flexDirection={"column"}
    >
      <Text onClick={props.onClickLabel} color={"white"}>
        {props.label}
      </Text>
      <div
        ref={containerRef}
        className="chart"
        style={{
          width: "100%",
          height: props.height,
          position: "relative",
          backgroundColor: "black",
        }}
      >
        {leaves.map((leaf, index) => {
          return (
            <Tile
              padding={2}
              key={index}
              entry={leaf.data}
              width={leaf.x1 - leaf.x0}
              height={leaf.y1 - leaf.y0}
              top={leaf.y0}
              left={leaf.x0}
            />
          );
        })}
        <svg ref={ref as unknown as string} display={"hidden"}></svg>
      </div>
    </Flex>
  );
};