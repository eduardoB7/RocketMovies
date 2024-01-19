import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./authentic.routes";

export function Router() {
  return (
    <BrowserRouter>
      <AuthRoutes />
    </BrowserRouter>
  );
}
