import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

import Spacer from "../components/spacer";
import Rotate from "../components/animate/rotate";
import * as motion from "motion/react-client";
import aboutone from "../../public/images/about-1.png";
import about2 from "../../public/images/about-2.png";
import about3 from "../../public/images/about-3.png";
import aboutfour from "../../public/images/about-4.png";





export default function About() {
    return (
        <main>
            < Navigation />
            <Spacer />
            <div className="block about-block">
                <div className="block-inner left">

                    <motion.div className="block-content"
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                    >
                        <h1 className="left-header">ABOUT GOLD</h1>
                        <h1 className="mobile-header">ABOUT GOLDEN SPRINGS</h1>
                    </motion.div>
                    <motion.div className="block-content"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ ease: "easeInOut", duration: 0.75 }}
                    >
                        <p>
                            Golden Spring, headquartered in California, is a dedicated manufacturer specializing in high-quality shower doors. From concept and design to production, sales, and support, we offer complete solutions tailored for modern bathroom spaces.
                            <br /><br />
                            Our expertise lies in crafting sleek, durable, and functional shower door systems that combine aesthetic appeal with long-lasting performance. Whether frameless, semi-frameless, or custom-designed, each product is built to meet the highest standards of quality and craftsmanship.
                            <br /><br />
                            With years of industry experience, our in-house team of designers, engineers, and technicians works closely with clients to deliver both ready-made and fully customized shower door solutions. At Golden Spring, we turn your vision into a refined, professional reality.</p>
                    </motion.div>
                </div>
                <div className="block-inner right">
                    <div className="top-image">

                        <motion.div
                            className="about-image"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ ease: "easeInOut", duration: 0.75 }}>
                            <motion.div
                                initial={{ x: 20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}
                            >
                                <h1>EN SPRING</h1>

                            </motion.div>
                            <Image src={aboutone}
                                alt=""
                                sizes="100vw"
                                style={{
                                    width: '100%',
                                    height: 'auto',
                                }} />
                        </motion.div>
                        <div className="bottom-image">
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}>
                                <Image src={about2}
                                    alt=""
                                    sizes="100vw"
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                    }} />
                            </motion.div>
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ ease: "easeInOut", duration: 0.75 }}>
                                <Image src={about3}
                                    alt=""
                                    style={{
                                        width: '100%',
                                        height: 'auto',
                                    }} />

                            </motion.div>
                        </div>

                    </div>


                </div>
            </div>
            <Footer />
        </main>
    );
}


