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

export const TeamsComponent: React.FC = () => {
  return (
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
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-2 gap-2">
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
        <div className="flex flex-col gap-y-2">
          <Image
            alt="image"
            src={"/assets/teams/6 【ENKHMEND】.png"}
            className="rounded-2xl shadow-2xl"
            width={200}
            height={200}
          />
          <div className="text-sm">
            <p className="font-bold">
              工事部 主任 Construction department – Lead engineer
            </p>
            <p>エルデネスレン エンフメンデ</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Image
            alt="image"
            src={"/assets/teams/7 【ITOU】.png"}
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
            src={"/assets/teams/8 【MURAI】.png"}
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
            src={"/assets/teams/9 【ELBEGSAIKHAN】.png"}
            className="rounded-2xl shadow-2xl"
            width={200}
            height={200}
          />
          <div className="text-sm">
            <p className="font-bold">
              工事部 技術者 Construction department – Engineer
            </p>
            <p>プレブオチル エルベグサイハン</p>
          </div>
        </div>
        <div className="flex flex-col gap-y-2">
          <Image
            alt="image"
            src={"/assets/teams/10 【GANTULGA】.png"}
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
            src={"/assets/teams/11 【SANJAAJAMTS】.png"}
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
            src={"/assets/teams/12 【TSERENBAT】.png"}
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
            src={"/assets/teams/13 【BILEGTUGULDUR】.png"}
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
            src={"/assets/teams/14 【MUNKHBAYAR】.png"}
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
            src={"/assets/teams/15 【GANBOLD】.png"}
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
            src={"/assets/teams/16 【ERDENEBAATAR】.png"}
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
            src={"/assets/teams/17 【GARAMKHAND】.png"}
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
            src={"/assets/teams/18 【TAKADA】.png"}
            className="rounded-2xl shadow-2xl"
            width={200}
            height={200}
          />
          <div className="text-sm">
            <p className="font-bold">執行役員 Operating Officer</p>
            <p>松田登</p>
          </div>
        </div>
      </div>
    </div>
  );
};
