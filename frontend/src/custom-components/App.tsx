'use client'
import Streams from "@/custom-components/Streams";
import Footer from "./Footer";
import { TextAnimate } from "@/components/magicui/text-animate";
import { RetroGrid } from "@/components/magicui/retro-grid";
import useStore from "@/state-management/Store";
import React from "react";

export default function Home() {
  const setLoading = useStore((state) => state.updateLoading);
  React.useEffect(() => {
  setLoading(false);
  },[])
  return (
    <div className="mainDiv">
      <div className="fit relative">
      <section className="min-h-[100vh]">
        <RetroGrid className="h-full w-[100vw]"/>
      <TextAnimate startOnView={false} className="text-3xl sm:text-4xl font-bold text-center py-5" animation="blurInUp">Select your Stream!</TextAnimate>
      <Streams />
      </section>
      </div>
      <section>
      <footer className="">
        <Footer />
      </footer> 
      </section>
    </div>
  );
}