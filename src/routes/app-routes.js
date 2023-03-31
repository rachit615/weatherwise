import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Cities from "../pages/cities";
import { routes } from "../components/constants";
import Home from "../pages/home";
import { CustomLayout } from "../components/layouts/custom-layout";

export const AppRoute = () => {
  return (
    <>
      <Routes>
        <Route
          path={routes.home}
          element={
            <CustomLayout>
              <Home />
            </CustomLayout>
          }
        />
        <Route
          path={routes.cities}
          element={
            <CustomLayout>
              <Cities />
            </CustomLayout>
          }
        />
      </Routes>
    </>
  );
};
