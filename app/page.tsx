"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
export default function Home() {
  const pathName = usePathname();
  return (
    <>
      home page
      <div>
        <Link
          className={`link ${pathName === "/" ? "active" : ""}`}
          href="/dashbroad"
        >
          dashbroad
        </Link>
      </div>
    </>
  );
}
