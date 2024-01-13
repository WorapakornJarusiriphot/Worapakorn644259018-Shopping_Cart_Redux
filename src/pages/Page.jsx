import React from "react";
import { useSelector } from "react-redux";
import Home from "./Home";
import MyCart from "./MyCart";

const Page = () => {
    const page = useSelector((state) => state.pages);
    //const page = { home: false };
    return <div>{page.home ? <Home /> : <MyCart />}</div>;
};

export default Page;
