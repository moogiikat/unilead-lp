import { classNames } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";
import { TeamsComponent } from "./teams/teams";

export default function Home() {
  return (
    <div className="flex flex-col gap-y-5">
      <Image
        alt="image"
        src={"/assets/home/1.jpg"}
        className="rounded-2xl"
        width={2000}
        height={2000}
      />
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
                  工事部 係長 C onstruction department – Senior engineer
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
