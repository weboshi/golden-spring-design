import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import Spacer from "../components/spacer";
import * as motion from "motion/react-client";
import products from "./products.json";
import FunctionOne from "../../public/images/function-1.jpg";
import FunctionTwo from "../../public/images/function-2.jpg";
import FunctionThree from "../../public/images/function-3.jpg";







export default function Products() {
    return (
        <main>
            <Navigation />
            <Spacer />
            <div className="products-container">
                <h1>Our Products</h1>
                {products && products.products.map((product, i) => (
                    <div key={i} className="products-block">
                        <div className="products-block-left">
                            <h2>{product.model}</h2>
                            <span>Thickness: {product.thickness}</span>
                            <span>Height: {product.height}</span>
                            <span>Adjustment: {product.adjustment}</span>
                            <span>{product.reversible && "Reversible"}</span>
                            <span>{product.magnetic && "Magnetic"}</span>
                            <span>Profile: {product.profile}</span>
                        </div>
                        <div className="products-block-right">
                            <div className="products-top">
                                <div>
                                    <Image
                                        src={product.images[0]}
                                        alt=""
                                        sizes="100vw"
                                        fill={true}
                                    />
                                </div>
                            </div>
                            <div className="products-bottom">
                                <div>
                                    <Image
                                    src={product.images[1]}
                                    alt=""
                                    sizes="100vw"
                                    fill={true}
                                /></div>
                                <div>
                                    {product.images[2].src && 
                                    <Image
                                    src={product.images[2]}
                                    alt=""
                                    sizes="100vw"
                                    fill={true}
                                />}
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <Footer />
        </main>
    );
}


