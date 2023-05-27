const SecInput = (props) => {
  return (
    <>
      <div
        className={`w-full h-full duration-200 rounded-xl relative ${props.className} ${
          props.disable ? 'opacity-40' : ''
        }`}
      >
        <input
          placeholder={props.placeholder}
          disabled={props.disable}
          dir="rtl"
          type="text"
          className="w-full h-full placeholder:text-Foam-500 placeholder:font-semibold px-4 bg-Foam-50 disabled:bg-slate-300 focus:shadow-xl shadow-lg rounded-xl outline-none duration-200 text-base text-Foam-900"
        />
        {props.inputIcon ? (
          <span className="absolute right-0 bottom-0 bg-transparent w-12 h-full rounded-xl flex items-center justify-center">
            {props.inputIcon}
          </span>
        ) : (
          ''
        )}
      </div>
    </>
  );
};

export default SecInput;

// props = inputIcon , disable , className , placeholder
