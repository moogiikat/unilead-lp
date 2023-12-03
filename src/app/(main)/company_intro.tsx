import { classNames } from "lib/utils";

const CompanyIntro: React.FC = () => {
  return (
    <div className="w-full bg-[#3b4a94] text-white rounded-2xl">
      <div
        className={classNames(
          "container mx-auto my-5 px-4 py-12 md:px-16 md:py-24 md:max-w-[1200px]",
          "grid grid-cols-1 gap-10 md:gap-20",
          "md:grid-cols-2 md:gap-36"
        )}
      >
        <div>
          <p className="mb-7 flex items-center text-xl font-medium md:font-extrabold">
            会社紹介
          </p>
          <p className="mb-8 text-2xl md:text-4xl font-medium md:font-extrabold">
            会社の紹介ビデオが出来上がりました。
          </p>
          <p className="text-white text-sm md:text-md">
            モンゴルパワーを⽇本へ ⽇本の先端技術をモンゴルへ LEADする
            <br />
            モンゴルパワーを⽇本へ ⽇本の先端技術をモンゴルへ LEADする
          </p>
        </div>
        <iframe
          className="h-[300px] w-full"
          src="https://www.youtube.com/embed/wVuFJS1LydQ"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        />
      </div>
    </div>
  );
};

export default CompanyIntro;
