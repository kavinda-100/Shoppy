

const LoadMoreAndLoadLessButton = ({productAmount, increaseFunc, decreaseFunc}) => {
  return (
    <div className="flex flex-row gap-9 justify-center items-center">
      <button
        onClick={increaseFunc}
        className={`px-4 py-2 font-montserrat font-semibold text-white bg-slate-500 rounded-md shadow-md hover:bg-slate-600 ${productAmount < 8 ? `hidden`:`block`}`}
      >
        Load More
      </button>
      <button
        onClick={decreaseFunc}
        className={`px-4 py-2 font-montserrat font-semibold text-white bg-slate-500 rounded-md shadow-md hover:bg-slate-600 ${
          productAmount === 8 || productAmount < 8 ? `hidden`:`block`
        }`}
      >
        show less
      </button>
    </div>
  );
};

export default LoadMoreAndLoadLessButton;
