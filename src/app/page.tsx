"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Home() {
  // const filePath = path.join(process.cwd(), "src", "data", "data.json");
  // const jsonData = fs.readFileSync(filePath, "utf-8");
  // const data = JSON.parse(jsonData);
  // console.log(data);
  const router = useRouter();
  useEffect(() => {
    router.push("/Mercury");
  }, [router]);
  return <></>;
}
