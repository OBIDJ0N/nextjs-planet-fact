"use client";

import { PlanetType } from "@/interfaces";
import { Stack, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import Links from "./links";
import Link from "next/link";

const Navbar = () => {
  const [data, setData] = useState<PlanetType | null>(null);

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
  
  return (
    <Stack
      className="text-white border-b border-b-dark-gray"
      flexDirection={"row"}
      justifyContent={"space-between"}
      py={"1.5rem"}
      pr={"2.75rem"}
      pl={"2rem"}
    >
      <Link href={'/'} className="text-[1.75rem] font-antonio uppercase">
        The planets
      </Link>
      <Stack flexDirection={"row"} alignItems={"center"} gap={"32px"}>
        {data &&
          Object.values(data).map((planet, index) => (
            <Links key={planet.name} planet={planet} index={index} />
          ))}
      </Stack>
    </Stack>
  );
};

export default Navbar;
