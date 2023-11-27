//
import type { HTMLAttributes, ReactNode } from "react";

//
import { classNames } from "lib/utils";

interface IVerticalTable extends HTMLAttributes<HTMLDivElement> {
  customTitle?: ReactNode;
  items: {
    key: string;
    label: ReactNode;
    sub: ReactNode;
    value: ReactNode;
    required?: boolean;
    labelClassName?: string;
  }[];
}

export const VerticalTable: React.FC<IVerticalTable> = ({
  customTitle,
  items,
  className,
}) => {
  return (
    <div>
      {customTitle && (
        <div className="flex w-full items-center">{customTitle}</div>
      )}
      <table
        className={classNames(
          "table w-full border border-orange-100",
          "[&_th]:rounded-none [&_th]:max-w-[50px] [&_th]:border-b-orange-100 [&_th]:border-b [&_th]:font-bold",
          "[&_td]:whitespace-pre-line [&_td]:rounded-none [&_td]:border-b [&_td]:border-b-orange-100",
          "md:text-sm text-xs",
          className
        )}
      >
        <tbody>
          {items.map(({ key, label, value, sub, labelClassName }) => (
            <tr key={key}>
              <th className="p-1 md:p-4">
                {label && (
                  <label className="label">
                    <div className="md:break-normal break-normal">{label}</div>
                  </label>
                )}
              </th>
              <td className={"border p-1 md:p-4 border-orange-100"}>{value}</td>
              <td className={"border md:w-28 p-1 md:p-4 border-orange-100"}>
                {sub}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
