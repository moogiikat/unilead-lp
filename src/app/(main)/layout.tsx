//
import { classNames } from "lib/utils";
import { Header, Footer } from "../(main)/layouts";

const MainLayout: React.FCC = ({ children }) => {
  return (
    <div className="lg:p-5 bg-[#3b4a94]">
      <div className={classNames("flex w-full flex-col bg-white rounded-2xl")}>
        <div className="sticky top-0 z-50">
          <Header />
        </div>
        <div className="min-h-screen mx-auto flex max-w-[1000px] items-start py-10 px-2">
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
