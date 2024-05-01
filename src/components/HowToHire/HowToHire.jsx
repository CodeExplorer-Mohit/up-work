import { TiPinOutline } from "react-icons/ti";
import { PiNotePencilBold } from "react-icons/pi";
import { PiShieldStarBold } from "react-icons/pi";
import HowToHireImage from "./../../assets/Upwork The World’s Work Marketplace.png";

const HowToHire = () => {
  return (
    <>
      <section className="flex justify-center items-center w-[100%] py-6 my-5">
        <div className="flex justify-center items-start w-[85%]">
          <div className="flex justify-center items-center w-[40%] px-5">
            <img src={HowToHireImage} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start w-[60%] px-5">
            <p className="text-[#222222] text-[2.2rem] font-[600] my-2">
              Up your work game, it’s easy
            </p>
            <ul className="flex flex-col justify-center items-start">
              <li className="flex justify-center items-center my-3">
                <div className="flex justify-center items-center mr-2">
                  <PiNotePencilBold className="" size={26} />
                </div>
                <div className="flex flex-col justify-center items-start ml-3">
                  <p className="font-[600] text-[18px] text-[#111111]">
                    No cost to join
                  </p>
                  <p className="text-[14px]">
                    Register and browse professionals, explore projects, or even
                    book a consultation.
                  </p>
                </div>
              </li>
              <li className="flex justify-center items-center my-3">
                <div className="flex justify-center items-center mr-2">
                  <TiPinOutline className="" size={30} />
                </div>
                <div className="flex flex-col justify-center items-start ml-3">
                  <p className="font-[600] text-[18px] text-[#111111]">
                    Post a job and hire top talent
                  </p>
                  <p className="text-[14px]">
                    Finding talent doesn’t have to be a chore. Post a job or we
                    can search for you!
                  </p>
                </div>
              </li>
              <li className="flex justify-center items-center my-3">
                <div className="flex justify-center items-center mr-2">
                  <PiShieldStarBold className="" size={26} />
                </div>
                <div className="flex flex-col justify-center items-start ml-3">
                  <p className="font-[600] text-[18px] text-[#111111]">
                    Work with the best—without breaking the bank
                  </p>
                  <p className="text-[14px]">
                    Upwork makes it affordable to up your work and take
                    advantage of low transaction rates.
                  </p>
                </div>
              </li>
            </ul>
            <div className="flex justify-start items-center my-3">
              <button className="px-7 py-2 rounded-[30px] bg-[#108a00] hover:bg-[#14A800] transition-all text-[#ffffff] font-[600] mr-3">
                Sign up for free
              </button>
              <button className="px-6 py-2 rounded-[30px] border-2 border-[#108a00] text-[#108a00] font-[600] ml-3">
                Learn how to hire
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowToHire;
