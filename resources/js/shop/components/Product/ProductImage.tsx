import React, { useContext } from "react";
import { Product } from "../../types/product.types";
import UserContext from "../../context/UserContext";

interface ProductImageProps {
    product: Product;
}

const ProductImage = (props: ProductImageProps) => {
    const { product } = props;
    const { url } = useContext(UserContext);

    return (
        <div className="mx-auto mt-6 max-w-sm sm:px-6 lg:size-3/6 lg:max-w-md lg:px-8">
            <div className="aspect-h-4 aspect-w-3 hidden overflow-hidden rounded-lg lg:block">
                <img
                    src={`${url}/storage/images/${product.image}`}
                    alt={`${product.name} image`}
                    className="h-full w-full object-cover object-center"
                />
            </div>
        </div>
    );
};

export default ProductImage;
