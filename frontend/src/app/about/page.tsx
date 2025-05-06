"use client";
import Footer from "@/custom-components/Footer";
import { aboutContent,aboutContent2 } from "@/utils/fillers";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const page = () => {
  return (
    <section>
      <div className="w-full flex flex-col items-center pt-5">
        <p className="mainHeading text-2xl sm:text-3xl md:text-4xl sm:font-semibold pb-5 underline font-bold">
          About Us
        </p>
        <div className="aboutSection flex justify-center items-center h-[40vh] sm:h-[50vh] bg-no-repeat bg-cover w-full">
          <span className="w-full px-4 sm:px-0 sm:w-2/3 sideHeading text-sm sm:text-md md:text-lg">
            {aboutContent}
            <br/>
            <br/>
            {aboutContent2}
          </span>
        </div>
        <div className="flex flex-col gap-4 px-5 sm:px-0 items-center w-full sm:w-1/2 my-5">
        <p className="text-xl sm:text-3xl md:text-4xl font-bold text-center underline">FAQs</p>
          <Accordion type="single" collapsible className="w-full m-5">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                What are the sources of these resources ?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                These are references of faculty approved documentations and high quality handwritten notes of merit students.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                What kinds of study material does this app provide ?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                You can access previous year question papers, handwritten notes, Assignments, and documentations of subjects.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg">
                 How often do the files update ?
              </AccordionTrigger>
              <AccordionContent className="text-md">
                The new question papers will be added within a week of the respective examinations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      <Footer />
    </section>
  );
};

export default page;
