//
import { classNames } from "lib/utils";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <p>
        Хавдар, Халдварт өвчний эмчилгээний үр дүнг сайжруулж, дархлааг
        зохицуулан дэмжигч /иммуномодулятор/
      </p>
      <div className="grid md:grid-cols-3 gap-x-5 gap-y-2">
        <Link
          href={"#to1"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">АНСС® гэж юу вэ?</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#to2"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Онцлог чанар</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#to3"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Үйлдвэрлэлийн тухай</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#to4"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Аюулгүйн Чанар</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#to5"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Бүтээгдэхүүний төрөл</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
        <Link
          href={"#to6"}
          className="flex gap-x-2 border-x-0 border-t-0 border-b-yellow-600 border-2 justify-between hover:text-yellow-500 text-yellow-600"
        >
          <p className="flex items-center">Дэлхийд үнэлэгдсэн байдал</p>
          <div className="items-center flex">
            <ChevronDownIcon width={12} height={12} />
          </div>
        </Link>
      </div>
      <div>
        <h1 id="to1" className="text-2xl font-bold py-5">
          АНСС® гэж юу вэ?
        </h1>
        <Image
          alt="image"
          src={"/assets/about/1.png"}
          width={1000}
          height={1000}
        />
        <h1 id="to2" className="text-2xl font-bold py-5">
          Онцлог чанар
        </h1>
        <Image
          alt="image"
          src={"/assets/about/2.png"}
          width={1000}
          height={1000}
        />
        <h1 className="text-2xl font-bold py-5" id="to3">
          Үйлдвэрлэлийн тухай
        </h1>
        <Image
          alt="image"
          src={"/assets/about/3.png"}
          width={1000}
          height={1000}
        />
        <Image
          alt="image"
          src={"/assets/about/3-1.png"}
          width={1000}
          height={1000}
        />
        <Image
          alt="image"
          src={"/assets/about/3-2.png"}
          width={1000}
          height={1000}
        />
        <h1 className="text-2xl font-bold py-5" id="to4">
          Аюулгүйн Чанар
        </h1>
        <Image
          alt="image"
          src={"/assets/about/4.png"}
          width={1000}
          height={1000}
        />
        <Image
          alt="image"
          src={"/assets/about/4-1.png"}
          width={1000}
          height={1000}
        />
        <h1 className="text-2xl font-bold py-5" id="to5">
          Бүтээгдэхүүний төрөл
        </h1>
        <Image
          alt="image"
          src={"/assets/about/6.png"}
          width={1000}
          height={1000}
        />
        <div className="grid md:grid-cols-3">
          <Image
            src={"/assets/product/productA.png"}
            width={1000}
            alt={"logo"}
            height={1000}
            className="w-full"
          />
          <Image
            src={"/assets/product/productB.png"}
            width={1000}
            alt={"logo"}
            height={1000}
            className="w-full"
          />
          <Image
            src={"/assets/product/productC.png"}
            width={1000}
            alt={"logo"}
            height={1000}
            className="w-full"
          />
        </div>
        <h1 className="text-2xl font-bold py-5" id="to6">
          Дэлхийд үнэлэгдсэн байдал
        </h1>
        <Image
          alt="image"
          src={"/assets/about/5.png"}
          width={1000}
          height={1000}
        />
        <Image
          alt="image"
          src={"/assets/about/5-1.png"}
          width={1000}
          height={1000}
        />
        <Image
          alt="image"
          src={"/assets/about/Map.png"}
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default About;
