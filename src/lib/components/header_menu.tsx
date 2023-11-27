//
import Link from "next/link";
//
import { menuLinks } from "lib/utils";
import { useNavStore } from "lib/zustand";
import { useRouter } from "next/navigation";

export const HeaderMenu: React.FC = () => {
  const setNavOpen = useNavStore((state) => state.setNavOpen);
  const router = useRouter();
  return (
    <>
      {menuLinks.map(({ href, label }, idx) => (
        <div key={idx}>
          <button
            onClick={() => {
              setNavOpen(false);
              router.push(href);
            }}
            className="text-heading flex items-center text-sm font-bold no-underline transition duration-200"
          >
            {label}
          </button>
        </div>
      ))}
    </>
  );
};
