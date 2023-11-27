"use client";
//
import Link from "next/link";
import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { RequestCookie } from "next/dist/compiled/@edge-runtime/cookies";
import {
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

import { HeaderMenu } from "lib/components";
import { classNames } from "lib/utils";
import { useNavStore } from "lib/zustand";

import { Drawer } from "@mantine/core";
import { useRouter } from "next/navigation";

export const Header: React.FC = () => {
  const isNavOpen = useNavStore((state) => state.navState);
  const setNavOpen = useNavStore((state) => state.setNavOpen);
  const router = useRouter();
  return (
    <header>
      <div
        className={classNames(
          "flex h-14 w-full items-center justify-between px-4 py-5 text-black border-b",
          "lg:py-10"
        )}
      >
        <button
          className={classNames("lg:hidden")}
          onClick={() => {
            setNavOpen(!isNavOpen);
          }}
        >
          <Bars3Icon width={40} />
        </button>
        <Link href={"/"}>
          <Image
            src={"/assets/logo.png"}
            width={100}
            alt={"logo"}
            height={100}
          />
        </Link>
        {/* SP */}
        <Drawer
          className="lg:hidden"
          onClose={() => setNavOpen(false)}
          opened={isNavOpen}
        >
          <div className={classNames("flex flex-col items-center gap-7")}>
            <HeaderMenu />
          </div>
        </Drawer>
        {/* PC */}
        <div
          className={classNames(
            "hidden",
            "lg:flex lg:flex-row lg:items-center lg:gap-7 lg:text-xs"
          )}
        >
          <HeaderMenu />
        </div>
      </div>
    </header>
  );
};
