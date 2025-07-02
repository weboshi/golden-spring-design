import Image from "next/image";
import Navigation from "./components/navigation";
import Footer from "./components/footer";
import * as motion from "motion/react-client";
import Transform from "../public/images/transform.jpg";
import TransformTwo from "../public/images/transform-1.jpg";
import FunctionOne from "../public/images/function-1.jpg";
import FunctionTwo from "../public/images/function-2.jpg";
import FunctionThree from "../public/images/function-3.jpg";
import FunctionFour from "../public/images/function-4.jpg";


export default function Home() {
  return (
    <main>
      < Navigation />
      <section className="block home">

          <div className="block-inner right">
            <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }>
            <h1>Golden Spring Designs</h1>
            <p>Premium Shower Door Design & Manufacturing</p>
            </motion.div>

          </div>
      </section>
      <section className="block function">
        <div className="block-inner left">
          <motion.div className="block-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }
          >
            <h2>Beauty Meets Function</h2>

            <p>Our shower doors are designed to deliver both sophisticated elegance and seamless everyday functionality.</p>
          </motion.div>
        </div>
        <div className="block-inner right">
          <motion.div className="block-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }
          >
            <Image src={FunctionOne}
              alt=""
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </motion.div>


        </div>
      </section>
      <section className="three-block">
        <motion.div className="three-block-single"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: .5 }}
        >
          <div className="single-upper">
            <Image src={FunctionTwo}
              className="door-image"
              alt=""
              sizes="100vw"
              style={{
                width: 'auto',
                height: '300px',
              }} />
          </div>
          <div className="single-copy">
            <h3>Sculpted and Engineered</h3>
            <p>Sophisticated style with premium finishes engineered for any environment</p>
          </div>
        </motion.div>
        <motion.div className="three-block-single"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: .75 }
        }>
          <div className="single-upper">
            <Image src={FunctionThree}
              className="door-image"
              alt=""
              sizes="100vw"
              style={{
                width: 'auto',
                height: '300px',
              }} />
          </div>
          <div className="single-copy">
            <h3>Smart Handle Design</h3>
            <p>Elegantly designed handles that double as towel holders for convenient access</p>
          </div>
        </motion.div>
        <motion.div className="three-block-single"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ ease: "easeInOut", duration: 0.75, delay: 1 }
        }>
          <div className="single-upper">
            <Image src={FunctionFour}
              className="door-image"
              alt=""
              sizes="100vw"
              style={{
                width: 'auto',
                height: '300px',
              }} />
          </div>
          <div className="single-copy">
            <h3>Leak-Proof Glass Panels</h3>
            <p>Adhesive strips prevent overflow with smooth, effortless operation</p>

          </div>
        </motion.div>
      </section>
      
      <section className="block eco">
        <div className="block-inner left">
        </div>
        <div className="block-inner right">
          <motion.div className="block-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }
          >
            <h2>ECO-FRIENDLY</h2>
            <p>Our shower doors are crafted with commitment to environmental safety standards</p>
            <ul>
              <li>Reduced carbon footprint</li>
              <li>Renewable energy integration</li>
              <li>Non-toxic materials and finishes</li>
            </ul>
          </motion.div>
        </div>
      </section>
      <section className="block transform">
        <div className="block-inner left">
          <motion.div className="block-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }
          >
            <h2>Contour with Warmth</h2>
            <p>Transform your shower space into a tranquil retreat with our versatile designs that complement any bathroom layout</p>
          </motion.div>
        </div>
        <div className="block-inner right">
          <motion.div className="block-content"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ease: "easeInOut", duration: 0.75 }
            }
          >
            <Image src={Transform}
              alt=""
              sizes="100vw"
              style={{
                width: '100%',
                height: 'auto',
              }} />
          </motion.div>

        </div>
      </section>
      <Footer/>
    </main>
  );
}
