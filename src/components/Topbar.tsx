import DirectionDown from "../assets/direction down.svg";
import { Link } from "react-router-dom";
function Topbar() {
  return (
    <div className="w-full border border-[#D9D9D9] mt-[12px] py-[12px] pl-[12px] md:pl-[48px]">
      <div className="flex gap-[6px] items-center">
        <h1 className="text-[#161616] font-[400] text-[12px] md:text-[16px]">
          <Link to="/">Student</Link>
        </h1>
        <img src={DirectionDown} alt="" className="w-[16px] h-[16px]" />
        <h1 className="text-[#161616] font-[400] text-[12px] md:text-[16px]">
          <Link to="/">Course List</Link>
        </h1>
        <img src={DirectionDown} alt="" className="w-[16px] h-[16px]" />
        <h1 className="text-[#161616] font-[600] text-[12px] md:text-[16px]">
          <Link to="/">Business Analysis 1</Link>
        </h1>
      </div>
    </div>
  );
}

export default Topbar;
