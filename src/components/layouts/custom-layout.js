import { sidebarTabs } from "../constants";
import { Header } from "../header";
import Sidebar from "../sidebar";

export const CustomLayout = (props) => {
  return (
    <>
      <Sidebar sidebarTabs={sidebarTabs} />
      {props.children}
    </>
  );
};
