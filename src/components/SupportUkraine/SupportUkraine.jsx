import SupportUkraineImg from "./../../assets/ukraine-help.svg";

const SupportUkraine = () => {
  return (
    <>
      <section className="flex justify-center items-center w-[100%] py-6 my-5 mt-10">
        <div className="flex justify-between items-start w-[83%] bg-[#f0f0f0] py-5 px-10 rounded-[10px] h-full shadow-[0_0_15px_rgba(0,0,0,0.1)]">
          <div className="flex flex-col justify-center items-start">
            <p className="font-[600] text-[2rem]">We support Ukraine </p>
            <p className="text-[#666666] font-[600] text-[18px] mb-5">
              We are taking action to help our freelancers, our clients, and the
              people of Ukraine—and so can you.{" "}
            </p>
            <button className="border-2 border-[#14A800] font-[600] text-[#14A800] rounded-[30px] px-7 py-2 mt-3 mb-2">
              Learn more
            </button>
          </div>
          <div className="flex justify-center items-center px-5">
            <img
              src={SupportUkraineImg}
              alt="SupportUkraineImg"
              className="w-[176px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default SupportUkraine;
