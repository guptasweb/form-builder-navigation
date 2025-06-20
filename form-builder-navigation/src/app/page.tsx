'use client';

import Navigation from "@/components/Navigation";

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

  // return (
    // <div className="h-screen bg-gray-100 flex">
    //   {/* Left Panel - States */}
    //   <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
    //     <div className="p-4 border-b border-gray-200">
    //       <h2 className="text-lg font-semibold text-gray-800">States</h2>
    //       <p className="text-sm text-gray-500">Settings open</p>
    //     </div>
        
    //     <div className="flex-1 p-4">
    //       {states.map((state) => (
    //         <div
    //           key={state.id}
    //           className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition-colors ${
    //             selectedState === state.id
    //               ? 'bg-blue-50 border border-blue-200'
    //               : 'hover:bg-gray-50'
    //           }`}
    //           onClick={() => setSelectedState(state.id)}
    //         >
    //           <div className="w-6 h-6 bg-orange-100 rounded mr-3 flex items-center justify-center">
    //             <span className="text-orange-600 text-xs">📄</span>
    //           </div>
    //           <div>
    //             <p className="font-medium text-gray-800">{state.name}</p>
    //             <p className="text-xs text-gray-500">{state.type}</p>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
        
    //     <div className="p-4 border-t border-gray-200">
    //       <div className="flex items-center p-3 rounded-lg hover:bg-gray-50 cursor-pointer">
    //         <div className="w-6 h-6 bg-orange-100 rounded mr-3 flex items-center justify-center">
    //           <span className="text-orange-600 text-xs">📄</span>
    //         </div>
    //         <div>
    //           <p className="font-medium text-gray-800">Other</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Main Content Area */}
    //   <div className="flex-1 flex flex-col">
    //     {/* Top Tabs */}
    //     <div className="bg-white border-b border-gray-200 px-6 py-3">
    //       <div className="flex space-x-6">
    //         {tabs.map((tab) => (
    //           <button
    //             key={tab}
    //             className={`px-4 py-2 text-sm font-medium rounded-lg transition-colors ${
    //               activeTab === tab
    //                 ? 'bg-blue-100 text-blue-700'
    //                 : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
    //             }`}
    //             onClick={() => setActiveTab(tab)}
    //           >
    //             {tab}
    //           </button>
    //         ))}
    //         <button className="ml-auto px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-100 rounded-lg">
    //           + Add page
    //         </button>
    //       </div>
    //     </div>

    //     {/* Content Area */}
    //     <div className="flex-1 bg-gray-50 p-6">
    //       <div className="bg-white rounded-lg shadow-sm border border-gray-200 h-full p-8">
    //         <div className="text-center text-gray-500">
    //           <h1 className="text-3xl font-bold text-gray-800 mb-4">Form Builder</h1>
    //           <p className="text-lg mb-2">Welcome to Galactic Alignment</p>
    //           <p>Select a tab to start building your form</p>
    //           <p className="text-sm mt-4">Current tab: <span className="font-semibold text-blue-600">{activeTab}</span></p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    //   {/* Right Panel - Settings */}
    //   <div className="w-80 bg-white border-l border-gray-200">
    //     <div className="p-4 border-b border-gray-200">
    //       <h2 className="text-lg font-semibold text-gray-800">Settings</h2>
    //     </div>
        
    //     <div className="p-4 space-y-4">
    //       <div className="flex items-center space-x-2">
    //         <input
    //           type="checkbox"
    //           id="firstPage"
    //           className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
    //           defaultChecked
    //         />
    //         <label htmlFor="firstPage" className="text-sm text-gray-700">
    //           Set as first page
    //         </label>
    //       </div>
          
    //       <button className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-50 rounded">
    //         <span className="text-gray-400">✏️</span>
    //         <span className="text-sm text-gray-700">Rename</span>
    //       </button>
          
    //       <button className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-50 rounded">
    //         <span className="text-gray-400">📋</span>
    //         <span className="text-sm text-gray-700">Copy</span>
    //       </button>
          
    //       <button className="flex items-center space-x-2 w-full text-left p-2 hover:bg-gray-50 rounded">
    //         <span className="text-gray-400">📑</span>
    //         <span className="text-sm text-gray-700">Duplicate</span>
    //       </button>
          
    //       <button className="flex items-center space-x-2 w-full text-left p-2 hover:bg-red-50 rounded text-red-600">
    //         <span className="text-red-400">🗑️</span>
    //         <span className="text-sm">Delete</span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  // );
}
