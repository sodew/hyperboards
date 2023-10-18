import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/lib/supabase";

import { ClaimToken } from "@hypercerts-org/sdk";
import _ from "lodash";
import { HyperboardEntry } from "@/types/Hyperboard";
import { client } from "@/lib/hypercert-client";

interface RegistryWithClaims {
  id: string;
  name: string;
  "hyperboard-claims": {
    id: string;
    hypercert_id: string;
  }[];
}

interface EntryDisplayData {
  image: string;
  address: string;
  type: "person" | "company" | "speaker";
  companyName?: string;
  firstName: string;
  lastName: string;
  name: string;
}

interface RegistryContentItem {
  fractions: Pick<
    ClaimToken,
    "id" | "chainName" | "owner" | "tokenID" | "units"
  >[];
  displayData: EntryDisplayData;
  totalValue: number;
}

export const useListRegistries = () => {
  return useQuery(["list-registries"], async () =>
    supabase.from("registries-optimism").select("*").neq("hidden", true),
  );
};

//"person" | "company" | "speaker" | ...,
export const useRegistryContentsMock = (registryId: string) => {
  return {
    data: {
      registry: {
        "id": "c471dae2-c933-432c-abcc-84a57d809d44",
        "created_at": "2023-09-04T20:06:20.620319+00:00",
        "name": "Funding the Commons Berlin 2023 - Demo",
        "description": "DeSci.Berlin and Funding the Commons join forces to host their 2023 editions during Berlin Blockchain Week, set to unfold in the city's vibrant tech landscape on 8-9 September.\n\nOn the 8th, DeSci.Berlin takes center stage, orchestrating intensive workshops and insightful talks by key players in the field. Attendees will delve into the complexities of decentralized science, from innovative research funding avenues to the conceptualization of biotech DAOs.\n\nOn the 9th, Funding the Commons takes the reins, and will feature a unique emphasis on builders and interactive programming. In contrast to the storied academia of its Paris event, Berlin FTC will celebrate the hands-on spirit of creation and innovation.\n\nThis combined event will ignite the development of new partnerships, projects, and initiatives with each day providing a distinct platform to engage with the wider blockchain and decentralized science communities.",
        "admin_id": "0x58Cc482DA0b6b973b31c98379A7122398D585EB0",
        "hidden": false,
        "hyperboard-claims": [
          {
            "id": "783b532a-f308-4168-9f6d-4ef1a617bd03",
            "created_at": "2023-09-04T20:10:55.454889+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4181389724724491839037947176121567782371328"
          },
          {
            "id": "4467f157-b8aa-437c-99aa-d15119d68325",
            "created_at": "2023-09-04T20:11:08.872848+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189896783897515300624531541307361987657728"
          },
          {
            "id": "b3df8324-38ac-4303-a797-c8ce5fbf9e71",
            "created_at": "2023-09-04T20:11:21.292394+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182070289458333715964873925336431318794240"
          },
          {
            "id": "5b059ea0-9de4-48d9-9773-dbbe6d517f08",
            "created_at": "2023-09-04T20:11:33.94352+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182410571825254654428337299943863087005696"
          },
          {
            "id": "fb7d6a31-c47b-4dd5-86c9-699fd372ad21",
            "created_at": "2023-09-04T20:11:44.255436+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182750854192175592891800674551294855217152"
          },
          {
            "id": "651d202b-3b95-4c49-bd1b-647f002973ab",
            "created_at": "2023-09-04T20:11:55.352129+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183091136559096531355264049158726623428608"
          },
          {
            "id": "aa4ee7a0-681d-402a-82d7-a39d1c510d44",
            "created_at": "2023-09-04T20:12:06.257057+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183431418926017469818727423766158391640064"
          },
          {
            "id": "1a4bfb68-5f85-4358-ba11-4ff7df4550cb",
            "created_at": "2023-09-04T20:12:14.893047+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183771701292938408282190798373590159851520"
          },
          {
            "id": "2b25203d-3c11-4f24-950b-6aa10d03e2cd",
            "created_at": "2023-09-04T20:12:23.434602+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184111983659859346745654172981021928062976"
          },
          {
            "id": "034853b2-5f17-46c7-9132-b18079e672a0",
            "created_at": "2023-09-04T20:12:41.26386+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184792548393701223672580922195885464485888"
          },
          {
            "id": "afa29d41-7e6f-458b-84c4-41a1416f4d45",
            "created_at": "2023-09-04T20:12:49.52057+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185132830760622162136044296803317232697344"
          },
          {
            "id": "d017b572-b665-49c5-a9cb-65b57f9828d8",
            "created_at": "2023-09-04T20:12:58.82056+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185473113127543100599507671410749000908800"
          },
          {
            "id": "113d3ae5-4e53-45f0-9ee6-2c0d04af0fd7",
            "created_at": "2023-09-04T20:13:10.444203+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185813395494464039062971046018180769120256"
          },
          {
            "id": "9961209e-60f1-433b-ba7f-eaa065cf4c94",
            "created_at": "2023-09-04T20:13:19.515546+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186153677861384977526434420625612537331712"
          },
          {
            "id": "f3859eef-a318-4e9b-8efc-4f25781b4ad4",
            "created_at": "2023-09-04T20:13:29.521419+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186493960228305915989897795233044305543168"
          },
          {
            "id": "645e3b3c-6e15-4301-9c9b-7d729babef92",
            "created_at": "2023-09-04T20:13:38.249842+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186834242595226854453361169840476073754624"
          },
          {
            "id": "30bccf78-c48c-45f8-8e21-effc282e8ff0",
            "created_at": "2023-09-04T20:13:46.195559+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187174524962147792916824544447907841966080"
          },
          {
            "id": "fecf24c3-5aac-42b8-9b4b-79c05c313ae3",
            "created_at": "2023-09-04T20:13:54.74123+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187514807329068731380287919055339610177536"
          },
          {
            "id": "a601b137-833a-4b0c-a8db-0d07f1f1e886",
            "created_at": "2023-09-04T20:14:03.270319+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187855089695989669843751293662771378388992"
          },
          {
            "id": "01b824bf-1e1f-4a91-b2cf-a1d35a5947d9",
            "created_at": "2023-09-04T20:14:14.279388+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188195372062910608307214668270203146600448"
          },
          {
            "id": "23b2f83d-2387-4c92-bb57-098447be4c9d",
            "created_at": "2023-09-04T20:14:26.566363+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188535654429831546770678042877634914811904"
          },
          {
            "id": "f6edee02-3632-470e-aad3-7857d22b0292",
            "created_at": "2023-09-04T20:14:36.09538+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188875936796752485234141417485066683023360"
          },
          {
            "id": "dae377cb-1bf5-443e-90dd-c54c15d7a3fb",
            "created_at": "2023-09-04T20:12:32.291073+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184452266026780285209117547588453696274432"
          },
          {
            "id": "24157d9e-044d-4d4c-9750-acfa32f47c75",
            "created_at": "2023-09-04T20:14:54.180332+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189556501530594362161068166699930219446272"
          },
          {
            "id": "4dc4300f-7b64-4ac4-9971-15d2546d623a",
            "created_at": "2023-09-04T20:14:44.902412+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189216219163673423697604792092498451234816"
          },
          {
            "id": "426d94a7-f673-41f6-ae7a-f99cfe34b963",
            "created_at": "2023-09-04T20:10:23.409979+00:00",
            "registry_id": "c471dae2-c933-432c-abcc-84a57d809d44",
            "hypercert_id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750336"
          }
        ]
      },
      content: {
        "0x7c2e6d50d476ecc9e38617e517c0730be238cb0c": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4181389724724491839037947176121567782371329",
              "owner": "0x7c2e6d50d476ecc9e38617e517c0730be238cb0c",
              "tokenID": "4181389724724491839037947176121567782371329",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "530175f3-4744-42cd-a9b8-896044e71cbc",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Sovereign Nature Initiative",
            "firstName": "Artbiter",
            "lastName": "",
            "image": "https://cdn-0.emojis.wiki/emoji-pics/apple/ferris-wheel-apple.png",
            "address": "0x7C2e6D50d476ecc9E38617e517c0730be238cb0c"
          },
          "totalValue": 10000
        },
        "0xc593505e99290d21d1a3dbc87993a078cc4bf8da": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189896783897515300624531541307361987657729",
              "owner": "0xc593505e99290d21d1a3dbc87993a078cc4bf8da",
              "tokenID": "4189896783897515300624531541307361987657729",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "e70b39d5-25aa-4f64-95f6-bad22840da1a",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Brave",
            "firstName": "AtMoos: A Free House",
            "lastName": "",
            "image": "https://cdn-0.emojis.wiki/emoji-pics/apple/houses-apple.png",
            "address": "0xC593505e99290D21D1A3dbc87993A078CC4bF8DA"
          },
          "totalValue": 10000
        },
        "0x586260a50519c8b26d9a25df341636d9141f6615": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182070289458333715964873925336431318794241",
              "owner": "0x586260a50519c8b26d9a25df341636d9141f6615",
              "tokenID": "4182070289458333715964873925336431318794241",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "6d471d30-274f-4a13-811d-41b83fd278ef",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Curve Labs, Funding the Commons",
            "firstName": "Building a Common ground database",
            "lastName": "",
            "image": "https://cdn-0.emojis.wiki/emoji-pics/apple/magnet-apple.png",
            "address": "0x586260a50519c8B26d9A25DF341636D9141F6615"
          },
          "totalValue": 10000
        },
        "0x9f07b08409a8a41a0c0a6a3baead174bec277cf2": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182410571825254654428337299943863087005697",
              "owner": "0x9f07b08409a8a41a0c0a6a3baead174bec277cf2",
              "tokenID": "4182410571825254654428337299943863087005697",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "939c853f-a460-4b15-b619-9ff3e2c17b03",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Curve Labs, Giza",
            "firstName": "Cem",
            "lastName": "Dagdelen",
            "image": "https://pbs.twimg.com/profile_images/1169946787093917699/RPCSl7AV_400x400.jpg",
            "address": "0x9F07b08409A8a41A0C0A6a3bAEAD174bEc277cF2"
          },
          "totalValue": 10000
        },
        "0x596e04472ce53fdf0be4a0f6c969a11d15ebd61a": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4182750854192175592891800674551294855217153",
              "owner": "0x596e04472ce53fdf0be4a0f6c969a11d15ebd61a",
              "tokenID": "4182750854192175592891800674551294855217153",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "1be29c2f-56b0-4371-893f-27f9adf05dbe",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Protocol Guild",
            "firstName": "Cheeky",
            "lastName": "Gorilla",
            "image": "https://pbs.twimg.com/profile_images/1598294848477487105/I_W2Mfj8_400x400.jpg",
            "address": "0x596e04472cE53fdF0bE4A0F6C969a11D15EBd61A"
          },
          "totalValue": 10000
        },
        "0x27afcf4761eb48473aa010927e33485297bb52aa": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183091136559096531355264049158726623428609",
              "owner": "0x27afcf4761eb48473aa010927e33485297bb52aa",
              "tokenID": "4183091136559096531355264049158726623428609",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "9ebd96d1-bc4a-42bd-b3ba-e2fbef7c4d84",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Protocol Labs",
            "firstName": "David",
            "lastName": "Casey",
            "image": "https://pbs.twimg.com/profile_images/952058907433697281/impunfjJ_400x400.jpg",
            "address": "0x27afcf4761eb48473aa010927E33485297Bb52aa"
          },
          "totalValue": 10000
        },
        "0x04cb3c98c6d3d7e9b3ad661ec8d3945cc6e4974b": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183431418926017469818727423766158391640065",
              "owner": "0x04cb3c98c6d3d7e9b3ad661ec8d3945cc6e4974b",
              "tokenID": "4183431418926017469818727423766158391640065",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "6beeae57-cff7-49a5-b658-68ffbe8256f8",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Supermarkt",
            "firstName": "Ela",
            "lastName": "Kagel",
            "image": "https://pbs.twimg.com/profile_images/1276193376442953728/GJXmrAHo_400x400.jpg",
            "address": "0x04cB3c98C6D3D7E9b3AD661ec8d3945cC6e4974B"
          },
          "totalValue": 10000
        },
        "0x0f8811637707a55b1843ebf5d9bb03fbf07387d2": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4183771701292938408282190798373590159851521",
              "owner": "0x0f8811637707a55b1843ebf5d9bb03fbf07387d2",
              "tokenID": "4183771701292938408282190798373590159851521",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "b5eb8d07-cce3-4490-ae62-1d4fee86581e",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Universidade Nova de Lisboa",
            "firstName": "Erik",
            "lastName": "Bordeleau",
            "image": "https://0.academia-photos.com/545935/196541/21084616/s200_erik.bordeleau.jpg",
            "address": "0x0f8811637707A55b1843ebf5D9bB03fBf07387D2"
          },
          "totalValue": 10000
        },
        "0xd59796f50661abddf87473349d964cd28ecced97": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184111983659859346745654172981021928062977",
              "owner": "0xd59796f50661abddf87473349d964cd28ecced97",
              "tokenID": "4184111983659859346745654172981021928062977",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "f3a166a1-cb02-40fe-a598-e8d35d43c6c8",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Metagov",
            "firstName": "Eugene",
            "lastName": "Leventhal",
            "image": "https://pbs.twimg.com/profile_images/1689393558602567681/EczKjG8__400x400.jpg",
            "address": "0xd59796F50661AbDdF87473349D964CD28Ecced97"
          },
          "totalValue": 10000
        },
        "0x54d9447d9b09bb7761012591bad472ecf0306514": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184792548393701223672580922195885464485889",
              "owner": "0x54d9447d9b09bb7761012591bad472ecf0306514",
              "tokenID": "4184792548393701223672580922195885464485889",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "811d9e1d-202e-40b5-8ef6-1d14aee205f3",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "The Tor Project",
            "firstName": "Isabela",
            "lastName": "Fernandes",
            "image": "https://gitlab.torproject.org/uploads/-/system/user/avatar/209/avatar.png?width=400",
            "address": "0x54d9447D9B09Bb7761012591BaD472EcF0306514"
          },
          "totalValue": 10000
        },
        "0x540f083cb1e481ff972b538f8816dfa248113de8": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185132830760622162136044296803317232697345",
              "owner": "0x540f083cb1e481ff972b538f8816dfa248113de8",
              "tokenID": "4185132830760622162136044296803317232697345",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "290b1347-df2b-46a9-906d-f4a6ea591084",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Von",
            "firstName": "Jeff",
            "lastName": "Pulver",
            "image": "https://pbs.twimg.com/profile_images/1602318725335683073/_c09vwSY_400x400.jpg",
            "address": "0x540F083CB1E481Ff972B538F8816dFA248113De8"
          },
          "totalValue": 10000
        },
        "0x5105a432c47868035e9b4dfbbf80025fdc2e5dc8": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185473113127543100599507671410749000908801",
              "owner": "0x5105a432c47868035e9b4dfbbf80025fdc2e5dc8",
              "tokenID": "4185473113127543100599507671410749000908801",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "2788c1a6-5911-42c2-b0ca-d86f0ba51d21",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Optimism",
            "firstName": "Jonas",
            "lastName": "Seiferth",
            "image": "https://avatars.githubusercontent.com/u/43515441?v=4",
            "address": "0x5105A432c47868035e9b4dfbbf80025Fdc2E5DC8"
          },
          "totalValue": 10000
        },
        "0xf4856450a74e57c71d2325190b8a28f87cbf0759": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4185813395494464039062971046018180769120257",
              "owner": "0xf4856450a74e57c71d2325190b8a28f87cbf0759",
              "tokenID": "4185813395494464039062971046018180769120257",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "80d030c0-40b7-4bc3-b714-b4f4c6ef9dc9",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Golem Foundation / Octant",
            "firstName": "Julian",
            "lastName": "Zawistowski",
            "image": "https://pbs.twimg.com/profile_images/1319277749928742915/jmUXkl6M_400x400.jpg",
            "address": "0xF4856450A74E57C71D2325190b8a28F87cBf0759"
          },
          "totalValue": 10000
        },
        "0x087aec44ed4fa253912be48d7a28387d4bb0b0b2": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186153677861384977526434420625612537331713",
              "owner": "0x087aec44ed4fa253912be48d7a28387d4bb0b0b2",
              "tokenID": "4186153677861384977526434420625612537331713",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "a140cb3c-d081-4e47-ab5c-0511e54a9464",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Other Internet",
            "firstName": "Laura",
            "lastName": "Lotti",
            "image": "https://pbs.twimg.com/profile_images/540370794375680000/7j_egt4I_400x400.jpeg",
            "address": "0x087aEC44Ed4fa253912be48d7a28387D4BB0b0B2"
          },
          "totalValue": 10000
        },
        "0x075234da9d69c3ed2a305f4b2fbf82e6bc574918": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186493960228305915989897795233044305543169",
              "owner": "0x075234da9d69c3ed2a305f4b2fbf82e6bc574918",
              "tokenID": "4186493960228305915989897795233044305543169",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "b6f003b4-b87f-4b38-adbb-3cb4c6f63301",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "JPG",
            "firstName": "María Paula",
            "lastName": "Fernández",
            "image": "https://pbs.twimg.com/profile_images/1691792912885948416/DCDgdfND_400x400.jpg",
            "address": "0x075234Da9d69C3eD2a305f4b2fbf82E6bC574918"
          },
          "totalValue": 10000
        },
        "0x02aafb41bcf09bb753d7de906f857c2b7649025d": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4186834242595226854453361169840476073754625",
              "owner": "0x02aafb41bcf09bb753d7de906f857c2b7649025d",
              "tokenID": "4186834242595226854453361169840476073754625",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "ef6bc402-2bb3-429e-a529-103750ce93eb",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Gitcoin / Allo Protocol",
            "firstName": "Nate",
            "lastName": "Gosselin",
            "image": "https://pbs.twimg.com/profile_images/1575754483103145984/J0KtHrhK_400x400.jpg",
            "address": "0x02Aafb41bCf09bb753D7dE906f857C2B7649025D"
          },
          "totalValue": 10000
        },
        "0xc8b676b839f55bcd16d59119322cd6428841f60a": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187174524962147792916824544447907841966081",
              "owner": "0xc8b676b839f55bcd16d59119322cd6428841f60a",
              "tokenID": "4187174524962147792916824544447907841966081",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "bacf8eda-dcb0-442f-bdbc-0702f523fb45",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Other Internet",
            "firstName": "Nick",
            "lastName": "Houde",
            "image": "https://pbs.twimg.com/profile_images/1599420931016908803/YWN-Nx5c_400x400.jpg",
            "address": "0xc8b676B839F55bcD16d59119322cD6428841f60A"
          },
          "totalValue": 10000
        },
        "0xb27231475ed9161a1ff9263e1c631649a9eb7dce": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187514807329068731380287919055339610177537",
              "owner": "0xb27231475ed9161a1ff9263e1c631649a9eb7dce",
              "tokenID": "4187514807329068731380287919055339610177537",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "036751e3-9214-464c-a38d-9f17981c7669",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "da0",
            "firstName": "Noah",
            "lastName": "Yeh",
            "image": "https://custom-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_1440,w_720,f_auto,q_auto/10856/253455_480274.png",
            "address": "0xB27231475eD9161A1ff9263e1c631649a9eb7dCE"
          },
          "totalValue": 10000
        },
        "0xdbc4c2848e6d6d4bad295670c3ab751dc31dd24a": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4187855089695989669843751293662771378388993",
              "owner": "0xdbc4c2848e6d6d4bad295670c3ab751dc31dd24a",
              "tokenID": "4187855089695989669843751293662771378388993",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "f1c4907d-351b-4ea2-8a61-144e0eeb8416",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Center for Deep Tech Innovation",
            "firstName": "Oliver",
            "lastName": "Beige",
            "image": "https://pbs.twimg.com/profile_images/1698304016155856896/c7iW_vUb_400x400.jpg",
            "address": "0xdbC4c2848e6D6d4BAD295670c3AB751dC31Dd24A"
          },
          "totalValue": 10000
        },
        "0xbde6379147df78710be553f7c6b9229644588a22": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188195372062910608307214668270203146600449",
              "owner": "0xbde6379147df78710be553f7c6b9229644588a22",
              "tokenID": "4188195372062910608307214668270203146600449",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "0bad570e-3d8b-489b-b0f0-c45c211f9a11",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Swarm",
            "firstName": "Philipp",
            "lastName": "Pieper",
            "image": "https://pbs.twimg.com/profile_images/1549046755395833861/qudeyaav_400x400.jpg",
            "address": "0xbDE6379147DF78710Be553F7C6b9229644588a22"
          },
          "totalValue": 10000
        },
        "0xa5a042fd012eadf5f8c0a76197cea4f40264048e": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188535654429831546770678042877634914811905",
              "owner": "0xa5a042fd012eadf5f8c0a76197cea4f40264048e",
              "tokenID": "4188535654429831546770678042877634914811905",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "bec80f7a-b6e3-4e20-a9b0-211e3a53013a",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "RWA, Regulatory Setup Consultant",
            "firstName": "Romina",
            "lastName": "Bungert",
            "image": "https://pbs.twimg.com/profile_images/1567464414906834946/d-IIwejD_400x400.jpg",
            "address": "0xA5a042FD012EaDf5f8c0a76197cEA4F40264048E"
          },
          "totalValue": 10000
        },
        "0xfaffda2068cd8324f7ee5be54a18a096f8398240": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4188875936796752485234141417485066683023361",
              "owner": "0xfaffda2068cd8324f7ee5be54a18a096f8398240",
              "tokenID": "4188875936796752485234141417485066683023361",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "7c50f01a-7d6b-4ac3-a390-87d796995966",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Other Internet",
            "firstName": "Tara",
            "lastName": "Merk",
            "image": "https://pbs.twimg.com/profile_images/1454390153666043905/sgEGWhlJ_400x400.jpg",
            "address": "0xFaFFDa2068cD8324f7ee5bE54a18A096F8398240"
          },
          "totalValue": 10000
        },
        "0x431308a8144a4e626fd658c4eb08b2b4d3afe928": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4184452266026780285209117547588453696274433",
              "owner": "0x431308a8144a4e626fd658c4eb08b2b4d3afe928",
              "tokenID": "4184452266026780285209117547588453696274433",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "f5d05636-c5eb-4acd-bc71-88d456f074aa",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "Hypercerts Foundation",
            "firstName": "Holke",
            "lastName": "Brammer",
            "image": "https://pbs.twimg.com/profile_images/1575897903507410946/OIw6G5Us_400x400.jpg",
            "address": "0x431308A8144A4e626Fd658C4Eb08B2b4D3afe928"
          },
          "totalValue": 10000
        },
        "0x36ac0015ba4510f31d63a34851e680e81ec67464": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189556501530594362161068166699930219446273",
              "owner": "0x36ac0015ba4510f31d63a34851e680e81ec67464",
              "tokenID": "4189556501530594362161068166699930219446273",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "4558691d-02d4-4a5d-9c4c-b5d9b9a94f7c",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "MIT Computational Law Journal",
            "firstName": "Wassim",
            "lastName": "Alsindi",
            "image": "https://pbs.twimg.com/profile_images/1678510714594394116/i7Jpe1EC_400x400.jpg",
            "address": "0x36ac0015bA4510F31D63a34851E680E81eC67464"
          },
          "totalValue": 10000
        },
        "0x63cff6d0e8e97c7d210e4783585bf31f7f51d12a": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4189216219163673423697604792092498451234817",
              "owner": "0x63cff6d0e8e97c7d210e4783585bf31f7f51d12a",
              "tokenID": "4189216219163673423697604792092498451234817",
              "units": "10000"
            }
          ],
          "displayData": {
            "id": "020d55e5-6c52-4aca-9170-af224a0f180e",
            "created_at": "2023-09-04T20:17:06.264679+00:00",
            "type": "speaker",
            "companyName": "da0",
            "firstName": "Vivian",
            "lastName": "Chen",
            "image": "https://imagedelivery.net/bRzpE2_yvXyRL0k6jCSFRQ/7af286d7-acdc-4872-fb96-889710d8fa00/public",
            "address": "0x63CFf6d0e8E97C7d210E4783585BF31f7F51D12a"
          },
          "totalValue": 10000
        },
        // "0x58cc482da0b6b973b31c98379a7122398d585eb0": {
        //   "fractions": [
        //     {
        //       "chainName": "hypercerts-testnet",
        //       "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750337",
        //       "owner": "0x58cc482da0b6b973b31c98379a7122398d585eb0",
        //       "tokenID": "4204528925675115654553456649426928020750337",
        //       "units": "5795"
        //     }
        //   ],
        //   "displayData": {
        //     "id": "c0e2cde8-d94f-44de-ae99-72d27f3f2f31",
        //     "created_at": "2023-09-04T20:23:50.281302+00:00",
        //     "type": "company",
        //     "companyName": "Funding the Commons",
        //     "firstName": null,
        //     "lastName": null,
        //     "image": "https://site-assets.plasmic.app/aa70a615f69c0414240ad9675ac2484e.svg",
        //     "address": "0x58Cc482DA0b6b973b31c98379A7122398D585EB0"
        //   },
        //   "totalValue": 5795
        // },
        // "0x58cc482da0b6b973b31c98379a7122398d585eb1": {
        //   "fractions": [
        //     {
        //       "chainName": "hypercerts-testnet",
        //       "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750337",
        //       "owner": "0x58cc482da0b6b973b31c98379a7122398d585eb0",
        //       "tokenID": "4204528925675115654553456649426928020750337",
        //       "units": "5795"
        //     }
        //   ],
        //   "displayData": {
        //     "id": "c0e2cde8-d94f-44de-ae99-72d27f3f2f31",
        //     "created_at": "2023-09-04T20:23:50.281302+00:00",
        //     "type": "company",
        //     "companyName": "Funding the Commons 2",
        //     "firstName": null,
        //     "lastName": null,
        //     "image": "https://site-assets.plasmic.app/aa70a615f69c0414240ad9675ac2484e.svg",
        //     "address": "0x58Cc482DA0b6b973b31c98379A7122398D585EB0"
        //   },
        //   "totalValue": 5795
        // },
        "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Octant",
            "firstName": null,
            "lastName": null,
            "image": "https://img.plasmic.app/img-optimizer/v1/img/fcb8feb5f0e9a675a8c9904f97fd9a84.png?q=75&f=webp",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x1b": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Brave",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/aab2a580b2a7e11c803487c08be436ab.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x2": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Gitcoin",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/b0f786a1c21e8c13f0ec3ab457322d3f.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x3": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Protocol Labs",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/feaac31a2e81ebe1a563aae40a7fa1f0.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x4": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Astrofitters",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/9e7cb0120cd8de61ca3314b1b56c039f.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x5": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Drips",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/1b3b9ff0341c7218c05450b466f2a85f.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x6": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "artizen",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/07f8b030824e5b044e0e794032094b2e.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x7": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Celo",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/56d979268bd28f1cf0c93e2234212ebf.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x8": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "GoodDollar",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/60dd1f525f967d2a03263f39f6a48b72.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        },
        "0x9": {
          "fractions": [
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750338",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750338",
              "units": "1872"
            },
            {
              "chainName": "hypercerts-testnet",
              "id": "0x822f17a9a5eecfd66dbaff7946a8071c265d1d07-4204528925675115654553456649426928020750339",
              "owner": "0x1ba79ce92ae49aebdf5f247fce2c1333a7220216",
              "tokenID": "4204528925675115654553456649426928020750339",
              "units": "2333"
            }
          ],
          "displayData": {
            "id": "a4dab4c3-8242-4096-9bbc-48967b7f5d1d",
            "created_at": "2023-09-04T20:23:50.281302+00:00",
            "type": "company",
            "companyName": "Hypercerts",
            "firstName": null,
            "lastName": null,
            "image": "https://site-assets.plasmic.app/086ee4c54ebb3d08a65cfa02f57ee1b2.svg",
            "address": "0x1BA79Ce92AE49aEBDF5F247FCe2C1333A7220216"
          },
          "totalValue": 4205
        }
      }
    }
  }
}


