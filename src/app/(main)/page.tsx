import { classNames } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  return (
    <div className="">
      <Image
        alt="image"
        src={"/assets/home/1.jpg"}
        className="rounded-2xl"
        width={2000}
        height={2000}
      />
      <div></div>
    </div>
  );
}
