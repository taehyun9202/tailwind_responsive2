import Head from "next/head";
import { useState } from "react";
import Header from "./components/Header";
import MenuIcon from "@material-ui/icons/Menu";
import EqualizerIcon from "@material-ui/icons/Equalizer";

export default function Home({ size }) {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <div className={`${size}`}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="rounded-xl h-14">
        <Header />
      </div>

      <div className="flex justify-center items-center lg:hidden p-2 mt-14 mb-4 space-x-2">
        <button
          onClick={() => setShowSidebar(false)}
          className="block w-20 h-10 bg-blue-400 rounded-2xl text-gray-200 hover:ring-2 ring-blue-600 focus:ring-2 focus:outline-none"
        >
          <EqualizerIcon />
        </button>
        <button
          onClick={() => setShowSidebar(true)}
          className="block w-20 h-10 bg-blue-400 rounded-2xl text-gray-200 hover:ring-2 ring-blue-600 focus:ring-2 focus:outline-none"
        >
          <MenuIcon />
        </button>
      </div>

      <div className="overflow-hidden">
        <div
          className={`transform transition-all duration-300 ${
            showSidebar && "-translate-x-full"
          }`}
        >
          <div className="flex mt-0 lg:mt-10 space-x-4 lg:space-x-10">
            <div className="w-full flex-shrink-0 lg:w-3/4 lg:flex-shrink rounded-xl">
              <div className="flex space-x-4 lg:space-x-10">
                <div className="bg-gray-300 rounded-xl h-44 w-full"></div>
                <div className="bg-gray-300 rounded-xl h-44 w-full"></div>
                <div className="bg-gray-300 rounded-xl h-44 w-full"></div>
              </div>

              <div className="bg-gray-300 rounded-xl w-full h-44 mt-4 lg:mt-10"></div>

              <div className="flex space-x-4 lg:space-x-10 mt-4 lg:mt-10">
                <div className="bg-gray-300 rounded-xl h-44 w-full"></div>
                <div className="bg-gray-300 rounded-xl h-44 w-full"></div>
              </div>
            </div>
            <div className="w-full flex-shrink-0 lg:flex-shrink lg:w-1/4 bg-gray-300 rounded-xl "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
