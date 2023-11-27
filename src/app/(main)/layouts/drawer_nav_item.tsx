"use client";
//
import { classNames } from "lib/utils";
import { useNavStore } from "lib/zustand";
import { useRouter } from "next/navigation";
interface IDrawerNavItems {
  href: string;
  label: string;
}
export const DrawerNavItem: React.FC<IDrawerNavItems> = ({ href, label }) => {
  const setNavOpen = useNavStore((state) => state.setNavOpen);
  const router = useRouter();
  return (
    <div
      className={classNames("flex flex-col items-center gap-7", "lg:flex-row")}
    >
      <button
        className="rounded-full bg-primary px-6 py-3 text-[#fff]"
        onClick={() => {
          setNavOpen(false);
          router.push(href);
        }}
      >
        {label}
      </button>
    </div>
  );
};
