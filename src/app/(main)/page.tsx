import { classNames } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { TeamsComponent } from "./teams/teams";
import CompanyIntro from "./company_intro";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <div className="relative">
        <Image
          alt="image"
          src={"/assets/home/1.jpg"}
          className="rounded-2xl"
          width={2000}
          height={2000}
        />
        <div className="md:block absolute top-0 right-0 border-none text-black bg-white rounded-r-none rounded-b-2xl p-5 hidden">
          <h1 className="font-bold">
            [営業時間] 10:00 - 18:00[定休日] 毎週水曜 / 第1・3火曜 / 年末年始
          </h1>
        </div>
        <div className="absolute -right-8 top-1/3 border-none text-white">
          <div className="gap-y-5 lg:flex flex-col hidden">
            <Image
              alt="image"
              src={"/assets/social/facebook.png"}
              className="animate-bounce"
              width={60}
              height={60}
            />
            <Image
              alt="image"
              src={"/assets/social/instagram.png"}
              className="animate-bounce"
              width={60}
              height={60}
            />
            <Image
              alt="image"
              src={"/assets/social/twitter.png"}
              className="animate-bounce"
              width={60}
              height={60}
            />
            <Image
              alt="image"
              src={"/assets/social/youtube.png"}
              className="animate-bounce"
              width={60}
              height={60}
            />
          </div>
        </div>
        <div className="md:block absolute left-0 -bottom-14 border-none text-black bg-white shadow-md rounded-r-2xl rounded-b-2xl w-[500px] h-[240px] p-5 hidden">
          <h1 className="font-bold">今月のトピック</h1>
          <p>
            宮城県涌谷町にて新築された工場の屋根上に1.2MW
            のメガ太陽光発電所の工事が開始しました。✅
            様々な建築業者と協力しながら順調に進行しております。🤝
          </p>
        </div>
      </div>
      <div className="pt-10">
        <CompanyIntro />
      </div>
      <div>
        <div className="flex flex-col gap-y-5">
          <h1 className="font-bold text-xl">チーム紹介</h1>
          <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
            <div className="flex flex-col gap-y-2">
              <Image
                alt="image"
                src={"/assets/teams/1 【TERGUUN】.png"}
                className="rounded-2xl shadow-2xl"
                width={200}
                height={200}
              />
              <div className="text-sm">
                <p className="font-bold">代表取締役(CEO)</p>
                <p>エルデネバートル テルグーン</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                alt="image"
                src={"/assets/teams/2 【MUNKHBAYASGALAN】.png"}
                className="rounded-2xl shadow-2xl"
                width={200}
                height={200}
              />
              <div className="text-sm">
                <p className="font-bold">取締役 ・経理 (CFO)</p>
                <p>チュルーンバト ムンフバヤスガラン</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                alt="image"
                src={"/assets/teams/3 【松田登】.png"}
                className="rounded-2xl shadow-2xl"
                width={200}
                height={200}
              />
              <div className="text-sm">
                <p className="font-bold">執行役員 Operating Officer</p>
                <p>松田登</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                alt="image"
                src={"/assets/teams/4 【BILGUUN】.png"}
                className="rounded-2xl shadow-2xl"
                width={200}
                height={200}
              />
              <div className="text-sm">
                <p className="font-bold">
                  工事部 課長 Construction department – Section Chief
                </p>
                <p>ガンボルド ビルグーン</p>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Image
                alt="image"
                src={"/assets/teams/5 【NASANBUYAN】.png"}
                className="rounded-2xl shadow-2xl"
                width={200}
                height={200}
              />
              <div className="text-sm">
                <p className="font-bold">
                  工事部 係長 Construction department – Senior engineer
                </p>
                <p>ビルグーテイ ナサンブヤン</p>
              </div>
            </div>
          </div>
          <a href="/teams" className="text-end underline text-blue-500">
            もっと見る
          </a>
        </div>
      </div>
    </div>
  );
}
