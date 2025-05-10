
import type { Metadata } from "next";
import { Roboto_Mono } from "next/font/google";
import "./globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Navbar from "@/custom-components/Navbar";
import TanstackProvider from "@/utils/TanstackProvider";
import { Toaster } from "@/components/ui/toaster";

const roboto = Roboto_Mono({
    variable:"--fot-roboto-mono",
    subsets:["latin"],
    display:"swap",
})

export const metadata: Metadata = {
  title: "Martizine",
  description: "Martizine is a centralized platform for SMEC students to access and share handwritten notes, previous years' question papers, and academic resources. Designed to streamline exam preparation and improve academic performance, Martizine offers organized, searchable, and downloadable content tailored to specific courses and subjects. Built with Next.js for lightning-fast performance and optimized for discoverability, Martizine is the go-to digital library for every SMEC student’s academic needs.",
  icons:{
    icon:'/martizine.png'
  }
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GoogleOAuthProvider clientId={process.env.GOOGE_OAUTH_CLIENT_ID??""}>
      <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.variable} antialiased bg-slate-100`}
      >
        <TanstackProvider>
          <Toaster />
        <div>
        <Navbar />
          {children}
        </div>
        </TanstackProvider>
      </body>
    </html>
    </GoogleOAuthProvider>
  );
}
