import { Outlet, Link } from "react-router-dom";
import { Logo } from "./Logo";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { seeder } from "../mockData";
import { Footer } from "./Footer";

export const Layout = (): JSX.Element => {
  return (
    <>
      <div className="w-screen fixed top-0 border-b border-solid border-rdbryBorder-50">
        <div className="w-full flex h-[100px] mx-[8.5%] items-center gap-20">
          <Link to={"/"}>
            <Logo />
          </Link>
          <PrimaryBtn
            className="text-[12px] py-1 leading-3"
            onClick={() => seeder(15)}
            label="seed back with random data"
            variant={EPrimaryButtonVariants.GHOST}
          />
        </div>
      </div>
      <div className="mx-[8.5%] mt-[177px]">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};
