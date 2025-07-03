import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Link from "next/link";
import Spacer from "../components/spacer";
import * as motion from "motion/react-client";
import productsData from "./products.json";
import type { Product as productsInterface} from "./productsInterface";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
};
  
const productVariants = {
    hidden: { 
        opacity: 0, 
        y: 30,
    },
    show: { 
        opacity: 1, 
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6
        }
    }
};

const products: productsInterface[] = productsData.products as productsInterface[];

export default function Products() {
    return (
        <main>
            <Navigation />
            <Spacer />
            <div className="products-container">
                <h1>Our Products</h1>
                <motion.div 
                    className="products-grid"
                    variants={containerVariants}
                    initial="hidden"
                    animate="show"
                >
                    {products && products.map((product, i) => (
                        <Link 
                            key={product.model} 
                            href={{
                                pathname: `/products/${product.model}`
                            }}
                        >
                            <motion.div 
                                variants={productVariants}
                                whileHover={{ 
                                    scale: 1.05,
                                    transition: { duration: 0.2 }
                                }}
                                whileTap={{ scale: 0.98 }}
                                className="products-block"
                            >
                                <div className="products-block-top">
                                    <Image
                                        src={product.images[0].src}
                                        alt={product.images[0].alt || product.model}
                                        sizes="100vw"
                                        fill={true} 
                                    />
                                </div>
                                <div className="products-block-bottom">
                                    <span>{product.model}</span>
                                </div>
                            </motion.div>
                        </Link>    
                    ))}
                </motion.div>
            </div>
            <Footer />
        </main>
    );
}