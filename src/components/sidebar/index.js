import React, { useState } from "react";
import { SidebarStyledWrapper } from "./style";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { routes } from "../constants";
const Sidebar = (props) => {
  const { sidebarTabs } = props;
  const [selectedTab, setSelectedTab] = useState("Home");

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/") {
      setSelectedTab("Home");
    } else if (location.pathname === "/cities") {
      setSelectedTab("Cities");
    }
  }, [setSelectedTab]);
  const handleSelectedTab = (tab) => {
    setSelectedTab(tab);
    if (tab === "Home") {
      navigate("/");
      return;
    }
    navigate(routes.cities);
  };
  return (
    <>
      <SidebarStyledWrapper>
        {sidebarTabs &&
          sidebarTabs.map((tab) => {
            return (
              <div
                className={
                  selectedTab === tab.tab
                    ? "selected-tab-container"
                    : "tab-container"
                }
                onClick={() => handleSelectedTab(tab.tab)}
              >
                {tab.tab}
              </div>
            );
          })}
      </SidebarStyledWrapper>
    </>
  );
};

export default Sidebar;
