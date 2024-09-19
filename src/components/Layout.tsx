import { Outlet, Link } from "react-router-dom";
import { Logo } from "./Logo";
import { EPrimaryButtonVariants, PrimaryBtn } from "./PrimaryBtn";
import { seeder } from "../mockData";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Link to={"/"}>
        <div className="flex">
          <Logo />
          <PrimaryBtn
            className="text-[12px] py-1 leading-3"
            onClick={() => seeder(15)}
            label="seed back with random data"
            variant={EPrimaryButtonVariants.GHOST}
          />
        </div>
      </Link>
      <Outlet />
    </>
  );
};
