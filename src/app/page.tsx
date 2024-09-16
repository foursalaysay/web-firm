'use client'

import Footer from "@/components/reusables/Footer";
import Section1 from "@/components/reusables/home/section-1";
import Section2 from "@/components/reusables/home/section-2";
import Section3 from "@/components/reusables/home/section-3";


export default function Home() {
  
  return (
      <div className="p-4 lg:p-10">
          <Section1 />
          <Section2 />
          <Section3 />
         <Footer />
      </div>
  );
}
