//
import { classNames } from "lib/utils";
import { Header, Footer } from "../(main)/layouts";

const MainLayout: React.FCC = ({ children }) => {
  return (
    <div className={classNames("flex w-full flex-col")}>
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
  );
};
export default MainLayout;
