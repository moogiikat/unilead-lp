//
import { classNames } from "lib/utils";
import Image from "next/image";

const News: React.FC = () => {
  return (
    <div className="flex flex-col gap-y-5">
      <h1 className="font-bold text-xl">
        Үйлдвэрлэгч Амино Ап ХК-ийн товч танилцуулга
      </h1>
      <p>
        Амино Ап ХК нь Япон улсын Хоккайдо муж, Саппоро хотод байрладаг,
        байгалийн гаралтай эко эх үүсвэрээс эрүүл мэндийг дэмжих үйлдэл бүхий
        шинэ төрлийн био идэвхит бодис, нэгдэл гарган авах, цэвэршүүлэх, шим
        тэжээлт зохицуулах үйлчилгээтэй хүнс, түүний түүхий эд болон таримал
        ургамлын эко-био-идэвхжүүлэгч бэлдмэлийн технологи боловсруулан
        хөгжүүлж, байгаль орчинд ээлтэй үйлдвэрлэл явуулдаг биотехнологийн
        судалгаа, хөгжил, үйлдвэрлэлийн компани юм.
      </p>
      <div className="flex justify-center">
        <Image
          src={"/assets/news/news2.jpg"}
          width={500}
          alt={"logo"}
          height={500}
          // className="w-full"
        />
      </div>
      <p>
        Компани нь шим тэжээллэг хүнс, зохицуулах үйлчилгээтэй хүнсний хүний
        эрүүл мэнд, дархлааг дэмжих эерэг нөлөө үзүүлэхүйц, одоогоор бүрэн
        тодорхойлогдоогүй буй зарим үйлдлийг нээн илрүүлэхээс гадна дэлхий даяар
        энэ чиглэлийн эрдэм шинжилгээ, хүний нөөц болон хамтын ажиллагааны
        чадавх, боломжийг дээшлүүлж, өргөжүүлэн тэлэхэд хувь нэмэр оруулах
        зорилготой.
      </p>
      <p>
        Тус компаний бүтээгдэхүүнүүд нь шинжлэх ухааны ололт, дэвшилтэт арга,
        технологи ашигласан судалгаа шинжилгээний ажлын үр дүнд тулгуурладаг
        бөгөөд дэлхий даяар 100 гаруй их сургууль, эрдэм шинжилгээний
        байгууллагатай хамтран судалгааны төсөл хэрэгжүүлж ирсэн.
      </p>
      <p>
        Амино Ап ХК нь AHCC®, Oligonol®, ETAS® гэсэн үндсэн
        бүтээгдэхүүнүүдийг үйлдвэрлэдэг бөгөөд хамгийн алдартай нь дэлхийн 30
        гаруй оронд дархлаа дэмжих онцгой чанараараа хүлээн зөвшөөрөгдсөн
        зохицуулах үйлчилгээтэй, шим тэжээллэг хүнс AHCC® /functional
        food-dietary suppliment/ юм.
      </p>
      <Image
        src={"/assets/news/news1.png"}
        width={1000}
        alt={"logo"}
        height={1000}
        className="w-full"
      />
      <p>
        Амино Ап ХК нь хэрэглэгчийг аюулгүй болон өндөр чанар бүхий
        бүтээгдэхүүнээр хангахын тулд олон улсын стандартад нийцсэн чанарын
        удирдлага, хяналтын тогтолцоог хэрэгжүүлэн баримталдаг. Бүтээгдэхүүн
        бүртээ  Чанарын удирдлагын тогтолцоо-ISO 9001:2015,  Хүнсний аюулгүй
        байдлын хяналтын тогтолцоо-ISO 22000:2018,  Үйлдвэрлэлийн зохистой дадал
        \зохицуулах үйлчилгээтэй хүнс\-GMP for Dietary Supplements\ гэсэн
        тогтолцоонуудыг хэрэгжүүлдэг билээ.
      </p>
      <p className="whitespace-pre-wrap">
        {`Хаяг:Amino Up Co., Ltd. 363-32 Shin-ei, Kiyota Sapporo, 004-0839 Japan\nhttp://www.aminoup.jp/en; https://aminoup.info/en/`}
      </p>
    </div>
  );
};
export default News;