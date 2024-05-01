import PropTypes from "prop-types";

const LinkCard = (props) => {
  return (
    <>
      <li className="flex justify-center items-center my-[5px] mx-2 hover:underline">
        <a href="#" className="text-[#ffffff] text-[14px]">
          {props.linkName}
        </a>
      </li>
    </>
  );
};

export default LinkCard;

LinkCard.propTypes = {
  linkName: PropTypes.string.isRequired,
};
