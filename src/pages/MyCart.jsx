import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import Bill from "../components/Bill";

const MyCart = () => {
  const carts = useSelector((state) => state.carts);
  // const product =
  // {
  //   id: 1,
  //   imageURL: "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/48289e46-9ac7-4620-8823-dbd499afae86/nike-invincible-run-3-by-you-custom-shoes.png",
  //   name: "Nike Invincible 3 By You",
  //   category: "Shoes",
  //   price: 7500,
  //   quantity: 100,
  // }
  return (
    <main className="py-12 max-w-7xl container mx-auto px-4">
      <div className="container mx-auto">
        <h2 className="mb-5 text-xl font-bold">Shopping Carts</h2>
        <div className="flex flex-col md:flex-row justify-between md:gap-8 gap-4">
          <div className="space-y-6 md:w-2/3">
            {carts.length ? (
              carts.map((product) => (
                <CartItem product={product} key={product.id} />
              ))
            ) : (
              <div>No product in your cart</div>
            )}
          </div>
          <div className="md:w-1/3">
            <Bill />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyCart;
