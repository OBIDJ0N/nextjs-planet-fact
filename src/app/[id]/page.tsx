"use client";

import { tabsBtn } from "@/constants";
import { PlanetData, PlanetType } from "@/interfaces";
import { Box, Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const PlanetPage = () => {
  const { id } = useParams();
  const [data, setData] = useState<PlanetType | null>(null);
  const [activeBtn, setActiveBtn] = useState<number>(0);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get<PlanetType>("/data.json");
        setData(res.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    getData();
  }, []);

  const bgColors = [
    "bg-tabs-light-blue",
    "bg-tabs-yellow",
    "bg-tabs-purple",
    "bg-tabs-orange",
    "bg-tabs-red",
    "bg-tabs-dark-orange",
    "bg-tabs-light-green",
    "bg-tabs-blue",
  ];

  const getBgColor = (id: string) => {
    switch (id) {
      case "Mercury":
        return bgColors[0];
      case "Venus":
        return bgColors[1];
      case "Earth":
        return bgColors[2];
      case "Mars":
        return bgColors[3];
      case "Jupiter":
        return bgColors[4];
      case "Saturn":
        return bgColors[5];
      case "Uranus":
        return bgColors[6];
      case "Neptune":
        return bgColors[7];
      default:
        return "";
    }
  };
  const getContent = () => {
    if (!data) return { content: "", source: "", image: "", geologyImage: "" };

    const planet: PlanetData | undefined =
      data && Object.values(data).find((planet) => planet.name === id);

    if (!planet)
      return { content: "", source: "", image: "", geologyImage: "" };

    switch (activeBtn) {
      case 0:
        return {
          content: planet.overview.content,
          source: planet.overview.source,
          image: planet.images.planet,
          geologyImage: "",
        };
      case 1:
        return {
          content: planet.structure.content,
          source: planet.structure.source,
          image: planet.images.internal,
          geologyImage: "",
        };
      case 2:
        return {
          content: planet.geology.content,
          source: planet.geology.source,
          image: planet.images.planet,
          geologyImage: planet.images.geology,
        };
      default:
        return { content: "", source: "", image: "", geologyImage: "" };
    }
  };
  const { content, source, image, geologyImage } = getContent();

  return (
    <>
      <Head>
        <title>
          Hello
        </title>
      </Head>
      {data &&
        Object.values(data)
          .filter((planet) => planet.name === id)
          .map((item) => (
            <Box
              key={item.name}
              display="grid"
              gridTemplateAreas="'illustration intro' 'illustration tabs' 'info info'"
              gridTemplateColumns="2.2fr 1fr"
              gap={2}
              margin={"9.375rem auto 0 auto"}
              maxWidth={"1110px"}
              className={"text-white"}
            >
              <Box gridArea="illustration" sx={{ m: "auto" }}>
                {activeBtn === 2 ? (
                  <div className="relative w-auto h-auto">
                    <Image
                      key={item.name}
                      src={image}
                      alt={item.name}
                      width={300}
                      height={300}
                    />
                    <Image
                      key={item.name}
                      src={geologyImage}
                      alt={item.name}
                      width={163}
                      height={200}
                      className="absolute left-auto right-auto bottom-[-60%] translate-x-[40%]"
                    />
                  </div>
                ) : (
                  <Image
                    key={item.name}
                    src={image}
                    alt={item.name}
                    width={300}
                    height={300}
                  />
                )}
              </Box>
              <Box
                gridArea="tabs"
                gap={"16px"}
                flexDirection={"column"}
                display={"flex"}
              >
                {tabsBtn.map((btn, index) => (
                  <Button
                    sx={{
                      border: "1px solid hsl(240,17%,26%)",
                      backgroundColor: "transparent",
                      "&:hover": {
                        backgroundColor: "hsl(240,17%,26%)",
                      },
                    }}
                    className={`w-full p-3 pl-8 tracking-[.16rem] rounded-none flex justify-start ${
                      activeBtn === index && getBgColor(item.name)
                    }`}
                    variant="contained"
                    key={btn.id}
                    onClick={() => setActiveBtn(index)}
                  >
                    <span className="text-[hsla(0,0%,100%,0.5)] text-sm font-semibold">
                      0{btn.id}
                    </span>
                    <Typography className="font-semibold ml-6 text-sm">
                      {btn.name}
                    </Typography>
                  </Button>
                ))}
              </Box>
              <Box gridArea="intro">
                <Typography
                  variant="h2"
                  className="text-[5rem] uppercase font-antonio"
                >
                  {item.name}
                </Typography>
                <Typography className="text-[18px] font-normal text-gray mt-[34px]">
                  {content}
                </Typography>
                <Typography className="text-[18px] text-light-gray mt-6">
                  Source:{" "}
                  <Link className="font-bold underline" href={source}>
                    Wikipedia
                  </Link>{" "}
                  <svg
                    viewBox="0 0 1024 1024"
                    className="inline-block stroke-light-fill-light-gray fill-light-gray w-[12px] h-[12px]"
                  >
                    <path d="M967.68 56.32c-37.547-37.547-82.773-56.32-135.68-56.32h-640c-52.907 0-98.133 18.773-135.68 56.32s-56.32 82.773-56.32 135.68v640c0 52.907 18.773 98.133 56.32 135.68s82.773 56.32 135.68 56.32h640c52.907 0 98.133-18.773 135.68-56.32s56.32-82.773 56.32-135.68v-640c0-52.907-18.773-98.133-56.32-135.68zM853.333 533.333c0.028 0.556 0.043 1.207 0.043 1.861 0 17.062-10.722 31.619-25.796 37.301l-0.274 0.091c-4.914 2.056-10.616 3.3-16.595 3.413l-0.045 0.001c-0.273 0.007-0.595 0.011-0.918 0.011-11.496 0-21.85-4.888-29.096-12.7l-0.023-0.025-96-96-355.925 356.011c-7.489 7.841-18.026 12.716-29.701 12.716-0.118 0-0.236-0-0.354-0.001l0.018 0c-0.111 0.001-0.241 0.002-0.372 0.002-11.664 0-22.19-4.876-29.65-12.7l-0.016-0.016-67.925-68.011c-7.84-7.475-12.716-18.001-12.716-29.664 0-0.101 0-0.202 0.001-0.303l-0 0.015c-0.001-0.111-0.002-0.241-0.002-0.372 0-11.664 4.876-22.19 12.7-29.65l0.016-0.016 356.011-356.011-96-96c-13.824-12.8-16.896-28.416-9.387-46.592 5.772-15.35 20.331-26.074 37.394-26.074 0.684 0 1.364 0.017 2.040 0.051l-0.095-0.004h320c11.52 0 21.589 4.267 30.037 12.629 7.791 7.469 12.632 17.961 12.632 29.584 0 0.159-0.001 0.318-0.003 0.477l0-0.024v320z"></path>
                  </svg>
                </Typography>
              </Box>
              <Box
                gridArea="info"
                display={"flex"}
                justifyContent={"space-between"}
                gap={"1.875rem"}
                mt={"4.875rem"}
                pb={"2.25rem"}
              >
                <Box
                  border={"1px solid hsl(240,17%,26%)"}
                  padding={"20px 0 34px 23px"}
                  width={"100%"}
                >
                  <Typography className="text-sm font-bold text-light-gray uppercase tracking-[1px]">
                    Rotation time
                  </Typography>
                  <Typography className="font-antonio text-4xl mt-2 uppercase">
                    {item.rotation}
                  </Typography>
                </Box>
                <Box
                  border={"1px solid hsl(240,17%,26%)"}
                  padding={"20px 0 34px 23px"}
                  width={"100%"}
                >
                  <Typography className="text-sm font-bold text-light-gray uppercase tracking-[1px]">
                    Revolution time
                  </Typography>
                  <Typography className="font-antonio text-4xl mt-2 uppercase">
                    {item.revolution}
                  </Typography>
                </Box>
                <Box
                  border={"1px solid hsl(240,17%,26%)"}
                  padding={"20px 0 34px 23px"}
                  width={"100%"}
                >
                  <Typography className="text-sm font-bold text-light-gray uppercase tracking-[1px]">
                    Radius
                  </Typography>
                  <Typography className="font-antonio text-4xl mt-2 uppercase">
                    {item.radius}
                  </Typography>
                </Box>
                <Box
                  border={"1px solid hsl(240,17%,26%)"}
                  padding={"20px 0 34px 23px"}
                  width={"100%"}
                >
                  <Typography className="text-sm font-bold text-light-gray uppercase tracking-[1px]">
                    Average temp
                  </Typography>
                  <Typography className="font-antonio text-4xl mt-2 uppercase">
                    {item.temperature}
                  </Typography>
                </Box>
              </Box>
            </Box>
          ))}
    </>
  );
};

export default PlanetPage;
