import Ellipse from "../assets/Ellipse 22.svg";
function SideBar() {
  return (
    <div className="max-w-[348px] min-h-[1714px] border ml-[48px] p-[24px] mr-[62px]">
      <div className="c">
        <h1 className="text-[24px] text-[#000] font-[700]">
          Business Analysis Course 1
        </h1>

        <div className="flex mt-[24px] gap-[12px]">
          <img src={Ellipse} alt="" />
          <h1 className=" text-[14px] text-[#000] font-[500]">
            Advance Careers UK
          </h1>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
