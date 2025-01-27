import { ModeToggle } from "@/shadcn-component/mode-toggle";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="w-full border-b">
      <div className="container mx-auto px-3 p-2 flex justify-between items-center gap-3">
        <Link to={`/`}>
          <img
            src="./logo.png"
            alt="note pade logo"
            className="w-[50px] h-[50px] rounded-full"
          />
        </Link>
        <div className=""></div>
        <div className="">
          <ModeToggle />
        </div>
      </div>
    </div>
  );
}
