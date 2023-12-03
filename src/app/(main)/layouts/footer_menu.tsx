//
import Link from "next/link";
//
import { menuLinks, classNames } from "lib/utils";

export const FooterMenu: React.FC = () => {
  return (
    <ul
      className={classNames(
        "flex flex-col py-4 text-xs",
        "lg:flex-row lg:space-x-4"
      )}
    >
      {menuLinks.map(({ href, label }, idx) => (
        <Link
          key={idx}
          href={href}
          className="flex items-center font-bold text-white no-underline transition duration-200 p-0 m-0"
        >
          {label}
        </Link>
      ))}
    </ul>
  );
};
