//
import Link from "next/link";
import Image from "next/image";
import { FBLogo, InstaLogo } from "lib/assets/socials";
import {
  PhoneIcon,
  ChatBubbleBottomCenterIcon,
} from "@heroicons/react/24/solid";

//
import { classNames } from "lib/utils";

//
import { FooterMenu } from "./footer_menu";

export const Footer: React.FC = () => {
  return (
    <div className="flex w-full flex-col bg-[#fff5ec] p-5 gap-y-2 text-black">
      <div className={classNames("flex justify-between", "flex-row")}>
        <div className="flex flex-col md:flex-row gap-x-5">
          <Link href={"/"} className="flex items-center">
            <Image
              src={"/assets/logo.png"}
              width={80}
              alt={"logo"}
              height={80}
            />
          </Link>
          <div className="md:text-2xl font-bold text-xl flex flex-col md:flex-row gap-x-2">
            <div className="flex gap-x-2 items-center">
              <PhoneIcon
                width={18}
                height={18}
                className="animate-bounce text-green-500"
              />
              <a href="tel:89981520" className="">
                89981520
              </a>
            </div>
            <p className="flex gap-x-2 items-center">info@ahcc.mn</p>
          </div>
        </div>

        <FooterMenu />
      </div>
      <div className="border border-t-0 border-gray-200"></div>
      <div className="grid md:grid-cols-3 gap-y-4 text-xs">
        <p className="whitespace-pre-wrap">
          {`Албан ёсны борлуулагч: АМУМЕД ХХК\nСБД 1-р хороо, Энхтайваны өргөн чөлөө, TG төв 603, 606 тоот \nУтас 70138699`}
        </p>
        <p className="whitespace-pre-wrap">{`Үйлдвэрлэгч: Amino Up Co., Ltd. \n363-32 Shin-ei, Kiyota ward, Sapporo 004-0839, Japan.\nTEL: +81(0)11-889-2277`}</p>
        <p className="whitespace-pre-wrap">{`Экспортлогч: UniLead Co., Ltd.\nR4TM bldg. 2003, 1-45 Kiyota 1 jo 4 chome, Kiyota ward, Sapporo 004-0841, Japan.\nTEL: +81(0)11-311-3848`}</p>
      </div>
      <span className="pt-10 text-center text-sm text-black">
        {`© 2023 AHCC. All Rights Reserved.`}
      </span>
    </div>
  );
};
