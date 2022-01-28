import { FunctionComponent } from "react";
import { Route, Routes } from "react-router-dom";

import Home from "../pages/home";
import Login from "../pages/login";
import { Paths } from "./routes.constants";
import PageNotFound from "../pages/pageNotFound";
import AppSkeleton from "../components/common/appSkeleton";

const AppRoutes: FunctionComponent = () => {
  return (
    <AppSkeleton>
      <Routes>
        <Route path={Paths.Home} element={<Home />} />
        <Route path={Paths.Help} element={<Login />} />
        <Route path={Paths.Root} element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </AppSkeleton>
  );
};

export default AppRoutes;
