import React from "react";
import { BsSearch } from "react-icons/bs";
import { FiChevronRight } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { setReduxSelectedCard } from "../../redux/selectedCardSlice";

function BusinessSubCard({
  item,
  expanded,
  setExpanded,
  setSelectedIndex,
  setSelectedItem,
}) {
  const dispatch = useDispatch();
  const { selectedCardStore } = useSelector((state) => state.selectedCard);

  const clickHandler = () => {
    setExpanded(!expanded);
    setSelectedIndex(item.index);
    setSelectedItem(item.title);
    dispatch(setReduxSelectedCard(item.title));
  };

  return (
    <div
      className="group service-image-container group shadow-sm h-40 sm:h-48 md:h-56 lg:w-60 xl:w-68 hover:shadow-lg cursor-pointer"
      onClick={clickHandler}
    >
      <img
        src={`${item.image}`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0 rounded-sm"
      />
      <div className="absolute top-0 left-0 bg-black w-full h-full z-10 opacity-0 group-hover:opacity-20 transition-all duration-100" />

      <div className="absolute z-20 h-8 w-full bg-gray-100 bottom-0">
        <div className="flex items-center h-full cursor-pointer">
          <p className="flex-1 text-xs lg:text-sm font-semibold pl-5 uppercase text-gray-600">
            {item.title}
          </p>
          <div
            className={`w-8 h-full flex justify-center items-center transition-all duration-100 ${
              item.title === selectedCardStore && expanded
                ? "bg-web-yellow text-white"
                : "bg-gray-300 text-gray-600 group-hover:bg-web-yellow group-hover:text-white"
            }`}
          >
            <FiChevronRight
              fontSize={22}
              className={`${
                item.title === selectedCardStore && expanded && "rotate-90"
              } transition-all ease-in duration-100`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusinessSubCard;
