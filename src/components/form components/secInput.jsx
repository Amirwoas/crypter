const SecInput = (props) => {
  return (
    <>
      <div className={`w-80 h-12 m-4 duration-200 rounded-xl relative ${props.disable ? "opacity-40" : ""}`}>
        <input
          htmlFor="email4"
          disabled={props.disable}
          dir="rtl"
          type="text"
          className="w-full h-full peer pr-12 bg-Foam-50 disabled:bg-slate-300 focus:shadow-xl shadow-lg rounded-xl outline-none duration-200 text-base text-Foam-900"
        />
        <span id="email4" className="absolute peer-focus:visible right-0 bottom-0 bg-transparent w-12 h-full rounded-xl flex items-center justify-center">
            {props.inputIcon}
        </span>
      </div>
    </>
  );
};

export default SecInput;

// props = inputIcon , disable
