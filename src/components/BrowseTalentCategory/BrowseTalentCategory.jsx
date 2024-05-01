import Card from "./Card";

const BrowseTalentCategory = () => {
  return (
    <>
      <section className="flex justify-center items-center w-[100%] py-6 my-5">
        <div className="flex flex-col justify-center items-start w-[85%]">
          <div className="flex flex-col justify-center items-start w-full mb-5">
            <p className="text-[#111111] font-[600] text-[2.5rem] my-2">
              Browse talent by category
            </p>
            <div className="flex justify-center items-center my-1 text-[17px]">
              <p className="text-[#555555] font-[600] mr-1">
                Looking for work?
              </p>
              <a
                href=""
                className="text-[#108a00] hover: text-[#14A800] underline font-[600] ml-1"
              >
                Browse jobs
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center w-full mt-5">
            <ul className="flex flex-wrap justify-between items-center w-full">
              <Card category="Development & IT" rating={4.48} skills={1853} />
              <Card category="AI Services" rating={4.48} skills={1853} />
              <Card category="Design & Creative" rating={4.48} skills={1853} />
              <Card category="Sales & Marketing" rating={4.48} skills={1853} />
              <Card
                category="Writing & Translation"
                rating={4.48}
                skills={1853}
              />
              <Card
                category="Admin & Customer Support"
                rating={4.48}
                skills={1853}
              />
              <Card
                category="Finance & Accounting"
                rating={4.48}
                skills={1853}
              />
              <Card
                category="Engineering & Architecture"
                rating={4.48}
                skills={1853}
              />
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrowseTalentCategory;
