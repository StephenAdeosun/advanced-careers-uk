import { NavLink } from "react-router-dom";
import Logo from "../assets/logo.svg";
import SearchIcon from "../assets/search.svg";
import Message from "../assets/msg_vector.svg";
import Notification from "../assets/not_vector.svg";
import Profile from "../assets/profile.svg";
import Chevron from "../assets/chevron-down.svg";

function Nav() {
  return (
    <div className=" hidden md:flex items-center px-[28px] py-[24px] justify-between">
      <div className="c">
        <img src={Logo} alt="" />
      </div>

      <div className="bg-[#F6F6F6]  max-w-[400px] w-full py-[10px] px-[16px] gap-[12px] flex items-center rounded-[8px]">
        <img src={SearchIcon} alt="" />
        <input
          type="text"
          placeholder="Search Courses, topics and videos..."
          className="bg-transparent outline-none w-full placeholder:text-[#828282] placeholder:font-[300] placeholder:text-[14px]"
        />
      </div>

      <div>
        <ul className="flex items-center text-[#6D7175] gap-[32px] font-[300] text-[16px]">
          <li>
            <NavLink to="/">Dashboard</NavLink>
          </li>
          <li>
            <NavLink to="/">Course Videos</NavLink>
          </li>
          <li>
            <NavLink to="/">Materials</NavLink>
          </li>
        </ul>
      </div>

      <div className="flex gap-[32px] items-center">
        <div className="flex items-center gap-[12px]">
          <div className="w-[36px]">
            <img src={Message} alt="" />
          </div>

          <div className="w-[36px]">
            <img src={Notification} alt="" />
          </div>
        </div>

        <div className="flex gap-[8px] items-center">
          <img src={Profile} alt="" />
          <h1 className='font-[500] text-[14px] text-[#000000]'>Ibrahim</h1>
          <img src={Chevron} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Nav;
