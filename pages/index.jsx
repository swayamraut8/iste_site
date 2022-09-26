import Layout from "../components/Layout";

export default function Home() {
    return (
        <Layout title="ISTE-VESIT | Home" content="Home page for ISTE-VESIT">
            <h1 className="font-bold text-3xl">HOME</h1>
            <p>
                Wrap all the pages content inside a layout tag as shown in
                index.jsx
            </p>
            {/* Example: 
            <Navbar/> */}
        </Layout>
    );
}
