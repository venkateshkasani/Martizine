'use client'
import { Copyright } from "lucide-react";
const Footer = () => {
    return (
        <section className="bg-teal-700 min-h-[100px] flex items-center justify-center">
         <span className="flex text-slate-200 items-center justify-center text-sm">
            <Copyright size={15} />
            <span>2025 Martizine. All rights reserved.</span>
         </span>
        </section>
    )
}

export default Footer;