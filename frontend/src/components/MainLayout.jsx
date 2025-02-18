import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen min-w-[500px]">
      <Header />
      <div className="mb-40">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
