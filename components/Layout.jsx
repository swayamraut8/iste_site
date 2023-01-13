import React, { FC } from "react";
import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ title, content, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={content} />
        <link
          rel="icon"
          href="http://istevesit.org/static/media/iste_blue.13e6535d.png"
        />
      </Head>
      <div>
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
