"use client";
import React, { useEffect } from "react";
import { Plus } from "lucide-react";
import Link from "next/link";

const AddFileButton = () => {
  const [windowWidth, setWindowWidth] = React.useState("");
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth <= 450 ? "small" : "large");
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <Link href={"/upload"}>
        <span
          style={{ whiteSpace: "nowrap" }}
          className="h-fit p-2 px-3 sm:px-2 sm:p-3 text-white text-xs sm:text-sm bg-teal-700 w-fit rounded flex items-center hover:cursor-pointer"
        >
          {windowWidth == "small" ? <Plus color="white" /> : "Add Files + "}
        </span>
      </Link>
    </div>
  );
};

export default AddFileButton;
