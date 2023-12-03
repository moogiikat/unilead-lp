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
import { TeamsComponent } from "./teams";

//

const Teams: React.FC = () => {
  return (
    <div>
      <TeamsComponent />
    </div>
  );
};

export default Teams;
