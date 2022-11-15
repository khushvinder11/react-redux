import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem("Services", "services", <MailOutlined />, [
    getItem("User", "/service/add"),
    getItem("Table", "/service/table"),
  ]),
  getItem("Product", "product", <AppstoreOutlined />, [
    getItem("Student", "/project/add"),
    getItem("Table", "/project/table"),
  ]),
];

const NavbarSecond = () => {
  const nevigate = useNavigate();

  // const location = useLocation();
  // console.log(location.pathname, "location");

  const onClick = (e) => {
    console.log("click ", e.key);
    nevigate(e.key);
  };

  return (
    <Menu
      onClick={onClick}
      style={{
        width: 300,
      }}
      // defaultSelectedKeys={[location.pathname]}
      defaultOpenKeys={["product"]}
      mode="inline"
      items={items}
    />
  );
};
export default NavbarSecond;
