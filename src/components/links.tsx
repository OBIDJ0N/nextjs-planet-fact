import { PlanetData } from "@/interfaces";
import Link from "next/link";
import { FC } from "react";
import { usePathname } from "next/navigation";

interface LinksProps {
  planet: PlanetData;
  index: number;
}

const Links: FC<LinksProps> = ({ planet, index }) => {
  const path = usePathname()

  const isActive = path === `/${planet.name}`;

  const colorClasses = [
    "after:bg-light-blue",
    "after:bg-yellow",
    "after:bg-dark-blue",
    "after:bg-orange",
    "after:bg-light-orange",
    "after:bg-dark-yellow",
    "after:bg-light-green",
    "after:bg-blue",
  ];

  return (
    <Link
      href={`/${planet.name}`}
      className={`relative uppercase font-semibold text-gray text-sm tracking-[1px] transition-all duration-200 ease-linear after:content-[''] after:absolute after:-top-[34px] after:left-0 after:w-full after:h-1 after:scale-x-0 after:origin-center after:transition-transform after:duration-200 after:ease-linear hover:after:scale-x-100 ${
        colorClasses[index]
      } ${isActive ? 'after:scale-x-100' : ''}`}
    >
      {planet.name}
    </Link>
  );
};

export default Links;
