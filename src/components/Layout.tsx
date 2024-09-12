import { Outlet, Link } from "react-router-dom";
import { Logo } from "./Logo";

export const Layout = (): JSX.Element => {
  return (
    <>
      <Link to={"/"}>
        <Logo />
      </Link>
      <Outlet />
    </>
  );
};
