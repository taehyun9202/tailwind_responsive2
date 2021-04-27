import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import FaceIcon from "@material-ui/icons/Face";
import Search from "./Search";
import WebIcon from "@material-ui/icons/Web";
import { useState } from "react";
import Link from "next/link";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex lg:space-x-10 flex-col-reverse lg:flex-row py-2">
      <div className="w-full lg:w-1/2 mt-2 lg:mt-0">
        <Search />
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between">
          <div className="lg:hidden">
            <Link href="/">
              <div className="flex justify-center items-center block w-10 h-10 cursor-pointer text-gray-300 hover:text-gray-700 transform duration-300 hover:scale-110 lg:block">
                <WebIcon fontSize="large" />
              </div>
            </Link>
          </div>
          <div className="h-10 hidden lg:flex  items-center space-x-4 font-semibold">
            <a href="#" className="hover:text-blue-800">
              Facebook
            </a>
            <a href="#" className="hover:text-blue-800">
              Contacts
            </a>
            <a href="#" className="hover:text-blue-800">
              Help
            </a>
          </div>
          <div className="flex">
            <a
              href="#"
              className="flex justify-center items-center w-10 h-10 text-gray-300 hover:text-gray-700 relative"
            >
              <NotificationsActiveIcon />
            </a>
            <div className="lg:relative">
              <button
                className="flex justify-center items-center w-10 h-10 text-gray-300 hover:text-gray-700 relative rounded-full focus:ring-2 focus:ring-blue-400 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <FaceIcon fontSize="large" />
              </button>
              {isOpen && (
                <div className="absolute right-0 top-14 w-screen lg:top-12 bg-white lg:w-48 rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5 z-20">
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                  >
                    Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                  >
                    Profile
                  </a>
                  <div className="lg:hidden border-t-2 border-gray-200">
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                    >
                      Feedback
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                    >
                      Contacts
                    </a>
                    <a
                      href="#"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 text-center lg:text-right"
                    >
                      Help
                    </a>
                  </div>
                </div>
              )}
              {isOpen && (
                <div
                  onClick={() => setIsOpen(!isOpen)}
                  className="fixed inset-0 w-full h-screen z-10"
                ></div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
