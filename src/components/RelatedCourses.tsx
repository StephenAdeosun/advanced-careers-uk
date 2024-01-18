import { Link } from "react-router-dom";
import Rene1 from "../assets/Rene 1.svg";
import Rene2 from "../assets/Rene 2.svg";
import Rene3 from "../assets/Rene 3.svg";
import Rene4 from "../assets/Rene 4.svg";
import Calendar from "../assets/calendar_minor.svg";
import Location from "../assets/locations_minor.svg";

function RelatedCourses() {
  const courses = [
    {
      img: Rene1,
      title: "Renewable Energy Management and Finance.",
      text: "This is a humanities course which focuses on renewable energy and sustainable",
      date: "May 2022- June 2023",
      location: "Summer Street, Houston",
    },
    {
      img: Rene2,
      title: "Renewable Energy Management and Finance.",
      text: "This is a humanities course which focuses on renewable energy and sustainable",
      date: "May 2022- June 2023",
      location: "Summer Street, Houston",
    },
    {
      img: Rene3,
      title: "Renewable Energy Management and Finance.",
      text: "This is a humanities course which focuses on renewable energy and sustainable",
      date: "May 2022- June 2023",
      location: "Summer Street, Houston",
    },
    {
      img: Rene4,
      title: "Renewable Energy Management and Finance.",
      text: "This is a humanities course which focuses on renewable energy and sustainable",
      date: "May 2022- June 2023",
      location: "Summer Street, Houston",
    },
  ];
  return (
    <div className="md:mx-[48px] mt-[49px] mx-[12px]">
      <div className="flex mx-[12px] items-center justify-between">
        <h1 className="text-[#000] font-[500] text-[18px] leading-[20px]">
          Related Courses
        </h1>
        <Link to="/">
          <h2 className="text-[#2C6ECB] font-[500] leading-[20px] text-[14px]">
            See All
          </h2>
        </Link>
      </div>

      {/*courses card */}
      <div className="mt-[24px] gap-[36px]  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
        {courses.map((course) => (
          <div
            className="max-w-[320px] border m-auto  rounded-[8px] border-[#BABEC3] min-h-[371px]"
            
          >
            <div className="w-full rounded-md h-[158px] ">
              <img
                src={course.img}
                alt=""
                className="w-full rounded-t-[8px] h-[158px] "
              />
            </div>

            <div className="p-[20px]">
              <h1 className="text-[#202223] font-[700] text-[16px]">
                {course.title}
              </h1>
              <p className="text-[#202223] font-[400] mt-[8px] text-[14px]">
                {course.text}
              </p>
              <div className="mt-[20px]">
                <div className="flex gap-[3px]">
                  <img src={Calendar} alt="" />
                  <h1 className="text-[#6D7175] text-[14px] font-[400]">
                    {course.date}
                  </h1>
                </div>
                <div className="flex mt-[12px]  gap-[3px]">
                  <img src={Location} alt="" />
                  <h1 className="text-[#6D7175] text-[14px] font-[400]">
                    {course.location}
                  </h1>
                </div>
              </div>{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RelatedCourses;