export const useRegistryContents = (registryId: string) => {
  return useQuery(["registry", registryId], async () => {
    return getRegistryWithClaims(registryId).then(async (registry) => {
      if (!registry?.data) {
        return null;
      }

      // Create one big list of all fractions, for all hypercerts in registry
      const allFractions = await Promise.all(
        registry.data["hyperboard-claims"].map((claim) => {
          return client.indexer.fractionsByClaim(claim.hypercert_id);
        }),
      );
      const fractions = _.chain(allFractions)
        .flatMap((res) => res.claimTokens)
        .value();

      // Get display data for all owners and convert to dictionary
      const ownerAddresses = _.uniq(fractions.map((x) => x.owner)) as string[];
      const claimDisplayDataResponse =
        await getEntryDisplayData(ownerAddresses);
      const claimDisplayData = _.keyBy(
        claimDisplayDataResponse?.data || [],
        (x) => x.address.toLowerCase(),
      );

      // Group by owner, merge with display data and calculate total value of all fractions per owner
      const content = _.chain(fractions)
        .groupBy((fraction) => fraction.owner)
        .mapValues((fractionsPerOwner, owner) => {
          return {
            fractions: fractionsPerOwner,
            displayData: claimDisplayData[owner],
            totalValue: _.sum(
              fractionsPerOwner.map((x) => parseInt(x.units, 10)),
            ),
          };
        })
        .value();

      return {
        registry: registry.data,
        content,
      };
    });
  });
};

//TODO: log what comes back when successful. see what currently comes back. create a JSON.
//TODO: abhi subgraph calls
const getRegistryWithClaims = async (registryId: string) =>
  supabase
    .from("registries-optimism")
    .select("*, hyperboard-claims ( * )")
    .eq("id", registryId)
    .single<RegistryWithClaims>();

const getEntryDisplayData = async (addresses: string[]) => {
  return supabase
    .from("hyperboard-sponsor-metadata")
    .select<"*", EntryDisplayData>("*")
    .in("address", addresses);
};

export const registryContentItemToHyperboardEntry = (
  item: RegistryContentItem,
): HyperboardEntry => {
  return {
    type: item.displayData.type,
    companyName: item.displayData.companyName,
    lastName: item.displayData.lastName,
    firstName: item.displayData.firstName,
    image: item.displayData.image,
    value: item.totalValue,
    id: item.displayData.address,
  };
};
