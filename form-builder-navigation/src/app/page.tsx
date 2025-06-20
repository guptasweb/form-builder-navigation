'use client';

import { Navigation } from "@/components/navigation";

export default function Home() {

  return (
    <>
       <div className="w-full max-w-md space-y-6 my-auto">

       </div>
       <div className="flex flex-col min-h-screen">
         <Navigation />
         <main className="flex-grow">
           {/* Main content */}
         </main>
       </div>
    </>
 );

}
