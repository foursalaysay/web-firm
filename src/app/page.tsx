'use client'

import Footer from "@/components/reusables/Footer";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  
  return (
      <ScrollArea className="w-full h-[calc(100vh -98px)]">
        <Footer />
      </ScrollArea>
     
  );
}
