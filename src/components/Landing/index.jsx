const Landing = () => {
  return (
    <>
      <div className="w-full h-full bg-BlueRibbon-500 land relative overflow-hidden rounded-b-[32px] ">
        {/* background */}
        <div className="absolute h-5/6 w-full bg opacity-10 bottom-0 md:-bottom-6 md:-right-72 -rotate-6 md:-rotate-45 md:top-0 z-0"></div>
        {/* circle end */}
        <div className="w-24 h-28 bg-white absolute rounded-t-full -bottom-16 border-none left-1/2 right-1/2 translate-x-1/2 "></div>
        {/* wallet*/}
        <div className="absolute h-full w-full md:w-3/5 left-0">
            {/* container of wallet */}

        </div>
      </div>
      {/* <img className="w-full h-full aspect-auto" src="https://s8.uupload.ir/files/wallet_2_znf0.png" alt="wallet" /> */}
    </>
  );
};

export default Landing;
