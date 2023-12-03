//
import { classNames } from "lib/utils";
import Image from "next/image";
import { Header, Footer } from "../(main)/layouts";

const MainLayout: React.FCC = ({ children }) => {
  return (
    <div className="lg:p-5 bg-[#3b4a94]">
      <div
        className={classNames("flex w-full flex-col bg-white lg:rounded-2xl")}
      >
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="absolute right-10 bottom-1/4 gap-y-5 lg:flex flex-col hidden">
          <Image
            alt="image"
            src={"/assets/social/facebook.png"}
            className="animate-bounce rounded-2xl shadow-2xl"
            width={50}
            height={50}
          />
          <Image
            alt="image"
            src={"/assets/social/instagram.png"}
            className="animate-bounce rounded-2xl shadow-2xl"
            width={50}
            height={50}
          />
          <Image
            alt="image"
            src={"/assets/social/twitter.png"}
            className="animate-bounce rounded-2xl shadow-2xl"
            width={50}
            height={50}
          />
          <Image
            alt="image"
            src={"/assets/social/youtube.png"}
            className="animate-bounce rounded-2xl shadow-2xl"
            width={50}
            height={50}
          />
        </div>
        <div className="min-h-screen mx-auto flex max-w-[1200px] items-start py-10 px-2">
          {children}
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};
export default MainLayout;
