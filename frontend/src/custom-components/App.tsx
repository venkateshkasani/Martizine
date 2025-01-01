import Streams from "@/custom-components/Streams";
import StandardHeading from "@/helper-components/StandardHeading";


export default function Home() {
  return (
    <div className="h-[100vh] mainDiv">
      <StandardHeading title="Select your stream!" />
      <Streams />
    </div>
  );
}