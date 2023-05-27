const FirstInput = (props) => {
  return (
    <>
      <div className={`w-full h-full duration-200 rounded-lg relative ${props.className} ${props.disable ? "opacity-40" : ""}`}>
        <input
          placeholder={props.placeholder}
          disabled={props.disable}
          dir="rtl"
          type="text"
          className="w-full placeholder:text-Foam-500 placeholder:font-semibold h-full px-4 outline-none duration-200 bg-Foam-50 disabled:bg-gray-100 focus:outline-BlueRibbon-600 rounded-lg outline-2 outline-BlueRibbon-300 text-base text-Foam-900"
        />
        {props.inputIcon ? (
          <span className="absolute right-0 bottom-0 bg-transparent w-12 h-full rounded-lg flex items-center justify-center">
            {props.inputIcon}
          </span>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default FirstInput;

// props = inputIcon , disable , className , placeholder
