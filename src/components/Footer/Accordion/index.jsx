import { useState } from "react";

const Accordition = ({open, toggle}) => {
  const data = [
    {
      id: 1,
      title: 'راهنمای کریپتر',
      content: [
        'نحوه ثبت نام',
        'روش های خرید و فروش',
        'شیوه های پرداخت',
        'مقالات آموزشی',
        'وبلاگ کریپتر',
        'سوالات متداول',
      ],
    },
    {
      id: 2,
      title: 'دسترسی سریع',
      content: [
        'خرید تتر',
        'خرید بیت کوین',
        'خرید اتریوم',
        'خرید دوج کوین',
        'خرید bnb',
        'خرید سولانا',
        'خرید شیبا',
        'خرید آواکس',
        'خرید متیک',
      ],
    },
    {
      id: 3,
      title: 'لینک های مهم',
      content: [
        'درباره ما',
        'تماس با ما',
        'قوانین و مقررات',
        'معرفی دوستان',
        'فرصت های شغلی',
        'اطلاعیه ها',
      ],
    },
  ];
  const [acc1,setAcc1] = useState(false);
  const [acc2,setAcc2] = useState(false);
  const [acc3,setAcc3] = useState(false);
  return (
    <>
      {/* accordition */}
      {/* mobile */}
      <div className="h-full w-full px-4 md:hidden">
        <div>
          {/* acc 1 */}
          <div>
            {/* title */}
            <div onClick={()=> setAcc1(!acc1)} className="cursor-pointer w-full flex items-center justify-between">
              <span className="font-semibold text-xl lg:text-2xl lg:font-extrabold">
                {data[2].title}
              </span>
              <span className={`${acc1 ? "rotate-180" : "rotate-0"} duration-300`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            {/* content */}
            <ul className={`list-disc list-inside ease-linear px-2 overflow-hidden duration-700 transition-all max-h-0 ${acc1 ? "max-h-96" : ""}`}>
              {data[2].content.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer py-1.5 pr-4 font-semibold text-lg text-Foam-500 hover:text-Foam-50 duration-200"
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
            {/* line */}
            <span className="w-full md:hidden">
              <svg
                className="h-1 w-full my-6"
                viewBox="0 0 315 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M314 1.00006L1 1.00009"
                  stroke="#E9F7FD"
                  stroke-linecap="round"
                  stroke-dasharray="10 10"
                />
              </svg>
            </span>
          </div>
          {/* acc 2 */}
          <div>
            {/* title */}
            <div onClick={()=> setAcc2(!acc2)} className="cursor-pointer w-full flex items-center justify-between">
              <span className="font-semibold text-xl lg:text-2xl lg:font-extrabold">
                {data[1].title}
              </span>
              <span className={`${acc2 ? "rotate-180" : "rotate-0"} duration-300`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            {/* content */}
            <ul className={`list-disc list-inside ease-linear px-2 overflow-hidden duration-700 transition-all max-h-0 ${acc2 ? "max-h-96" : ""}`}>
              {data[1].content.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer py-1.5 pr-4 font-semibold text-lg text-Foam-500 hover:text-Foam-50 duration-200"
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
            {/* line */}
            <span className="w-full md:hidden">
              <svg
                className="h-1 w-full my-6"
                viewBox="0 0 315 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  opacity="0.7"
                  d="M314 1.00006L1 1.00009"
                  stroke="#E9F7FD"
                  stroke-linecap="round"
                  stroke-dasharray="10 10"
                />
              </svg>
            </span>
          </div>
          {/* acc 3 */}
          <div>
            {/* title */}
            <div onClick={()=> setAcc3(!acc3)} className="cursor-pointer w-full flex items-center justify-between">
              <span className="font-semibold text-xl lg:text-2xl lg:font-extrabold">
                {data[0].title}
              </span>
              <span className={`${acc3 ? "rotate-180" : "rotate-0"} duration-300`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </span>
            </div>

            {/* content */}
            <ul className={`list-disc list-inside px-2 overflow-hidden duration-700 transition-all ease-linear max-h-0 ${acc3 ? "max-h-96" : ""}`}>
              {data[0].content.map((data, index) => {
                return (
                  <li
                    key={index}
                    className="cursor-pointer py-1.5 pr-4 font-semibold text-lg text-Foam-500 hover:text-Foam-50 duration-200"
                  >
                    {data}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* desktop */}
      <div className="h-full hidden md:flex flex-auto">
              {data.map((data,index)=> {
                return (
                  <div key={index} className="flex flex-auto flex-col gap-y-3 items-center">
                  {/* title */}
                  <span className="font-extrabold text-xl lg:text-2xl ml-8">{data.title}</span>
                  {/* content */}
                  <ul className="list-disc list-inside px-2">
                  {data.content.map((data,index)=> {
                    return(
                      <li key={index} className="py-1.5 cursor-pointer font-semibold text-lg text-Foam-500 hover:text-Foam-50 duration-200">
                      {data}
                    </li>
                    )
                  })}
                  </ul>
                </div>
                )
              })}
      </div>
    </>
  );
};

export default Accordition;
