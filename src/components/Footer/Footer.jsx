import LinkCard from "./LinkCard";
import { LiaFacebook } from "react-icons/lia";
import { LiaLinkedin } from "react-icons/lia";
import { FaXTwitter } from "react-icons/fa6";
import { PiYoutubeLogo } from "react-icons/pi";
import { TbBrandInstagram } from "react-icons/tb";
import { TbBrandAndroid } from "react-icons/tb";
import { LiaApple } from "react-icons/lia";

const Footer = () => {
  return (
    <>
      <footer className="flex justify-center items-center w-[100%] py-6 my-5">
        <div className="flex flex-col justify-center items-start w-[97%] bg-[#181818] px-10 py-20 rounded-[10px]">
          <div className="flex justify-start items-start w-full px-8 mb-5">
            <div className="flex flex-col justify-center items-start py-2 w-1/4">
              <p className="text-[#ffffff] mb-2 text-[14px]">For Clients</p>
              <ul className="flex flex-col justify-start items-start mt-2">
                <LinkCard linkName="How to Hire" />
                <LinkCard linkName="Talent Marketplace" />
                <LinkCard linkName="Project Catalog" />
                <LinkCard linkName="Hire an agency" />
                <LinkCard linkName="Enterprise" />
                <LinkCard linkName="Any Hire" />
                <LinkCard linkName="Contract-to-hire" />
                <LinkCard linkName="Direct Contracts" />
                <LinkCard linkName="Hire worldwide" />
                <LinkCard linkName="Hire in the USA" />
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start py-2 w-1/4">
              <p className="text-[#ffffff] mb-2 text-[14px]">For Clients</p>
              <ul className="flex flex-col justify-start items-start mt-2">
                <LinkCard linkName="How to Hire" />
                <LinkCard linkName="Talent Marketplace" />
                <LinkCard linkName="Project Catalog" />
                <LinkCard linkName="Hire an agency" />
                <LinkCard linkName="Exclusive resources with Freelancer Plus" />
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start py-2 w-1/4">
              <p className="text-[#ffffff] mb-2 text-[14px]">For Clients</p>
              <ul className="flex flex-col justify-start items-start mt-2">
                <LinkCard linkName="How to Hire" />
                <LinkCard linkName="Talent Marketplace" />
                <LinkCard linkName="Project Catalog" />
                <LinkCard linkName="Hire an agency" />
                <LinkCard linkName="Enterprise" />
                <LinkCard linkName="Any Hire" />
                <LinkCard linkName="Free Business Tools" />
              </ul>
            </div>
            <div className="flex flex-col justify-center items-start py-2 w-1/4">
              <p className="text-[#ffffff] mb-2 text-[14px]">For Clients</p>
              <ul className="flex flex-col justify-start items-start mt-2">
                <LinkCard linkName="How to Hire" />
                <LinkCard linkName="Talent Marketplace" />
                <LinkCard linkName="Project Catalog" />
                <LinkCard linkName="Hire an agency" />
                <LinkCard linkName="Enterprise" />
                <LinkCard linkName="Any Hire" />
                <LinkCard linkName="Contract-to-hire" />
                <LinkCard linkName="Direct Contracts" />
                <LinkCard linkName="Hire worldwide" />
                <LinkCard linkName="Modern slavery statement" />
              </ul>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center mt-5 w-full">
            <div className="flex justify-between items-center my-2 w-[95%]">
              <div className="flex justify-center items-center">
                <p className="font-[600] text-[#ffffff] text-[14px] mr-2">
                  Follow us
                </p>
                <ul className="flex justify-center items-center ml-2">
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <LiaFacebook color="#ffffff" size={25} />
                  </li>
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <LiaLinkedin color="#ffffff" size={25} />
                  </li>
                  <li className="flex justify-center items-center rounded-full p-[9px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <FaXTwitter color="#ffffff" size={20} />
                  </li>
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <PiYoutubeLogo color="#ffffff" size={25} />
                  </li>
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <TbBrandInstagram color="#ffffff" size={25} />
                  </li>
                </ul>
              </div>
              <div className="flex justify-center items-center">
                <p className="font-[600] text-[#ffffff] text-[14px] mr-2">
                  Mobile app
                </p>
                <ul className="flex justify-center items-center ml-2">
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <LiaApple color="#ffffff" size={25} />
                  </li>
                  <li className="flex justify-center items-center rounded-full p-[6px] border-[1px] border-[#ffffff] mx-1 hover:bg-[#ababab] transition">
                    <TbBrandAndroid color="#ffffff" size={25} />
                  </li>
                </ul>
              </div>
            </div>
            <span className="w-[95%] h-[1px] bg-[#aaaaaa] my-2"></span>
            <ul className="flex justify-start items-center my-2 w-[95%]">
              <li className="flex justify-center items-center mr-10">
                <p className="text-[#ffffff] text-[13px] font-[600]">
                  © 2015 - 2024 Upwork® Global Inc.{" "}
                </p>
              </li>
              <LinkCard linkName="Terms of Service" />
              <LinkCard linkName="Privacy Policy" />
              <LinkCard linkName="CA Notice at Collection" />
              <LinkCard linkName="Cookie Settings" />
              <LinkCard linkName="Accessibility" />
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
