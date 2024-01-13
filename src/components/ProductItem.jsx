import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/actions";
import { removeQuantity } from "../redux/products/actions";

const ProductItem = ({ product }) => {
    const dispatch = useDispatch();
    const { id, imageURL, name, category, price, quantity } = product;
    const handleAddToCart = () => {
        dispatch(addToCart(product));
        dispatch(removeQuantity(id));
    };
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl">
            <figure className="relative">
                <img src={`${imageURL}`} alt={`${name}`} className="h-80 w-full" />
                <div className="badge badge-secondary absolute top-3 right-3">
                    {category}
                </div>
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>สินค้านี้เป็นผลิตภัณฑ์คุณภาพสูงที่เหมาะสำหรับการใช้งานทุกประเภท ให้คุณคุ้มค่ากับการลงทุนทุกครั้ง</p>

                <div className="flex justify-bewteen">
                    <p className="w-full">Available" {quantity}</p>
                    <p className="text-left">{price}฿</p>
                </div>
                <div className="card-action mt-2">
                    <button
                        className="btn btn-sm btn-primary"
                        disabled={quantity === 0}
                        onClick={handleAddToCart}
                    >
                        Buy Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;