import MicrosoftImg from "./../../assets/microsoft.svg";
import AirBnb from "./../../assets/airbnb.svg";
import Bissell from "./../../assets/bissell.svg";
import SearchingTalent from "./../../assets/searching-talent.webp";
const Hero = () => {
  return (
    <>
      <section className="flex justify-center items-center w-[100%] pt-20 pb-6 mt-20">
        <div className="flex justify-center items-start w-[90%]">
          <div className="flex justify-center items-center w-[50%] mx-2">
            <div className="flex flex-col justify-center items-start w-full px-10">
              <h1 className="text-[#14A800] text-[5rem] font-[600] leading-[80px]">
                How work should work
              </h1>
              <p className="text-[#666666] font-[550] text-[1.44rem] my-5 w-[90%]">
                Forget the old rules. You can have the best people. Right now.
                Right here.
              </p>
              <button className="my-4 px-6 py-2 hover:bg-[#14A800] bg-[#108a00] transition-all text-[#ffffff] font-[600] text-[17px] rounded-[40px]">
                Get Started
              </button>
              <div className="flex flex-col justify-center items-start mt-10 py-2">
                <p className="text-[#999999] font-[600] text-[17px]">
                  Trusted by
                </p>

                <div className="flex justify-start items-center py-3">
                  <img
                    src={MicrosoftImg}
                    alt="microsoft-img"
                    className="w-[100px] mr-4"
                  />
                  <img
                    src={AirBnb}
                    alt="airbnb-img"
                    className="w-[80px] mx-4"
                  />
                  <img
                    src={Bissell}
                    alt="bissell-img"
                    className="w-[60px] mx-4"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-[50%] mr-5">
            <div className="flex justify-center items-start py-5">
              <img
                src={SearchingTalent}
                alt="searching-talent"
                className="w-[65%]"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
