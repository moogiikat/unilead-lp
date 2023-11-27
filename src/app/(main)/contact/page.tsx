//
import React from "react";
import Link from "next/link";
import { FBLogo, InstaLogo } from "lib/assets/socials";
//

const ContactPage: React.FC = () => {
  return (
    <div className="py-8 lg:py-16 mx-auto max-w-screen-md">
      <h2 className="mb-10 text-4xl tracking-tight font-extrabold text-center text-gray-900">
        Холбоо барих
      </h2>
      <div className="flex gap-x-10 lg:flex-row flex-col gap-y-5">
        <div className="grid md:grid-cols-2">
          <p>
            <span>{"Имейл: info@ahcc.mn"}</span>
          </p>
          <p>
            <span>{"Утас: 89981520"}</span>
          </p>
          <p>
            <span>{"Вэбсайт: www.ahcc.mn"}</span>
          </p>
          <p>
            <div className="flex gap-x-2">
              <p>Facebook:</p>
              <Link
                href={"https://www.facebook.com/ahcc.mongolia"}
                target="_blank"
              >
                <FBLogo fill="" />
              </Link>
            </div>
          </p>
        </div>
      </div>
      <div className="pt-5">
        <p className="whitespace-pre-wrap">
          {`Албан ёсны борлуулагч: АМУМЕД ХХК\nСБД 1-р хороо, Энхтайваны өргөн чөлөө, TG төв 603, 606 тоот \nУтас 70138699\n\nҮйлдвэрлэгч: Amino Up Co., Ltd. \n363-32 Shin-ei, Kiyota ward, Sapporo 004-0839, Japan.\nTEL: +81(0)11-889-2277\n\nЭкспортлогч: UniLead Co., Ltd.\nR4TM bldg. 2003, 1-45 Kiyota 1 jo 4 chome, Kiyota ward, Sapporo 004-0841, Japan.\nTEL: +81(0)11-311-3848`}
        </p>
        <div className="flex gap-x-5 pt-5">
          <Link
            href="mailto:email@echoecho.com?subject=Бүтээгдэхүүний талаар"
            className="rounded-full bg-blue-600 px-6 py-4 text-[#fff]"
          >
            Санал асуулга илгээх
          </Link>

          <a
            href="tel:80022520"
            className="text-white bg-green-600 rounded-full p-4"
          >
            Залгах
          </a>
        </div>
      </div>
    </div>
  );
};
export default ContactPage;
