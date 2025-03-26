'use client'
import Streams from "@/custom-components/Streams";
import StandardHeading from "@/helper-components/StandardHeading";
import Footer from "./Footer";

export default function Home() {
  return (
    <div className="h-fit mainDiv">
      <section className="min-h-[100vh]">
      <StandardHeading title="Select your Stream!" />
      <Streams />
      {/* <Footer /> */}
      </section>
      <section>
      <footer className="">
        <Footer />
      </footer> 
      </section>
    </div>
  );
}