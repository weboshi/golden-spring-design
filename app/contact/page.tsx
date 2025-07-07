import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Spacer from "../components/spacer";
import * as motion from "motion/react-client";
import ContactImage from "../../public/images/products/PC-S121B-SP-1.jpg"






export default function Contact() {
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
                        <h1 className="left-header">Contact Us</h1>
                        <p>For quotes or inquiries, contact support@goldenspringdesigns.com</p>
                    </motion.div>
                </div>
                <div className="block-inner right">
                    <motion.div className="block-content"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                    >
                        <Image src={ContactImage}
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


