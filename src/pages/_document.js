import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { poppins } from "../utils/font";

function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <body className={`${poppins.variable} font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
