import Mail from "@mui/material/Icon";
import { FormattedMessage } from "react-intl";

const icons = {
  Mail,
};

const main = {
  id: "main",
  title: <FormattedMessage id="main" />,
  type: "group",
  children: [
    {
      id: "default",
      title: <FormattedMessage id="default" />,
      type: "item",
      url: "/main/default",
      icon: icons.Mail,
      breadcrumbs: false,
    },
    {
      id: "analytics",
      title: <FormattedMessage id="analytics" />,
      type: "item",
      url: "/main/analytics",
      icon: icons.Mail,
      breadcrumbs: false,
    },
  ],
};

export default main;
