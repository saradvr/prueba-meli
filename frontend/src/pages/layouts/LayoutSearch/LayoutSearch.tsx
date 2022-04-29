import { Outlet } from "react-router-dom";
import { Header } from "../../../components/page/Header";

export const LayoutSearch = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};
