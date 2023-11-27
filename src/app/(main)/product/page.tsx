//
import { classNames } from "lib/utils";
import Image from "next/image";

const Product: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p className="font-bold pb-5 text-2xl">𝐀𝐇𝐂𝐂®-г ямар үед хэрэглэх вэ?</p>
      <Image
        src={"/assets/hereglee1.png"}
        width={1000}
        alt={"logo"}
        height={1000}
        className="w-full"
      />
      <Image
        src={"/assets/hereglee2.png"}
        width={1000}
        alt={"logo"}
        height={1000}
        className="w-full"
      />
    </div>
  );
};

export default Product;
