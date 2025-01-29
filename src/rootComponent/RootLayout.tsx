import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import Footer from "./Footer";

export default function RootLayout() {
  return (
    <div className="w-full">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
}
