import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
import { poppins } from "../utils/font";
import Script from "next/script";

function Document() {
  return (
    <Html>
        <Head>
        <link rel="preconnect" href="https://rsms.me" />
        <link
          rel="preload"
          href="https://rsms.me/inter/inter.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </noscript>
      
        <link
          rel="preload"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </noscript>
        <link
          rel="preload"
          href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"
          as="style"
          onLoad="this.onload=null;this.rel='stylesheet'"
        />
        <noscript>
          <link
            rel="stylesheet"
            href="https://cdn.iconmonstr.com/1.3.0/css/iconmonstr-iconic-font.min.css"
          />
        </noscript>
      
        <Script
          defer
          src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"
        />
      </Head>
      <body className={`${poppins.variable} font-sans`}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
