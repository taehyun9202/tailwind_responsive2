import "../styles/globals.css";
import Sidebar from "./components/Sidebar";

function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen flex">
      <Sidebar />
      <Component {...pageProps} size="w-full h-screen px-4 pb-10 lg:p-10" />
    </div>
  );
}

export default MyApp;
