import EnterpriseSuitImage from "./../../assets/enterprise-2023.webp";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { LiaToolsSolid } from "react-icons/lia";

const EnterpriseSuit = () => {
  return (
    <>
      <section className="flex justify-center items-center w-[100%] py-6 my-5 h-[590px] mt-10">
        <div className="flex justify-center items-start w-[83%] bg-[#13544E] rounded-[10px] h-full">
          <div className="flex flex-col justify-start items-start w-[65%] px-10 py-5 h-full">
            <p className="font-[600] text-[#ffffff] text-[1.5rem] my-2">
              Enterprise Suite
            </p>
            <h2 className="text-[3rem] font-[700] my-3 leading-[3.5rem]">
              <p className="text-[#ffffff]">This is how</p>
              <p className="text-[#91E6B3]">good companies</p>
              <p className="text-[#91E6B3]">find good company.</p>
            </h2>
            <p className="text-[#ffffff] my-3 text-[18px] w-[90%]">
              Access the top 1% of talent on Upwork, and a full suite of hybrid
              workforce management tools. This is how innovation works now.
            </p>
            <ul className="flex flex-col justify-center items-start mb-2">
              <li className="flex justify-center items-center my-1">
                <LiaToolsSolid size={20} color="#91E6B3" />
                <p className="text-[#ffffff] text-[17px] ml-4">
                  Access expert talent to fill your skill gaps
                </p>
              </li>
              <li className="flex justify-center items-center my-1">
                <LiaSuitcaseSolid size={20} color="#91E6B3" />
                <p className="text-[#ffffff] text-[17px] ml-3">
                  Control your workflow: hire, classify and pay your talent
                </p>
              </li>
              <li className="flex justify-center items-center my-1">
                <TfiHeadphoneAlt size={16} color="#91E6B3" />
                <p className="text-[#ffffff] text-[17px] ml-4">
                  Partner with Upwork for end-to-end support
                </p>
              </li>
            </ul>
            <button className="px-8 py-2 text-[#13544E] font-[600] text-[17px] my-4 bg-[#ffffff] rounded-[30px]">
              Learn more
            </button>
          </div>
          <div className="flex justify-center items-center w-[35%] relative overflow h-full">
            <img
              src={EnterpriseSuitImage}
              alt="EnterpriseSuitImage"
              className="h-full object-cover absolute top-0 rounded-r-[10px]"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default EnterpriseSuit;
