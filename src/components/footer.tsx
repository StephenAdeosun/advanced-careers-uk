import Logo from "../assets/Footer Logo.svg";
import Socials from "../assets/socials.svg";
import {Link} from 'react-router-dom'

function footer() {
  return (
    <div className="w-full mt-[110px] py-[80px] px-[48px] md:py-[48px] md:px-[80px] bg-[#02194D] min-h-[464px]">
      <div className="min-h-[304px]  flex flex-col gap-[100px] md:gap-0 md:flex-row justify-between items-start border-slate-300">
        {/* first div */}
        <div className='flex flex-col gap-[36px]'>
          <div className="w-[186px]">
            <img src={Logo} alt="" />
          </div>
          <div className="w-[186px]">
            <img src={Socials} alt="" />
          </div>
        </div>

        {/* second div */}
        <div>
            <h2 className='text-[#FF9C00] text-[18px] font-[600]'>Contact Info</h2>
            <div className='text-[#DEDEDE] text-[16px] font-[500] flex flex-col gap-[16px] mt-[30px]'>
            <h3>132 Lewisham High Street,<br /> London. SE13 6EE</h3>
            <Link to='/'> <h3 className="">+442038596890 +447423096310</h3></Link>
           
            <Link to='/'><h3 className="">hello@advancecareersuk.com</h3></Link>
            
            </div>
            <div className='w-[227px] h-[49px] bg-[#FFF] flex items-center mt-[32px] py-[6px] gap-[24px] rounded-[49px]'>
                <input type="email" placeholder='Enter Email' className='border-0 placeholder:text-[#1E1E1E] w-[75px] outline-0 text-[14px] text-[#1E1E1E] font-[600] placeholder:text-[14px] placeholder:font-[600] ml-[24px] '/>
                <button className='w-[96px] h-[37px] bg-[#02194D] rounded-[37px] text-[#FFFFFF] font-[600px] text-[14px]'>Subscribe</button>
            </div>
        </div>

        {/* third div */}
        <div className="c">
            <h2 className='text-[#FF9C00] text-[18px] font-[600]'>Quick Links</h2>
            <div className='text-[#DEDEDE] text-[16px] font-[500] flex flex-col gap-[16px] mt-[24px]'>
            <Link to='/'><h3 className="">About Us</h3></Link>
            <Link to='/'><h3 className="">FAQs</h3></Link>
            <Link to='/'><h3 className="">T&Cs</h3></Link>
            <Link to='/'><h3 className="">Events</h3></Link>
            </div>
        </div>

        {/* fourth div */}
        <div className="c">
            <h2 className='text-[#FF9C00] text-[18px] font-[600]'>List of Courses</h2>
            <div className='text-[#DEDEDE] text-[16px] font-[500] flex flex-col gap-[16px] mt-[24px]'>
            <Link to='/'><h3 className="">Business Analysis</h3></Link>
            <Link to='/'><h3 className="">Digital Marketing</h3></Link>
            <Link to='/'><h3 className="">Project Management</h3></Link>
            <Link to='/'><h3 className="">Scrum Master</h3></Link>
            </div>
        </div>

      </div>
    </div>
  );
}

export default footer;
