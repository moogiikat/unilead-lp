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
    <div className="flex w-full flex-col p-5 gap-y-2 text-black border-t">
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
              <a href="tel:011-311-3848" className="">
                011-311-3848
              </a>
            </div>
            <p className="flex gap-x-2 items-center">info@unilead.co.jp</p>
          </div>
        </div>

        <FooterMenu />
      </div>
      <div className="border border-t-0 border-gray-200"></div>
      <div className="grid md:grid-cols-3 gap-y-4 text-xs">
        <p className="whitespace-pre-wrap">
          {`株式会社UNILEAD\n〒004ｰ0841 北海道札幌市清田区清田1条4丁目1番45号　R4TMビル　2003号室`}
        </p>
      </div>
      <span className="pt-10 text-center text-sm text-black">
        {`© 2023 Unilead. All Rights Reserved.`}
      </span>
    </div>
  );
};
