import PropTypes from "prop-types";

import { PiStarFill } from "react-icons/pi";

const Card = (props) => {
  return (
    <>
      <li className="flex flex-col justify-start items-eeeeee bg-[#f9f9f9] hover:bg-[#eeeeee] rounded-[10px] px-5 py-5 w-[23%] my-5 h-[140px] shadow">
        <p className="text-[#222222] text-[1.4rem] font-[600]">
          {props.category}
        </p>
        <div className="flex justify-between items-center my-2 text-[#555555] text-[16.5px] w-[70%]">
          <p className="flex justify-center items-center">
            <PiStarFill className="mr-1" color={"#14A800"} size={18} />
            {props.rating}/5
          </p>
          <p>{props.skills} skills</p>
        </div>
      </li>
    </>
  );
};

export default Card;

Card.propTypes = {
  category: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  skills: PropTypes.number.isRequired,
};
