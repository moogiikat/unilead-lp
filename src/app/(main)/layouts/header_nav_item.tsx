import { classNames } from "lib/utils";
import Link from "next/link";

interface IHeaderNavItems {
  href: string;
  label: string;
}
export const HeaderNavItem: React.FC<IHeaderNavItems> = ({ href, label }) => {
  return (
    <div
      className={classNames("flex flex-col items-center gap-7", "lg:flex-row")}
    >
      <Link href={href}>
        <button className="rounded-full bg-primary px-6 py-3 text-[#fff]">
          {label}
        </button>
      </Link>
    </div>
  );
};
