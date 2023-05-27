const Button = (props) => {
  let color = props.color;
  return (
    <>
      <button
        disabled={props.disable}
        className={`bg-${props.color} hover:enabled:text-${props.color} hover:enabled:bg-Foam-50 hover:enabled:ring-${props.color} hover:enabled:ring-2 duration-200 m-4 w-36 h-12 disabled:opacity-40 rounded-xl text-lg text-Foam-50 font-extrabold overflow-hidden flex items-center justify-center ${props.className}`}
      >
        <span>{props.btnIcon}</span>
        {props.text}
      </button>
    </>
  );
};

export default Button;
// props: btnIcon , text ,className , color , disable
