import SearchIcon from "../assets/search.svg";
function SearchBar() {
  return (
    <div className="bg-[#F6F6F6] md:hidden max-w-[342px] mt-[24.5px] m-auto py-[10px] px-[16px] gap-[12px] flex items-center rounded-[8px]">
      <img src={SearchIcon} alt="" />
      <input type="text" placeholder="Search Courses, topics and videos..." className='bg-transparent outline-none w-full placeholder:text-[#828282] placeholder:font-[300] placeholder:text-[14px]'/>
    </div>
  );
}

export default SearchBar;
