import CoinDetail from './data';

const CoinCard = () => {
  return (
    <>
        <div className="flex gap-3 flex-wrap justify-center items-center">
          {CoinDetail.map((data, index) => {
            return (
              <div
                key={index}
                className="flex flex-col bg-BlueRibbon-500 w-44 h-52 rounded-[49px] justify-center items-center"
              >
                {/* coin logo */}
                <span className="w-16 h-16 mb-3">
                  <img
                    className="bg-center bg-no-repeat bg-cover w-full h-full"
                    src={data.img}
                    alt="crypto"
                  />
                </span>
                {/* coin name */}
                <div className="flex items-center gap-x-4 FuelYellow font-extrabold text-base font-mono text-FuelYellow mb-3">
                  {/* persian name  */}
                  <p>{data.persianName}</p>
                  {/* english name */}
                  <p>{data.name}</p>
                </div>
                {/* rial price */}
                <span className="text-Foam-50 gap-x-2 flex font-semibold text-lg mb-2">
                  <p className="tracking-wide">
                    {Intl.NumberFormat().format(data.price)}
                  </p>
                  <p>ریال</p>
                </span>
                {/* change price */}
                <div className="flex gap-x-2">
                  <span
                    className={`font-semibold text-FuelYellow text-sm flex gap-x-1 ${
                      data.price <= 200000 ? 'text-Malachite' : ''
                    }`}
                  >
                    {/*  */}
                    <p>({Intl.NumberFormat().format(data.change)})</p>
                    <p>{((data.change * 100) / data.price).toFixed(2)}</p>
                  </span>
                  <span className={` text-FuelYellow flex ${
                      data.price <= 200000 ? 'text-Malachite' : ''
                    }`}>
                    {data.price >= 200000 ? (
                      <svg
                        className="w-3"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6883 15.8416C10.9026 17.0787 9.09731 17.0787 8.31168 15.8416L0.519564 3.57221C-0.326071 2.24068 0.630505 0.5 2.20786 0.5L17.7921 0.5C19.3695 0.5 20.326 2.24068 19.4804 3.57221L11.6883 15.8416Z"
                          fill="currentColor"
                        />
                      </svg>
                    ) : (
                      <svg
                        className="w-3 rotate-180"
                        viewBox="0 0 20 17"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11.6883 15.8416C10.9026 17.0787 9.09731 17.0787 8.31168 15.8416L0.519564 3.57221C-0.326071 2.24068 0.630505 0.5 2.20786 0.5L17.7921 0.5C19.3695 0.5 20.326 2.24068 19.4804 3.57221L11.6883 15.8416Z"
                          fill="currentColor"
                        />
                      </svg>
                    )}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
    </>
  );
};

export default CoinCard;
