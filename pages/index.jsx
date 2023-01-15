import { Inter } from "@next/font/google";
import ContactForm from "../components/ContactForm";
import Layout from "../components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Layout title="Home">
      <ContactForm />
    </Layout>
  );
}
