'use client'
import Streams from "@/custom-components/Streams";
import MainHeader from "@/helper-components/MainHeader";
import StandardHeading from "@/helper-components/StandardHeading";

export default function Home() {

  return (
    <div className="h-[100vh]">
      <StandardHeading title="Select your stream!" />
      <Streams />
    </div>
  );
}