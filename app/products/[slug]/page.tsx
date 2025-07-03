import Image from "next/image";
import Navigation from "../../components/navigation";
import Footer from "../../components/footer";
import Link from "next/link";
import Spacer from "../../components/spacer";
import * as motion from "motion/react-client";
import fs from 'fs';
import path from 'path';
import { Product } from "../productsInterface";
import { ImageObject } from "../productsInterface";

const containerVariants = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
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
        transition: {
            duration: 0.6,
            ease: "easeOut"
        }
    }
};

const imageVariants = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};

// Generate static params for all products
export async function generateStaticParams() {
    const filePath = path.join(process.cwd(), 'app', 'products', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Your JSON structure is { "products": [...] }
    const products: Product[] = data.products;

    return products.map((product) => ({
        slug: product.model,
    }));
}

// Get product data
async function getProduct(slug: string): Promise<Product | null> {
    const filePath = path.join(process.cwd(), 'app', 'products', 'products.json');
    const jsonData = fs.readFileSync(filePath, 'utf8');
    const data = JSON.parse(jsonData);

    // Your JSON structure is { "products": [...] }
    const products: Product[] = data.products;

    return products.find((product) => product.model === slug) || null;
}

interface ProductPageProps {
    params: {
        slug: string;
    };
}

export default async function ProductsPage({ params }: ProductPageProps) {
    const product = await getProduct(params.slug);

    if (!product) {
        // In App Router, you can use notFound() function
        // import { notFound } from 'next/navigation';
        // notFound();
        return <div>Product not found</div>;
    }

    return (
        <main>
            <Navigation />
            <Spacer />
            <motion.div 
                className="products-container"
                variants={containerVariants}
                initial="hidden"
                animate="show"
            >
                    <Link href="/products" className="slug-link">Back to Products</Link>

                <motion.div 
                    className="products-block products-slug"
                    variants={containerVariants}
                >
                    <motion.div 
                        className="products-block-left"
                        variants={productVariants}
                    >
                        <h2>{product.model}</h2>
                        <span>Thickness: {product.thickness}</span>
                        <span>Height: {product.height}</span>
                        <span>Adjustment: {product.adjustment}</span>
                        <span>{product.reversible && "Reversible"}</span>
                        <span>{product.magnetic && "Magnetic"}</span>
                        <span>Profile: {product.profile}</span>
                    </motion.div>
                    
                    <motion.div 
                        className="products-block-right"
                        variants={containerVariants}
                    >
                        <motion.div 
                            className="products-top"
                            variants={imageVariants}
                        >
                            <div>
                                <Image
                                    src={product.images[0].src}
                                    alt={product.images[0].alt}
                                    sizes="100vw"
                                    fill={true}
                                />
                            </div>
                        </motion.div>
                        
                        <motion.div 
                            className="products-bottom"
                            variants={containerVariants}
                        >
                            <motion.div variants={imageVariants}>
                                <Image
                                    src={product.images[1].src}
                                    alt={product.images[1].alt}
                                    sizes="100vw"
                                    fill={true}
                                />
                            </motion.div>
                            <motion.div variants={imageVariants}>
                                {product.images[2] && product.images[2].src && (
                                    <Image
                                        src={product.images[2].src}
                                        alt={product.images[2].alt}
                                        sizes="100vw"
                                        fill={true}
                                    />
                                )}
                            </motion.div>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </motion.div>
            <Footer />
        </main>
    );
}