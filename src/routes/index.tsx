import { useRoutes } from "react-router-dom";
import account from "./account";

import main from "./main";

export default function Routes() {
  return useRoutes([main, account]);
}
