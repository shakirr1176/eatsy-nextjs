import bannerImg from "../../../../public/images/eatsy-home-page-banner.jpeg";
import PrimaryBtn from "../Button/PrimaryBtn";

export default function Banner() {
  return (
    <div
      className="bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bannerImg.src})` }}
    >
      <div className="bg-gradient-to-r from-black/60 to-transparent absolute inset-0 z-0"></div>
      <div className="relative z-10 container py-24 md:py-28">
        <div className="text-center lg:text-left w-full lg:w-10/12 xl:w-7/12">
          <h1 className="text-white font-42 font-semibold">
            Delivery or Takeaway Food
          </h1>
          <p className="text-slate-300 font-28 mb-7">
            The best restaurants at the best price
          </p>
          <div className="lg:rounded-md lg:bg-white lg:p-1 lg:flex">
            <input
              placeholder="Address, neighborhood, or city"
              className="rounded-md py-3 font-14 w-full mb-4 sm:mb-6 lg:mb-0 bg-white placeholder:text-slate-700 px-4 outline-none flex-1 bg-transparent"
              type="text"
            />
            <PrimaryBtn className="w-full lg:w-auto" />
          </div>
          <p className="text-slate-300 font-14 mt-4">
            Trending: Sushi Burgher Chinese Pizza
          </p>
        </div>
      </div>
    </div>
  );
}
