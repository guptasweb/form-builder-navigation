'use client';

import { Navigation } from "@/components/navigation";

// import { useState } from 'react';
// import Image from "next/image";
// import Navigation from '@/components/Navigation';

export default function Home() {
  // const [activeTab, setActiveTab] = useState('Info');
  // const [states] = useState([
  //   { id: 1, name: 'Other', type: 'Default' },
  //   { id: 2, name: 'Other', type: 'Hover' },
  //   { id: 3, name: 'Other', type: 'Other' },
  //   { id: 4, name: 'Other', type: 'Other' }
  // ]);
  // const [selectedState, setSelectedState] = useState(1);

  // const tabs = ['Info', 'Details', 'Other', 'Ending'];

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

       {/* <Navigation> */}
          <div className="flex justify-between items-center p-4 bg-white border-t border-gray-200">
            <div className="flex space-x-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Previous
              </button>
              <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                Next
              </button>
            </div>
          </div>
       {/* </Navigation> */}
    </>
 );

}
