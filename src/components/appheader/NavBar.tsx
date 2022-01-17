import React from "react";
import useItemHook from "../customHook/useItemHook";
import { Link } from "react-router-dom";
import { CartItemType } from "../types/cartItem.types";
import { UsersType } from "../types/users.type";
import AdminPrivateRoutes from "./AdminPrivateRoutes";
import NonPrivateRoutes from "./NonPrivateRoutes";
import UserPrivateRoutes from "./UserPrivateRoutes";
type Props = {
  cartItems: number;
};

const NavBar: React.FC<Props> = ({ cartItems }) => {
  const [userData, setUserData] = React.useState<UsersType>();
  React.useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users") as string);
    console.log("users navbar", users);
    setUserData(users);
  }, []);
  console.log("usersData", userData);
  const handleLogOut = () => {
    localStorage.removeItem("users");
    window.location.reload();
  };
  return (
    <>
      {userData?.type === "admin" ? (
        <AdminPrivateRoutes />
      ) : userData?.type === "user" ? (
        <UserPrivateRoutes cartItems={cartItems} />
      ) : (
        <NonPrivateRoutes cartItems={cartItems} />
      )}
    </>
  );
};

export default NavBar;
