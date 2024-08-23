import Image from "next/image";
import LogoImg from "../../../public/images/eatsy.png";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-lightYellow font-14 text-slate-800">
      <div className="py-10 sm:py-16 container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-12">
          <div>
            <a
              href=""
              className="block mx-auto sm:mx-0 max-w-[180px] 2xl:max-w-[270px]"
            >
              <Image
                className="w-full object-cover object-center lg:mx-0 mx-auto"
                src={LogoImg}
                alt=""
              />
            </a>
          </div>
          <div>
            <p className="lg:w-10/12 w-full mx-auto text-center sm:text-left">
              Discover delicious recipes and culinary tips with us. Join our
              foodie community for endless inspiration and flavors!
            </p>
          </div>
          <div>
            <div className="lg:w-10/12 2xl:w-7/12 ml-auto">
              <div className="text-center sm:text-left">
                <p className="font-semibold font-16">Contacts</p>
                <p className="landing-font-18 text-light-text my-4">
                  (+01) 234 568
                </p>
                <p className="landing-font-18 text-light-text">
                  eatsy@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-t-gray-300">
        <div className="container flex justify-between py-3">
          <p className="">
            Copyright © 2024 <Link href={"/"}>eatsy</Link>
          </p>

          <ul>
            <li>
              <Link className="hover:underline capitalize" href="">
                Privacy policy
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
