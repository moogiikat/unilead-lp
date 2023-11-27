import { classNames } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/solid";

export default function Home() {
  // useruud
  const users = [
    { userId: 1, longitude: 32, latitude: 33 },
    { userId: 2, longitude: 32, latitude: 34 },
    { userId: 3, longitude: 32, latitude: 35 },
    { userId: 4, longitude: 32, latitude: 36 },
    { userId: 5, longitude: 32, latitude: 37 },
    { userId: 6, longitude: 32, latitude: 38 },
    { userId: 7, longitude: 32, latitude: 39 },
  ];

  // 指定のユーザーの座標
  const targetUserCoordinates = { longitude: 32, latitude: 33 };

  // 10キロ以内にいるユーザーのIDを見つける関数
  function findUsersWithin10Km(
    targetCoordinates: { longitude: number; latitude: number },
    allUsers: Array<{ userId: number; longitude: number; latitude: number }>
  ): number[] {
    const EARTH_RADIUS_KM = 6371; // 地球の半径（キロメートル）

    // 10キロ以内にいるユーザーのIDを格納する配列
    const usersWithin10Km: number[] = [];

    for (const user of allUsers) {
      const dLat =
        (user.latitude - targetCoordinates.latitude) * (Math.PI / 180);
      const dLon =
        (user.longitude - targetCoordinates.longitude) * (Math.PI / 180);

      const a =
        Math.sin(dLat / 2) ** 2 +
        Math.cos(targetCoordinates.latitude * (Math.PI / 180)) *
          Math.cos(user.latitude * (Math.PI / 180)) *
          Math.sin(dLon / 2) ** 2;

      const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

      const distance = EARTH_RADIUS_KM * c;

      if (distance <= 10) {
        console.log(distance);
        usersWithin10Km.push(user.userId);
      }
    }

    return usersWithin10Km;
  }

  // 10キロ以内にいるユーザーのIDを検索
  const usersWithin10Km = findUsersWithin10Km(targetUserCoordinates, users);
  console.log(usersWithin10Km); // [1, 2]

  return (
    <div>{usersWithin10Km.toString()}</div>
    // <div
    //   className={classNames("flex flex-col justify-center gap-y-4 text-black")}
    // >
    //   <Image
    //     src={"/assets/home.png"}
    //     width={1000}
    //     alt={"logo"}
    //     height={1000}
    //     className="w-full"
    //   />
    //   <p>
    //     Дэлхий даяар нийтлэгдсэн 100 гаруй нийтлэл, шинжлэх ухааны өргөн
    //     хүрээний судалгаагаар дэмжигдсэн AHCC® нь 1989 онд анх худалдаанд
    //     гарсан цагаасаа хойш Япон улсдаа болон дэлхийн өнцөг булан бүрт
    //     эмнэлгийн практикт ашиглагдаж байна.
    //   </p>
    //   <div>
    //     <h1 className="font-bold py-5 text-3xl text-center">Шинэ Мэдээ</h1>
    //     <div className="flex flex-col gap-y-2">
    //       <Link href={"/news/1"} className="hover:text-yellow-600">
    //         <div className="flex py-4 justify-between">
    //           <div className="flex gap-x-5">
    //             <p className="items-center flex">
    //               <span className="text-yellow-600 text-3xl">・</span>
    //               2023.09.11
    //             </p>
    //             <p className="items-center flex">
    //               Дархлаа дэмждэг шилдэг бүтээгдэхүүнийг Монгол улсад нийлүүлэх
    //               онцгой эрх
    //             </p>
    //           </div>
    //           <div className="flex items-center">
    //             <ChevronRightIcon width={"20"} height={"20"} />
    //           </div>
    //         </div>
    //       </Link>
    //       <div className="border border-x-0 border-t-0"></div>
    //       <Link href={"/news/2"} className="hover:text-yellow-600">
    //         <div className="flex gap-x-5 py-4 justify-between">
    //           <div className="flex gap-x-5">
    //             <p className="items-center flex">
    //               <span className="text-yellow-600 text-3xl">・</span>
    //               2023.09.11
    //             </p>
    //             <p className="items-center flex">
    //               Үйлдвэрлэгч Амино Ап ХК-ийн товч танилцуулга
    //             </p>
    //           </div>
    //           <div className="flex items-center">
    //             <ChevronRightIcon width={"20"} height={"20"} />
    //           </div>
    //         </div>
    //       </Link>
    //     </div>
    //   </div>
    // </div>
  );
}
