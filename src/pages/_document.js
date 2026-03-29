import React from "react";
import { Html, Head, Main, NextScript } from "next/document";
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
      
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;300;400;600;700;900&display=swap" rel="stylesheet" />
      
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
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

export default Document;
