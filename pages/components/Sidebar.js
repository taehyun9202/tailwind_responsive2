import Link from "next/link";
import HomeIcon from "@material-ui/icons/Home";
import PieChartIcon from "@material-ui/icons/PieChart";
import CommentIcon from "@material-ui/icons/Comment";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import WebIcon from "@material-ui/icons/Web";

function Sidebar() {
  return (
    <div className="flex h-full">
      <div className="fixed bottom-0 w-full lg:static lg:w-24 lg:h-full z-10">
        <div className="w-full flex flex-col lg:w-24 h-full bg-blue-800 justify-center items-center">
          <Link href="/">
            <div className="flex justify-center items-center block w-14 h-14 bg-blue-600 rounded-xl mt-10 hidden cursor-pointer text-white transform duration-300 hover:scale-110 lg:block">
              <WebIcon fontSize="large" />
            </div>
          </Link>
          <div className="flex lg:flex-col items-center justify-center space-x-4 lg:space-x-0 lg:space-y-4 h-full py-4">
            <Link href="/">
              <button className="flex justify-center items-center block w-14 h-14 rounded-xl outline-none hover:outline-none cursor-pointer text-white opacity-50 hover:bg-white hover:opacity-100 focus:text-red-500 focus:opacity-100 hover:text-red-500 transform lg:hover:translate-x-8 lg:focus:translate-x-8 duration-1000 easy-in-out hover:shadow-xl focus:bg-white focus:outline-none">
                <HomeIcon fontSize="large" />
              </button>
            </Link>
            <Link href="/chart">
              <button className="flex justify-center items-center block w-14 h-14 rounded-xl outline-none hover:outline-none cursor-pointer text-white opacity-50 hover:bg-white hover:opacity-100 focus:text-red-500 focus:opacity-100 hover:text-red-500 transform lg:hover:translate-x-8 lg:focus:translate-x-8 duration-1000 easy-in-out hover:shadow-xl focus:bg-white focus:outline-none">
                <PieChartIcon fontSize="large" />
              </button>
            </Link>
            <Link href="/comment">
              <button className="flex justify-center items-center block w-14 h-14 rounded-xl outline-none hover:outline-none cursor-pointer text-white opacity-50 hover:bg-white hover:opacity-100 focus:text-red-500 focus:opacity-100 hover:text-red-500 transform lg:hover:translate-x-8 lg:focus:translate-x-8 duration-1000 easy-in-out hover:shadow-xl focus:bg-white focus:outline-none">
                <CommentIcon fontSize="large" />
              </button>
            </Link>
            <Link href="/payment">
              <button className="flex justify-center items-center block w-14 h-14 rounded-xl outline-none hover:outline-none cursor-pointer text-white opacity-50 hover:bg-white hover:opacity-100 focus:text-red-500 focus:opacity-100 hover:text-red-500 transform lg:hover:translate-x-8 lg:focus:translate-x-8 duration-1000 easy-in-out hover:shadow-xl focus:bg-white focus:outline-none">
                <CreditCardIcon fontSize="large" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
