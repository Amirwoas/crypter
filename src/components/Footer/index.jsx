import {BsLinkedin, BsInstagram , BsTwitter, BsFacebook} from "react-icons/bs"
import Accordition from '../Footer/Accordion/index';
export const Footer = () => {
  return (
    <>
      {/* // container */}
      <div className="w-full h-full xl:container xl:mx-auto">
        <div className="flex flex-col w-full h-auto p-6 bg-BlueRibbon-600 text-Foam-50">
          {/* subscribe*/}
          <div className="flex flex-col items-center justify-center w-full md:flex-row md:justify-between gap-x-10">
            {/* logo and title */}
            <div className='flex flex-col items-center justify-center'>
                 {/* logo */}
            <div className="flex flex-row-reverse items-center justify-center w-full gap-x-2">
              <span>
                <svg
                  width="117"
                  height="44"
                  viewBox="0 0 117 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.54102 41.0564C3.03304 42.9747 5.7798 43.3593 7.74132 41.9246L13.2594 37.8884C14.0458 37.3132 14.5106 36.3973 14.5106 35.423V32.7057C14.5106 31.2632 16.3037 30.4571 17.7462 30.4571L18.4264 28.5173C18.7711 27.5343 18.7636 26.462 18.4051 25.484L17.6914 23.5365C15.9388 23.5365 14.5106 22.0985 14.5106 20.256V14.8371C14.5106 12.5691 12.3775 10.9062 10.1781 11.4596C8.63021 11.8491 7.54519 13.2409 7.54519 14.8371V31.2074C7.54519 32.5273 6.96492 33.7805 5.95838 34.6343L0.287598 39.4448L1.54102 41.0564Z"
                    fill="#F53A21"
                  />
                  <path
                    d="M17.7364 30.4571C18.856 30.4571 19.9194 30.2648 20.9065 29.9208C23.1399 29.1424 25.8076 29.152 28.0432 29.924C28.2876 30.0084 28.5368 30.0836 28.7903 30.149C30.2133 30.5163 31.5434 29.5287 32.0297 28.1418C32.2896 27.4006 32.2896 26.593 32.0297 25.8518C31.5434 24.4649 30.0608 23.6734 28.9803 22.6771C28.3352 22.0822 27.9374 21.225 27.9374 20.256V14.7874C27.9374 12.5406 25.8295 10.8896 23.6482 11.4279C22.1028 11.8092 21.0169 13.1956 21.0169 14.7874V20.256C21.0169 22.0985 19.5339 23.5365 17.7364 23.5365H17.6914L18.4051 25.484C18.7636 26.462 18.7711 27.5343 18.4264 28.5173L17.7462 30.4571H17.7364ZM12.0839 3.15683C12.0839 4.63356 13.2811 5.83068 14.7578 5.83068H25.5781C27.0548 5.83068 28.252 4.63356 28.252 3.15683C28.252 1.6801 27.0548 0.48298 25.5781 0.48298H14.7578C13.2811 0.48298 12.0839 1.6801 12.0839 3.15683Z"
                    fill="#F53A21"
                  />
                  <path
                    d="M30.4271 27.7829C30.8906 29.3678 32.344 30.4571 33.9953 30.4571C35.1114 30.4571 36.1796 30.266 37.17 29.924C39.4056 29.152 42.0733 29.1424 44.3067 29.9208C45.2938 30.2648 46.3572 30.4571 47.4768 30.4571L48.5964 27.0867L49.0634 23.5365C47.2658 23.5365 44.1963 22.0985 44.1963 20.256V14.7874C44.1963 12.5406 42.0884 10.8896 39.9071 11.4279C38.3617 11.8092 37.2758 13.1956 37.2758 14.7874V20.256C37.2758 22.0985 35.7928 23.5365 33.9953 23.5365H33.355C32.0622 23.5365 30.9028 24.3327 30.4385 25.5393C30.1925 26.1786 30.1634 26.8811 30.3557 27.5386L30.4271 27.7829ZM31.4338 37.6248C31.4338 39.1015 32.6309 40.2987 34.1077 40.2987H35.9332C36.9477 40.2987 37.7701 41.1211 37.7701 42.1356C37.7701 43.3818 38.9846 44.2663 40.1706 43.884L41.3229 43.5126C42.4462 43.1505 43.2077 42.1051 43.2077 40.9249V39.4448C43.2077 36.9629 41.1957 34.951 38.7138 34.951H34.1077C32.6309 34.951 31.4338 36.1481 31.4338 37.6248Z"
                    fill="#F53A21"
                  />
                  <path
                    d="M47.4768 30.4571H49.0634H50.6362C56.2535 30.4571 60.8372 25.8733 60.8372 20.256V14.7874C60.8372 12.5406 58.7293 10.8896 56.548 11.4279C55.0026 11.8092 53.9167 13.1956 53.9167 14.7874V20.256C53.9167 22.0985 52.4337 23.5365 50.6362 23.5365H49.0634L48.5964 27.0867L47.4768 30.4571ZM47.131 37.6023C47.131 39.0915 48.3382 40.2987 49.8273 40.2987H56.2984C57.7876 40.2987 58.9947 39.0915 58.9947 37.6023C58.9947 36.1132 57.7876 34.906 56.2984 34.906H49.8273C48.3382 34.906 47.131 36.1132 47.131 37.6023Z"
                    fill="#F53A21"
                  />
                  <path
                    d="M62.4898 38.166C63.8646 40.2362 66.6585 40.7977 68.7262 39.4192L71.0496 37.8703C71.8902 37.3098 72.3952 36.3663 72.3952 35.356V31.7627C72.3952 30.7032 74.2242 30.0901 75.2481 30.3624C75.7698 30.5011 75.7503 30.1161 75.929 29.6066L76.8441 26.9968L75.5594 23.1545C74.9977 22.5928 72.3952 22.0985 72.3952 20.256V14.8371C72.3952 12.5691 70.262 10.9062 68.0626 11.4596C66.5147 11.8491 65.4297 13.2409 65.4297 14.8371V30.8972C65.4297 32.392 64.6864 33.789 63.4467 34.6242L61.1606 36.1643L62.4898 38.166Z"
                    fill="#F53A21"
                  />
                  <path
                    d="M75.6209 30.4571H106.404C112.021 30.4571 116.65 25.8733 116.65 20.256C116.65 14.6387 112.021 10.0999 106.404 10.0999H90.5405L96.3462 6.02496C97.8731 4.9533 98.1927 2.82216 97.0475 1.34968C96.0121 0.0184776 94.1331 -0.304722 92.7124 0.604044L79.9302 8.78061C78.6452 9.60256 77.8678 11.0227 77.8678 12.5481C77.8678 15.0181 79.8702 17.0204 82.3402 17.0204H106.404C108.201 17.0204 109.684 18.4585 109.684 20.256C109.684 22.0985 108.201 23.5365 106.404 23.5365L75.5594 23.1545L76.1212 24.8397L76.8441 26.9968L75.6209 30.4571Z"
                    fill="#F53A21"
                  />
                </svg>
              </span>
              <span>
                <svg
                  width="94"
                  height="29"
                  viewBox="0 0 94 29"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5028 14.792C12.5028 15.7733 12.6734 16.4773 13.0148 16.904C13.3561 17.3307 13.8574 17.544 14.5188 17.544H15.4148C15.5214 17.544 15.5961 17.6613 15.6388 17.896C15.7028 18.1307 15.7348 18.6107 15.7348 19.336C15.7348 20.0187 15.7028 20.4667 15.6388 20.68C15.5961 20.8933 15.5214 21 15.4148 21H14.5188C13.3454 21 12.3854 20.7867 11.6388 20.36C10.9134 19.912 10.4121 19.1973 10.1348 18.216C9.68675 18.6427 9.07875 18.9627 8.31075 19.176C7.54275 19.3893 6.73208 19.496 5.87875 19.496C4.00142 19.496 2.57208 18.9947 1.59075 17.992C0.609417 16.968 0.11875 15.464 0.11875 13.48C0.11875 12.2853 0.385417 11.1867 0.91875 10.184C1.45208 9.16 2.19875 8.34933 3.15875 7.752C4.14008 7.13333 5.26008 6.824 6.51875 6.824H9.20675V4.68H12.5028V14.792ZM3.41475 13.448C3.41475 15.176 4.28942 16.04 6.03875 16.04C7.04142 16.04 7.82008 15.8693 8.37475 15.528C8.92942 15.1653 9.20675 14.6747 9.20675 14.056V10.152H6.51875C5.53742 10.152 4.76942 10.44 4.21475 11.016C3.68142 11.5707 3.41475 12.3813 3.41475 13.448ZM16.1743 17.544C16.8783 17.544 17.3796 17.4053 17.6783 17.128C17.9983 16.8293 18.1583 16.3707 18.1583 15.752V14.632C18.1583 12.584 18.7236 10.9627 19.8543 9.768C21.0063 8.57333 22.5636 7.976 24.5263 7.976C26.4889 7.976 27.9929 8.552 29.0383 9.704C30.0836 10.8347 30.6063 12.4667 30.6063 14.6C30.6063 16.6267 30.0516 18.2053 28.9423 19.336C27.8543 20.4453 26.3396 21 24.3983 21C23.3103 21 22.3929 20.8507 21.6463 20.552C20.8996 20.232 20.3556 19.7947 20.0143 19.24C19.6303 19.8587 19.1289 20.3067 18.5103 20.584C17.9129 20.8613 17.1343 21 16.1743 21H15.4062C15.1929 21 15.0862 20.4453 15.0862 19.336C15.0862 18.1413 15.1929 17.544 15.4062 17.544H16.1743ZM27.3103 14.6C27.3103 13.4907 27.0649 12.6693 26.5743 12.136C26.1049 11.5813 25.3796 11.304 24.3983 11.304C23.4169 11.304 22.6809 11.5813 22.1903 12.136C21.7209 12.6693 21.4863 13.5013 21.4863 14.632C21.4863 15.5707 21.7316 16.296 22.2223 16.808C22.7129 17.2987 23.4383 17.544 24.3983 17.544C25.3796 17.544 26.1049 17.3093 26.5743 16.84C27.0649 16.3493 27.3103 15.6027 27.3103 14.6ZM41.864 17.544C41.9707 17.544 42.0453 17.6613 42.088 17.896C42.152 18.1307 42.184 18.6107 42.184 19.336C42.184 20.0187 42.152 20.4667 42.088 20.68C42.0453 20.8933 41.9707 21 41.864 21H40.904C39.1973 21 37.9067 20.4987 37.032 19.496C36.1573 18.4933 35.72 17.0747 35.72 15.24V0.327999H39.016V15.016C39.016 15.8907 39.176 16.5307 39.496 16.936C39.8373 17.3413 40.3707 17.544 41.096 17.544H41.864ZM50.675 15.624C50.675 17.3093 50.1737 18.632 49.171 19.592C48.1683 20.5307 46.8243 21 45.139 21H41.875C41.6617 21 41.555 20.4453 41.555 19.336C41.555 18.1413 41.6617 17.544 41.875 17.544H45.139C45.8003 17.544 46.3337 17.3733 46.739 17.032C47.1443 16.6693 47.347 16.168 47.347 15.528V10.376H50.675V15.624ZM45.459 6.728V3.592H49.299V6.728H45.459ZM60.5025 15.304C60.5025 16.7973 61.3132 17.544 62.9345 17.544H63.3825C63.5958 17.544 63.7025 18.1413 63.7025 19.336C63.7025 20.4453 63.5958 21 63.3825 21H62.9345C62.4012 21 61.9105 20.9253 61.4625 20.776C61.0358 20.6053 60.7158 20.3813 60.5025 20.104V20.296C60.4598 21.96 60.0758 23.432 59.3505 24.712C58.6465 25.992 57.6545 26.984 56.3745 27.688C55.1158 28.392 53.6438 28.744 51.9585 28.744H49.5585L49.2705 25.288H51.9265C53.5692 25.288 54.8492 24.8187 55.7665 23.88C56.7052 22.9627 57.1745 21.6613 57.1745 19.976V10.376H60.5025V15.304ZM67.215 17.544C67.8977 17.544 68.4417 17.3733 68.847 17.032C69.2737 16.6693 69.487 16.168 69.487 15.528V10.376H72.815V15.4C72.815 16.8293 73.551 17.544 75.023 17.544H76.111C76.3243 17.544 76.431 18.1307 76.431 19.304C76.431 20.4347 76.3243 21 76.111 21H74.895C72.9963 21 71.7377 20.424 71.119 19.272C70.3723 20.424 69.071 21 67.215 21H63.375C63.1617 21 63.055 20.4453 63.055 19.336C63.055 18.1413 63.1617 17.544 63.375 17.544H67.215ZM64.719 27.88V24.744H68.559V27.88H64.719ZM78.429 17.544C80.0503 17.544 81.3837 17.4267 82.429 17.192C83.4957 16.9573 84.5837 16.52 85.693 15.88L89.725 13.576C89.4477 12.5733 89.053 11.8907 88.541 11.528C88.029 11.144 87.261 10.952 86.237 10.952H78.845L79.261 7.496H86.813C88.1357 7.496 89.213 7.72 90.045 8.168C90.877 8.59467 91.5703 9.32 92.125 10.344C92.6797 11.368 93.1703 12.808 93.597 14.664L87.229 18.664C85.7997 19.56 84.4237 20.1787 83.101 20.52C81.7997 20.84 80.189 21 78.269 21H76.125C75.9117 21 75.805 20.4453 75.805 19.336C75.805 18.1413 75.9117 17.544 76.125 17.544H78.429ZM82.749 3.976V0.839998H86.589V3.976H82.749Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
            {/* text */}
            <p className="w-full md:text-xl py-4 text-sm font-semibold text-center md:py-2">
              عضویت در خبرنامه کریپتر آخرین اخبار و اطلاعیه‌ها را در ایمیل خود دریافت
              کنید:
            </p>
            </div>

            {/* input */}
            <label className="relative flex w-full h-12 max-w-lg">
              <input
                className="w-full h-full px-4 text-Foam-700 rounded-lg focus:outline-BlueRibbon-500 focus:outline-1"
                placeholder="ایمیل خود را وارد کنید"
                type="text"
                name="Subscribe"
              />
              <button className="absolute font-bold top-0 bottom-0 h-10 px-3 my-auto duration-300 rounded-md left-2 bg-BlueRibbon-500 hover:bg-Foam-50 hover:text-BlueRibbon-500 hover:ring-BlueRibbon-500 hover:ring-2">
                عضویت
              </button>
            </label>
          </div>
            {/* line */}
            <span className="w-full h-0.5 line my-8"></span>
          <div className='flex flex-col md:flex-row'>
          {/* About crypter */}
            <div className="flex flex-col gap-y-5 md:max-w-[40%] lg:max-w-[50%]">
            <span>
              <svg
                width="117"
                height="44"
                viewBox="0 0 117 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.25343 41.0565C2.74545 42.9748 5.49219 43.3594 7.45371 41.9247L12.9718 37.8885C13.7582 37.3133 14.223 36.3974 14.223 35.4231V32.7058C14.223 31.2633 16.0161 30.4572 17.4586 30.4572L18.1388 28.5174C18.4835 27.5344 18.476 26.4621 18.1175 25.4841L17.4038 23.5366C15.6512 23.5366 14.223 22.0986 14.223 20.2561V14.8372C14.223 12.5692 12.0899 10.9063 9.8905 11.4597C8.34261 11.8492 7.25759 13.241 7.25759 14.8372V31.2075C7.25759 32.5274 6.67732 33.7806 5.67079 34.6344L0 39.4449L1.25343 41.0565Z"
                  fill="#FAFDFF"
                />
                <path
                  d="M17.4488 30.4572C18.5684 30.4572 19.6319 30.2649 20.619 29.9209C22.8523 29.1425 25.52 29.1521 27.7556 29.9241C28 30.0085 28.2492 30.0837 28.5027 30.1491C29.9257 30.5164 31.2558 29.5288 31.7421 28.1419C32.002 27.4007 32.002 26.5931 31.7421 25.8519C31.2558 24.465 29.7732 23.6735 28.6927 22.6772C28.0476 22.0823 27.6498 21.2251 27.6498 20.2561V14.7875C27.6498 12.5407 25.5419 10.8897 23.3606 11.428C21.8152 11.8093 20.7293 13.1957 20.7293 14.7875V20.2561C20.7293 22.0986 19.2463 23.5366 17.4488 23.5366H17.4038L18.1175 25.4841C18.476 26.4621 18.4835 27.5344 18.1388 28.5174L17.4586 30.4572H17.4488ZM11.7963 3.15692C11.7963 4.63365 12.9935 5.83078 14.4702 5.83078H25.2905C26.7672 5.83078 27.9644 4.63365 27.9644 3.15692C27.9644 1.6802 26.7672 0.483072 25.2905 0.483072H14.4702C12.9935 0.483072 11.7963 1.6802 11.7963 3.15692Z"
                  fill="#FAFDFF"
                />
                <path
                  d="M30.1395 27.783C30.603 29.3679 32.0564 30.4572 33.7077 30.4572C34.8238 30.4572 35.892 30.2661 36.8824 29.9241C39.118 29.1521 41.7857 29.1425 44.019 29.9209C45.0061 30.2649 46.0696 30.4572 47.1892 30.4572L48.3088 27.0868L48.7758 23.5366C46.9782 23.5366 43.9087 22.0986 43.9087 20.2561V14.7875C43.9087 12.5407 41.8008 10.8897 39.6195 11.428C38.0741 11.8093 36.9882 13.1957 36.9882 14.7875V20.2561C36.9882 22.0986 35.5052 23.5366 33.7077 23.5366H33.0675C31.7746 23.5366 30.6152 24.3328 30.1509 25.5394C29.9049 26.1787 29.8758 26.8812 30.0681 27.5387L30.1395 27.783ZM31.1462 37.6249C31.1462 39.1016 32.3433 40.2988 33.8201 40.2988H35.6456C36.6601 40.2988 37.4825 41.1212 37.4825 42.1357C37.4825 43.3819 38.697 44.2664 39.883 43.8841L41.0354 43.5127C42.1586 43.1506 42.9201 42.1052 42.9201 40.925V39.4449C42.9201 36.963 40.9081 34.951 38.4262 34.951H33.8201C32.3433 34.951 31.1462 36.1482 31.1462 37.6249Z"
                  fill="#FAFDFF"
                />
                <path
                  d="M47.1892 30.4572H48.7758H50.3486C55.9659 30.4572 60.5496 25.8734 60.5496 20.2561V14.7875C60.5496 12.5407 58.4417 10.8897 56.2604 11.428C54.715 11.8093 53.6291 13.1957 53.6291 14.7875V20.2561C53.6291 22.0986 52.1461 23.5366 50.3486 23.5366H48.7758L48.3088 27.0868L47.1892 30.4572ZM46.8434 37.6024C46.8434 39.0916 48.0506 40.2988 49.5397 40.2988H56.0108C57.5 40.2988 58.7071 39.0916 58.7071 37.6024C58.7071 36.1133 57.5 34.9061 56.0108 34.9061H49.5397C48.0506 34.9061 46.8434 36.1133 46.8434 37.6024Z"
                  fill="#FAFDFF"
                />
                <path
                  d="M62.2023 38.1661C63.577 40.2363 66.3709 40.7977 68.4386 39.4193L70.762 37.8704C71.6026 37.3099 72.1076 36.3664 72.1076 35.3561V31.7628C72.1076 30.7033 73.9366 30.0902 74.9605 30.3625C75.4822 30.5012 75.4627 30.1161 75.6414 29.6067L76.5565 26.9969L75.2718 23.1546C74.7101 22.5929 72.1076 22.0986 72.1076 20.2561V14.8372C72.1076 12.5692 69.9744 10.9063 67.775 11.4597C66.2271 11.8492 65.1421 13.241 65.1421 14.8372V30.8973C65.1421 32.3921 64.3988 33.7891 63.1591 34.6243L60.873 36.1644L62.2023 38.1661Z"
                  fill="#FAFDFF"
                />
                <path
                  d="M75.3333 30.4572H106.116C111.733 30.4572 116.362 25.8734 116.362 20.2561C116.362 14.6388 111.733 10.1 106.116 10.1H90.2529L96.0586 6.02506C97.5855 4.95339 97.9052 2.82225 96.7599 1.34977C95.7245 0.0185686 93.8455 -0.30463 92.4248 0.604136L79.6426 8.7807C78.3576 9.60265 77.5802 11.0228 77.5802 12.5482C77.5802 15.0182 79.5826 17.0205 82.0526 17.0205H106.116C107.914 17.0205 109.397 18.4585 109.397 20.2561C109.397 22.0986 107.914 23.5366 106.116 23.5366L75.2718 23.1546L75.8336 24.8398L76.5565 26.9969L75.3333 30.4572Z"
                  fill="#FAFDFF"
                />
              </svg>
            </span>
            <span className="px-10 md:px-8 text-justify h-full md:text-xl lg:text-2xl font-semibold">
              در صرافی ارز دیجیتال کریپتر که امن ترین صرافی کریپتوکارنسی (Cryptocurrency)              کشور است، شما توانایی خرید و فروش انواع ارزهای دیجیتال معتبر دنیا مانند بیت
              کوین، اتریوم، تتر، دوج کوین، شیبا و ... را به صورت حرفه ای و سریع را خواهید
              داشت.با اطمینان خاطر فراوان در صرافی امن کریپتر اقدام به معامله و خرید ارز
              دیجیتال نمایید. پلتفرم ترید حرفه ای
            </span>
          </div>
          {/* line */}
          <span className="w-full h-0.5 line my-8 md:hidden"></span>
          {/* acorion */}
          <Accordition/>
          {/*  */}
            </div>
          {/* line */}
          <span className="w-full h-0.5 line my-8"></span>
            {/* social media */}
            <div className='flex flex-col md:flex-row md:justify-between items-center justify-center w-full gap-y-4 md:p-8'>
                <span className='text-xl md:text-3xl font-semibold'>شبکه های اجتماعی</span>
                <div className='flex md:gap-x-10 gap-x-4'>
                    <span className='p-1 cursor-pointer'><BsLinkedin className='text-5xl'/></span>
                    <span className='p-1 cursor-pointer'><BsInstagram className='text-5xl'/></span>
                    <span className='p-1 cursor-pointer'><BsTwitter className='text-5xl'/></span>
                    <span className='p-1 cursor-pointer'><BsFacebook className='text-5xl'/></span>
                </div>
            </div>
            {/* line */}
              <span className="w-full h-0.5 line my-4"></span>
            {/* copy right */}
            <span className='w-full py-6 text-xs md:text-lg font-semibold text-center text-FuelYellow'>کلیه حقوق مادی و معنوی این صفحه متعلق به امیرحسین شهریاری میباشد</span>
        </div>
      </div>
    </>
  );
};
