import { Outlet, Link } from "react-router-dom";
import { Logo } from "./Logo";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { seeder } from "../mockData";
import { Footer } from "./Footer";
import { QuoteSlider } from "./QuoteSlider";
import { SeederOptions } from "./SeederOptions";

export const Layout = (): JSX.Element => {
  return (
    <>
      <div className="top-0 border-b border-solid border-rdbryBorder-50 bg-white z-50">
        <header className="w-full flex h-[100px] px-[8%] items-center gap-20">
          <div className="w-full flex h-[100px] items-center gap-20">
            <Link to={"/"}>
              <Logo />
            </Link>
          </div>
          <SeederOptions />
          <PrimaryBtn
            className="text-[12px] py-1 leading-3"
            onClick={() => seeder({ amount: 15 })}
            label="seed back with random data"
            variant={EPrimaryButtonVariants.GHOST}
          />

          <div className="w-96">
            <QuoteSlider />
          </div>
        </header>
      </div>
      <div className="mx-[8%]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
