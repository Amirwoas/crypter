import CoinDetail from './data';

const CoinCard = () => {
  return (
    <>
  <div className='py-24 px-8'>
  <div className="flex gap-3">
        {CoinDetail.map((data,index)=>{
            return(
                <div key={index} className="flex flex-col bg-BlueRibbon-500 w-44 h-52 rounded-[49px] justify-center items-center">
                {/* coin logo */}
                <span className='w-16 h-16 mb-3'>
                  <img className='bg-center bg-no-repeat bg-cover w-full h-full' src={data.img} alt="crypto" />
                </span>
                {/* coin name */}
                <div className='flex items-center gap-x-4 FuelYellow font-extrabold text-base font-mono text-FuelYellow mb-3'>
                  {/* persian name  */}
                  <p>{data.persianName}</p>
                  {/* english name */}
                  <p>{data.name}</p>
                </div>
                {/* rial price */}
                <span className='text-Foam-50 gap-x-2 flex font-semibold text-lg mb-5'>
                <p>{Intl.NumberFormat().format(data.price)}</p>
                <p>ریال</p>
                </span>
                {/* change price */}
                <div>
                  <span>
                    <p></p>
                    <p></p>
                  </span>
                  <span></span>
                </div>
              </div>
            )
        })}
      </div>
  </div>
    </>
  );
};

export default CoinCard;
