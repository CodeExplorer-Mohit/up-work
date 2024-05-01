// Navbar.js
import { IoIosArrowDown } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import "./Navbar.css";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { GoArrowRight } from "react-icons/go";

const Navbar = () => {
  return (
    <nav className="w-[100%] flex justify-center items-center fixed top-0 bg-[#ffffff] z-[10000]">
      <div className="flex justify-center items-center flex-col py-3 w-full">
        <div className="flex justify-between items-center w-full px-6">
          <div className="flex justify-center items-center">
            <span className="text-[#14A800] font-bold text-[19px] mr-1">
              UPWORK
            </span>
            <ul className="flex justify-center items-center ml-4">
              <li className="flex justify-center items-center font-[600] text-[13.8px] px-3 py-2 group cursor-pointer duration-all hover:text-[#14A800] text-[#222222] nav-hover-find-talent">
                Find Talent
                <IoIosArrowDown
                  size={10}
                  className="mt-1 ml-1 group-hover:rotate-[180deg] group-hover:text-[#000] transition-all"
                />
              </li>
              {/* find talent */}
              <div className="flex justify-center items-start w-full py-5 bg-[#ffffff] absolute h-[545px] top-[50%] left-0 shadow-[0_5px_5px_rgba(0,0,0,0.1)] hidden nav-dropdown-find-talent">
                <div className="flex justify-start w-[25%]">
                  <ul className="flex flex-col justify-center items-start w-full">
                    <li className="flex justify-between items-center px-5 py-5 w-[90%] hover:bg-[#f1f1f1]">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[14px] font-[600] text-[#333333]">
                          Post a job and hire a pro
                        </p>
                        <p className="text-[#14A800] text-[13px] font-[600] mt-1">
                          Talent Marketplace
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <MdOutlineKeyboardArrowRight
                          color="#14A800"
                          size={18}
                        />
                      </div>
                    </li>
                    <li className="flex justify-between items-center px-5 py-5 w-[90%] hover:bg-[#f5f5f5]">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[14px] font-[600] text-[#333333]">
                          Browse and buy projects
                        </p>
                        <p className="text-[#14A800] text-[13px] font-[600] mt-1">
                          Project Catalog
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <MdOutlineKeyboardArrowRight
                          color="#14A800"
                          size={18}
                        />
                      </div>
                    </li>
                    <li className="flex justify-between items-center px-5 py-5 w-[90%] hover:bg-[#f5f5f5]">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[14px] font-[600] text-[#333333]">
                          Get advise from industrial expert
                        </p>
                        <p className="text-[#14A800] text-[13px] font-[600] mt-1">
                          Consultations
                        </p>
                      </div>
                      <div className="flex justify-center items-center">
                        <MdOutlineKeyboardArrowRight
                          color="#14A800"
                          size={18}
                        />
                      </div>
                    </li>
                  </ul>
                </div>
                <span className="w-[1px] bg-[#dddddd] h-[100%]"></span>
                <div className="flex justify-between items-start w-[70%] bg-[] px-20">
                  <div className="flex flex-col justify-center items-start bg-[] w-[90%]">
                    <span className="bg-[#14A800] h-[3.5px] w-[50px] mt-[-10px]"></span>
                    <p className="text-[#333333] text-[16px] font-[600] mt-5">
                      Talent Marketplace
                    </p>
                    <p className="text-[#333333] text-[13px] mt-4 font-[600]">
                      Learn about working with telnet or explore your specific
                      hiring needs.
                    </p>

                    <a
                      href="#"
                      className="text-[#14A800] font-[600] mt-4 underline text-[13px] flex justify-center items-end hover:no-underline"
                    >
                      Hire on a Talent Marketplace
                      <GoArrowRight
                        color="#14A800"
                        size={20}
                        className="ml-2 mb-[-2px]"
                      />
                    </a>
                  </div>
                  <div className="flex justify-start items-center w-full bg-[]">
                    <ul className="flex flex-col justify-center items-start w-full">
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Development & IT
                        </a>
                      </li>

                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Design & Creative
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Sales & Marketing
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Writing & Translation
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Admin & Customer Support
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Finance & Accounting
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          HR & Training
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Legal
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Engineering & Architecture
                        </a>
                      </li>
                      <li className="flex justify-start items-center hover:bg-[#aaaaaa] w-[100%] py-2 px-5 rounded-md">
                        <a href="#" className="text-[13px] text-[#333333]">
                          Hire freelancers
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              {/*  */}

              <li className="flex justify-center items-center font-[600] text-[13.8px] px-3 py-2 group cursor-pointer duration-all hover:text-[#14A800] text-[#222222] nav-hover-find-work">
                Find Work
                <IoIosArrowDown
                  size={10}
                  className="mt-1 ml-1 group-hover:rotate-[180deg] group-hover:text-[#000] transition-all"
                />
              </li>
              {/* find work */}
              <div className="flex justify-center items-start w-full py-5 bg-[#ffffff] absolute top-[50%] left-0 shadow-[0_5px_5px_rgba(0,0,0,0.1)] hidden nav-dropdown-find-work">
                <ul className="flex justify-between items-center w-full px-10">
                  <li className="flex flex-col justify-center items-start w-[300px] hover:bg-[#aaaaaa] rounded-[10px] px-5 py-8 cursor-pointer">
                    <p className="text-[14px] text-[#333333] font-[600] my-2">
                      Ways to earn
                    </p>
                    <p className="text-[14px] text-[#555555]">
                      Learn why Upwork has the right opportunity for you
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-start w-[300px] hover:bg-[#aaaaaa] rounded-[10px] px-5 py-8 cursor-pointer">
                    <p className="text-[14px] text-[#333333] font-[600] my-2">
                      Ways to earn
                    </p>
                    <p className="text-[14px] text-[#555555]">
                      Explore the kind of work available in your field.{" "}
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-start w-[300px] hover:bg-[#aaaaaa] rounded-[10px] px-5 py-8 cursor-pointer">
                    <p className="text-[14px] text-[#333333] font-[600] my-2">
                      Ways to earn
                    </p>
                    <p className="text-[14px] text-[#555555]">
                      Get noticed by the right client.{" "}
                    </p>
                  </li>
                  <li className="flex flex-col justify-center items-start w-[300px] hover:bg-[#aaaaaa] rounded-[10px] px-5 py-8 cursor-pointer">
                    <p className="text-[14px] text-[#333333] font-[600] my-2">
                      Ways to earn
                    </p>
                    <p className="text-[14px] text-[#555555]">
                      Access more Connects, get strategic insights on
                      competitors, and try out the latest tools.{" "}
                    </p>
                  </li>
                </ul>
              </div>
              {/*  */}

              <li className="flex justify-center items-center font-[600] text-[13.8px] px-3 py-2 group cursor-pointer duration-all hover:text-[#14A800] text-[#222222] nav-hover-why-upwork">
                Why Upwork
                <IoIosArrowDown
                  size={10}
                  className="mt-1 ml-1 group-hover:rotate-[180deg] group-hover:text-[#000] transition-all"
                />
              </li>
              {/* find work */}
              <div className="flex justify-center items-start w-full py-5 bg-[#ffffff] absolute h-[450px] top-[50%] left-0 shadow-[0_5px_5px_rgba(0,0,0,0.1)] hidden nav-dropdown-why-upwork px-8">
                <div className="flex justify-start w-[40%] h-full">
                  <ul className="flex flex-wrap justify-between items-start w-full h-[50%]">
                    <li className="flex justify-between items-center px-5 py-8 w-[40%] rounded-[10px] hover:bg-[#dddddd] mx-5">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[13.2px] font-[600] text-[#333333]">
                          Success Stories
                        </p>
                        <p className="text-[#444444] text-[13.2px] mt-1">
                          Discover how teams work strategically and grow
                          together.{" "}
                        </p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center px-5 py-8 w-[40%] rounded-[10px] hover:bg-[#dddddd] mx-5">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[13.2px] font-[600] text-[#333333]">
                          Reviews
                        </p>
                        <p className="text-[#444444] text-[13.2px] mt-1">
                          See what it’s like to collaborate on Upwork
                        </p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center px-5 py-8 w-[40%] rounded-[10px] hover:bg-[#dddddd] mx-5">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[13.2px] font-[600] text-[#333333]">
                          How to find work
                        </p>
                        <p className="text-[#444444] text-[13.2px] mt-1">
                          Learn about how to grow your independent career.
                        </p>
                      </div>
                    </li>
                    <li className="flex justify-between items-center px-5 py-8 w-[40%] rounded-[10px] hover:bg-[#dddddd] mx-5">
                      <div className="flex flex-col justify-center items-start w-full">
                        <p className="text-[13.2px] font-[600] text-[#333333]">
                          How to hire
                        </p>
                        <p className="text-[#444444] text-[13.2px] mt-1">
                          Learn about the different ways to get work done.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="flex justify-between items-start w-[60%] px-20">
                  <div className="flex flex-col justify-center items-start w-[90%]">
                    <p className="text-[#333333] text-[14px] font-[600] mt-5">
                      Where work gets done
                    </p>
                    <ul className="flex flex-col justify-center items-center mt-5">
                      <li className="flex flex-col justify-center items-start border-[1.1px] border-[#cccccc] rounded-[10px] py-2 w-[350px] px-5 my-2 hover:bg-[#dddddd]">
                        <p className="text-[#444444] text-[12px] mb-1">
                          Guides
                        </p>
                        <p className="text-[#444444] text-[13px] mt-1">
                          Getting Started as a Freelancer{" "}
                        </p>
                      </li>
                      <li className="flex flex-col justify-center items-start border-[1.1px] border-[#cccccc] rounded-[10px] py-2 w-[350px] px-5 my-2 hover:bg-[#dddddd]">
                        <p className="text-[#444444] text-[12px] mb-1">
                          Guides
                        </p>
                        <p className="text-[#444444] text-[13px] mt-1">
                          Getting Started as a Freelancer{" "}
                        </p>
                      </li>
                      <li className="flex flex-col justify-center items-start border-[1.1px] border-[#cccccc] rounded-[10px] py-2 w-[350px] px-5 my-2 hover:bg-[#dddddd]">
                        <p className="text-[#444444] text-[12px] mb-1">
                          Guides
                        </p>
                        <p className="text-[#444444] text-[13px] mt-1">
                          Getting Started as a Freelancer{" "}
                        </p>
                      </li>
                    </ul>
                    <a
                      href="#"
                      className="text-[#14A800] font-[600] mt-5 underline text-[14px] flex justify-center items-end hover:no-underline"
                    >
                      See resources
                      <GoArrowRight
                        color="#14A800"
                        size={20}
                        className="ml-2 mb-[-2px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
              {/*  */}
              <li className="flex justify-center items-center font-[600] text-[13.8px] px-3 py-2 cursor-pointer hover:text-[#14A800] text-[#222222]">
                Enterprise
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center">
            <div className="flex justify-center items-center border-2 border-[#eeeeee] mr-3 rounded-[30px] h-[38px] hover:bg-[#eeeeee] nav-dropdown-searchś">
              <div className="flex justify-center items-center rounded-[30px] hover:bg-[#ffffff] px-4 group h-full">
                <label htmlFor="nav-search">
                  <CiSearch className="text-[#333333]" />
                </label>
                <input
                  type="search"
                  id="nav-search"
                  className="rounded-[30px] px-2 h-full focus:outline-none text-[13.3px] font-[600] text-[#555555] cursor-pointer bg-transparent w-[220px]"
                  placeholder="Search"
                />
              </div>
              <span className="w-[1px] h-[60%] bg-[#eeeeee] group-hover:bg-transparent"></span>
              <div className="flex justify-center items-center rounded-[30px] py-2 px-5 cursor-pointer hover:bg-[#ffffff] font-[600] text-[14px] text-[#444444]">
                Talent
                <IoIosArrowDown size={12} className="mt-1 ml-1" />
              </div>
            </div>
            <div className="flex justify-center items-center ml-3">
              <button className="mr-3 text-[#555555] text-[14px] font-bold">
                Log in
              </button>
              <button className="bg-[#108a00] hover:bg-[#14A800] transition-all rounded-[20px] px-6 py-2 ml-3 text-[#ffffff] text-[14px] font-bold">
                Sign up
              </button>
            </div>
          </div>
        </div>
        <span className="w-full h-[1px] bg-[#dddddd] my-3"></span>
        <div className="flex justify-start items-center w-full px-6 py-1">
          {/* default Nav */}
          <ul className="flex justify-center items-center">
            <li className="flex justify-center items-center text-[13.2px] font-[600] pr-2 hover:underline cursor-pointer text-[#333333] mr-1 py-2 hover:text-[#108a00]">
              Development & IT
            </li>
            <li className="flex justify-center items-center text-[13.2px] font-[600] px-2 hover:underline cursor-pointer text-[#333333] mx-1 py-2 hover:text-[#108a00]">
              AI Services
            </li>
            <li className="flex justify-center items-center text-[13.2px] font-[600] px-2 hover:underline cursor-pointer text-[#333333] mx-1 py-2 hover:text-[#108a00]">
              Design & Creative
            </li>
            <li className="flex justify-center items-center text-[13.2px] font-[600] px-2 hover:underline cursor-pointer text-[#333333] mx-1 py-2 hover:text-[#108a00]">
              Sales & Marketing
            </li>
            <li className="flex justify-center items-center text-[13.2px] font-[600] px-2 hover:underline cursor-pointer text-[#333333] mx-1 py-2 hover:text-[#108a00]">
              Admin & Customer Support
            </li>
            <li className="flex justify-center items-center text-[13.2px] font-[600] px-2 cursor-pointer text-[#333333] mx-1 py-2">
              More
              <IoIosArrowDown size={10} className="mt-1 ml-1" />
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
