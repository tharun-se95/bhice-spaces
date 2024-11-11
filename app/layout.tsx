// app/layout.tsx
"use client";

import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { store } from "./redux/store";
import { Provider } from "react-redux";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const metadata: Metadata = {
    title: "BHive",
    description: "Assesment Page",
  };
  return (
    <html lang="en">
      <head>
        <title>{String(metadata.title ?? "")}</title>
        <meta name="description" content={metadata.description || ""} />
      </head>
      <body>
        <Provider store={store}>
          <Header />
          <div className="container">
            <main>{children}</main>
          </div>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
