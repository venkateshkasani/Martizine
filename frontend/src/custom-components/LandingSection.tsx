const LandingSection = () => {
    return (
        <section className="">
            <div className="flex flex-col gap-5 w-full sm:w-[75vw]">
          <p className="text-center font-bold text-2xl sm:text-4xl my-5">You know what we've got ?</p>
        <div className="flex flex-col md:flex-row gap-5 items-center">
        <span className="bg-gray-900 rounded-xl relative w-full sm:w-2/3 md:w-1/2 overflow-hidden min-h-[250px]">
  <img src="/books.jpg" className="h-full w-full rounded-xl opacity-20 object-cover absolute top-0 left-0 z-0" />
  <p className="relative m-5 text-gray-400 px-2 text-sm sm:text-lg z-10 ">A treasure trove of past question papers, handwritten notes, and faculty-approved study materials—all in one place! Whether you're preparing for semester exams or mid-semester tests, we’ve got the resources to make your revision easier and more effective.</p>
        </span>
        <span className="bg-gray-900 rounded-xl relative w-full sm:w-2/3 md:w-1/2 overflow-hidden min-h-[250px]">
  <img src="/books2.jpg" className="h-full w-full rounded-xl opacity-20 object-cover absolute top-0 left-0 z-0" />
  <p className="relative m-5 text-gray-400 px-2 text-sm sm:text-lg z-10">We’ve gathered years of valuable study materials, from Autonomous SMEC and JNTU question papers to high-quality handwritten notes. No more last-minute panic—access everything you need to study smart and ace your exams with confidence! </p>
        </span>
        </div>
        </div>
        </section>
    )
}

export default LandingSection;