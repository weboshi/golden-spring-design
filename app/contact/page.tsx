import Image from "next/image";
import Navigation from "../components/navigation";
import Footer from "../components/footer";
import Spacer from "../components/spacer";
import * as motion from "motion/react-client";
import ContactImage from "../../public/images/products/PC-S121B-SP-1.jpg"
import { Metadata } from "next";
import Form from "../components/form/Hubspotcontactform";


export const metadata: Metadata = {
    title: 'About',
};


export default function Contact() {
    return (
        <main>
            < Navigation />
            <Spacer />
            <div className="mx-auto p-6 lg:w-[70%]">
                <h1 className="mb-6 text-2xl font-bold text-center">Contact Us</h1>
                <Form />
            </div>
            <Footer />
        </main>
    );
}


