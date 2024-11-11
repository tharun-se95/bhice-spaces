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
    description:
      "Book your meetings at BHIVE Workspace, offering world-class amenities starting at just ₹199/day! Enjoy comfortable lounges, high-speed WiFi, gym facilities, a cafe & tea bar, and quick booking options. Explore multiple workspace locations in HSR Sector, Bangalore, with flexible day passes and bulk pass discounts. Download the BHIVE Workspace app to elevate your productivity and unlock exclusive perks.",
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
