import { Inter } from "@next/font/google";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";
import Image from "next/image";
import Domains from "../components/Domains";
import Project from "../components/Project";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home">
      <div className="bg-neutral-800 relative w-196 h-196">
        <Image
          src={"/../public/images/vesit_bg.jpg"}
          width={700}
          height={700}
          alt="Post image"
          className="mix-blend-overlay w-full h-full object-contain"
        />
        <div className="absolute font-sans top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <h1 className="text-gray-100 text-center text-4xl font-bold uppercase">
            Welcome to ISTE-VESIT,
          </h1>
          <h1 className="mt-3 text-gray-100 text-center text-4xl font-bold uppercase">
            Where Imagination Is Power
          </h1>
          <p className="mt-6 text-gray-100 text-center">
            Welcome to the Indian Society for Technology in Education (ISTE),
            home to a passionate community of global educators who believe in
            the power of technology to transform teaching and learning,
            accelerate innovation and solve tough problems in education.
          </p>
          {/* <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-6 py-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Extra large
          </button> */}
        </div>
      </div>
      <Domains />
      <Project />
      <ContactForm />
    </Layout>
  );
}
