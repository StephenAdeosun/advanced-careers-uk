import React from "react";
import { Link } from "react-router-dom";
import ExternalLink from "../assets/external-small_minor.svg";
import Rec1 from "../assets/Rec 1.svg";
import Rec2 from "../assets/Rec 2.svg";
import Rec3 from "../assets/Rec 3.svg";

function WorkObjective() {
  return (
    <div>
      <div className="max-w-[348px] p-[24px] flex flex-col gap-[24px] m-auto  min-h-[1116px]">
        <div className="c">
          <h1 className="text-[#000] text-[16px] font-[700]">
            Week 1 Objective
          </h1>
          <ul className="text-[#6D7175] font-[400] text-[14px] mt-[16px] leading-[28px]">
            <li>1. GAP Analysis</li>
            <li>2. Business Case </li>
            <li>3. Stakeholder Register</li>
          </ul>
        </div>

        <div className="c">
          <h1 className="text-[#000] text-[16px] font-[700]">Knowledge Area</h1>
          <ul className="text-[#6D7175] font-[400] text-[14px] leading-[28px] mt-[16px]">
            <li>1. What is Business Analysis?</li>
            <li>2. Who is a Business Analyst? </li>
            <li>3. Roles and responsibilites of Business Analyst</li>
            <li>
              4. Overview of Software Development Life Cycle (SDLC) and
              methodologies
            </li>
            <li>5. Business Analysis Process Model</li>
          </ul>
        </div>

        <div className="c">
          <h1 className="text-[#000] text-[16px] font-[700]">
            Skills and deliverables
          </h1>
          <ul className="text-[#6D7175] font-[400] text-[14px] leading-[28px] mt-[16px]">
            <li>
              1. Know how to collaborate with colleagues to analyse business
              problems
            </li>
            <li>2. Create GAP Analysis </li>
            <li>3. Create Business Case</li>
            <li>
              4. Determine the AS-IS (current problems) and TO-BE (possible IT
              solution)
            </li>
            <li>5. Indentify stakeholder and create Stakeholder Register </li>
            <li>
              6. Learn how to conduct and actively participate in workshop
            </li>
          </ul>
        </div>

        <div className="c">
          <h1 className="text-[#000] text-[16px] font-[700]">
            Step by step Guide
          </h1>
          <ul className="text-[#6D7175] font-[400] text-[14px] leading-[28px] mt-[16px]">
            <li>1. Buy the course</li>
            <li>2. Watch the videos </li>
            <li>3. Finish the course</li>
            <li>4. Get a job</li>
          </ul>
        </div>

        <div className="c">
          <h1 className="text-[#000] text-[16px] font-[700]">
            Recommended Qualifications
          </h1>
          <Link to="/">
            {" "}
            <div className="flex mt-[16px]">
              <h1 className='underline text-[#393FD9] text-[14px] font-[400]'>How to go about this assignment/task</h1>
              <img src={ExternalLink} alt="" />
            </div>
          </Link>
          <Link to="/">
            {" "}
            <div className="flex mt-[8px]">
              <h1 className='underline text-[#393FD9] text-[14px] font-[400]'>More info about this tutor</h1>
              <img src={ExternalLink} alt="" />
            </div>
          </Link>
        </div>
      </div>


      <div className="max-w-[348px] flex flex-col gap-[24px] m-auto  min-h-[1030px]">
     
          <h1 className="text-[#000] text-[16px] font-[700]">
            Recommended Books
          </h1>
        
        <div>
            <img src={Rec1} alt="" />
        </div>
        <div>
            <img src={Rec2} alt="" />
        </div>
        <div>
            <img src={Rec3} alt="" />
        </div>
            
        </div>




    </div>
  );
}

export default WorkObjective;
