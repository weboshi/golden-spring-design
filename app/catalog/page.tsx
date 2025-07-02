import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Spacer from "../components/spacer";
import * as motion from "motion/react-client";
import CatalogCover from "../../public/images/catalog.jpg";


export default function Catalog() {
    return (
        <main>
            < Navigation />
            <Spacer />
            <div className="block catalog">
                <div className="block-inner left">
                    <motion.div className="block-content"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                    >
                        <h1>Our Catalog</h1>
                        <p>Explore our full 2025 product range through our downloadable catalog</p>
                        <a href="/GoldenSpringCatalog.pdf" download>DOWNLOAD</a>
                    </motion.div>

                </div>
                <div className="block-inner right">
                    <motion.div className="block-content"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                    >
                        <Image src={CatalogCover}
                                alt=""
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                    </motion.div>
                </div>
            </div>
            <Footer />
        </main>
    );
}


