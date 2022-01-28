import { FunctionComponent } from "react";
import { Route, Routes as ReactRoutes } from "react-router-dom";

import Login from "../pages/login";
import AppRoutes from "./AppRoutes";
import { Paths } from "./routes.constants";

const Routes: FunctionComponent = () => {
  return (
    <ReactRoutes>
      <Route path={Paths.Login} element={<Login />} />
      <Route path="*" element={<AppRoutes />} />
    </ReactRoutes>
  );
};

export default Routes;
