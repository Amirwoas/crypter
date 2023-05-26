import { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState(true);

  return (
    <>
       {/* overally */}
       {nav ? <div onClick={()=> setNav(!nav)} className="bg-Foam-800 z-30 opacity-60 w-full lg:hidden h-screen absolute"></div> : ""}
      {/* nav */}
      <nav className="w-full px-1 lg:px-3 absolute py-2 bg-transparent">
        <div className="w-full mx-1 lg:mx-3 my-2 border-none bg-Foam-50 h-14 lg:h-20 border rounded-xl flex items-center justify-between px-4 lg:px-8 z-30 shadow-xl">
         {/* 2 button signUp  and support*/}
          <span className="flex gap-x-2">
            {/* support */}
            <button className="bg-Pomegranate-500 rounded-lg lg:rounded-xl w-9 h-9 md:h-10 md:w-10 lg:w-[8rem] lg:h-12 flex items-center justify-around px-1 text-Foam-50 font-semibold text-base">
            {/* support logo on mobile viewport */}
            <svg className="lg:hidden w-5 h-5" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.93138 1.59636C7.63801 1.46788 8.36203 1.46788 9.06866 1.59636C12.2439 2.17367 14.3866 5.16849 13.9078 8.36007L13.9024 8.39642C12.9352 8.44717 12.1667 9.24743 12.1667 10.2272V11.5605C12.1667 12.5731 12.9875 13.3939 14 13.3939C15.0125 13.3939 15.8334 12.5731 15.8334 11.5605V10.2272C15.8334 9.53326 15.4481 8.93012 14.8802 8.61875L14.8968 8.50841C15.4556 4.78258 12.9543 1.28644 9.24755 0.61249C8.42262 0.462503 7.57742 0.462503 6.75249 0.61249C3.04574 1.28644 0.5444 4.78257 1.10328 8.50841L1.11983 8.61875C0.551923 8.93012 0.166687 9.53326 0.166687 10.2272V11.5605C0.166687 12.5731 0.987498 13.3939 2.00002 13.3939C3.01254 13.3939 3.83335 12.5731 3.83335 11.5605V10.2272C3.83335 9.24743 3.06479 8.44717 2.09766 8.39642L2.09221 8.36007C1.61347 5.16849 3.75615 2.17367 6.93138 1.59636Z" fill="#FAFDFF"/>
            <path d="M5.02024 7.87364C4.82498 7.67838 4.5084 7.67838 4.31313 7.87364C4.11787 8.06891 4.11787 8.38549 4.31313 8.58075L4.5798 8.84742C4.62093 8.88854 4.63775 8.90539 4.65126 8.91929C5.71977 10.0188 5.71977 11.7689 4.65126 12.8684C4.63775 12.8823 4.62092 12.8992 4.5798 12.9403L4.31313 13.207C4.11787 13.4022 4.11787 13.7188 4.31313 13.9141C4.5084 14.1093 4.82498 14.1093 5.02024 13.9141L5.29051 13.6438C5.32695 13.6074 5.34931 13.585 5.36842 13.5653C6.81405 12.0777 6.81405 9.71002 5.36842 8.22238C5.34927 8.20268 5.32701 8.18041 5.29044 8.14384L5.02024 7.87364Z" fill="#FAFDFF"/>
            <path d="M11.6869 8.58075C11.8822 8.38549 11.8822 8.0689 11.6869 7.87364C11.4916 7.67838 11.1751 7.67838 10.9798 7.87364L10.7096 8.14381C10.673 8.1804 10.6508 8.20267 10.6316 8.22238C9.18599 9.71002 9.18599 12.0777 10.6316 13.5653C10.6508 13.585 10.673 13.6073 10.7096 13.6438L10.9798 13.9141C11.1751 14.1093 11.4916 14.1093 11.6869 13.9141C11.8822 13.7188 11.8822 13.4022 11.6869 13.207L11.4202 12.9403C11.3791 12.8992 11.3623 12.8823 11.3488 12.8684C10.2803 11.7689 10.2803 10.0188 11.3488 8.91929C11.3623 8.90539 11.3791 8.88854 11.4202 8.84742L11.6869 8.58075Z" fill="#FAFDFF"/>
            </svg>
             {/* support logo on desktop viewport */}
             <svg className="hidden lg:flex" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M4.55004 15.4083V12.975C4.55004 12.1667 5.18337 11.4417 6.08337 11.4417C6.89171 11.4417 7.61671 12.075 7.61671 12.975V15.3167C7.61671 16.9417 6.26671 18.2917 4.64171 18.2917C3.01671 18.2917 1.66671 16.9333 1.66671 15.3167V10.1833C1.57504 5.50001 5.27504 1.70834 9.95837 1.70834C14.6417 1.70834 18.3334 5.50001 18.3334 10.0917V15.225C18.3334 16.85 16.9834 18.2 15.3584 18.2C13.7334 18.2 12.3834 16.85 12.3834 15.225V12.8833C12.3834 12.075 13.0167 11.35 13.9167 11.35C14.725 11.35 15.45 11.9833 15.45 12.8833V15.4083" stroke="#FAFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
             </svg>

             <span className="hidden lg:flex h-full items-center justify-center"><p>پشتیبانی</p></span>

          </button>
            {/* signup and login */}
            <button className="bg-blue-800 rounded-lg lg:rounded-xl w-9 h-9 md:h-10 md:w-10 lg:w-[8rem] lg:h-12 flex items-center justify-around px-1 text-Foam-50 font-semibold text-base">
            {/* signup logo on mobile viewport*/}
            <svg className="lg:hidden w-5 h-5" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.99998 0.333344C4.25108 0.333344 2.83331 1.75111 2.83331 3.50001C2.83331 5.24891 4.25108 6.66668 5.99998 6.66668C7.74888 6.66668 9.16665 5.24891 9.16665 3.50001C9.16665 1.75111 7.74888 0.333344 5.99998 0.333344Z" fill="#FAFDFF"/>
            <path d="M3.99998 7.66668C2.25108 7.66668 0.833313 9.08444 0.833313 10.8333C0.833313 12.5822 2.25108 14 3.99998 14H7.99998C9.74888 14 11.1666 12.5822 11.1666 10.8333C11.1666 9.08444 9.74888 7.66668 7.99998 7.66668H3.99998Z" fill="#FAFDFF"/>
            </svg>
            {/* signup logo on desktop viewport */}
            <svg className="hidden lg:flex" width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M16.1582 18.3333C16.1582 15.1083 12.9499 12.5 8.99989 12.5C5.04989 12.5 1.84155 15.1083 1.84155 18.3333M8.99989 9.99999C10.105 9.99999 11.1648 9.561 11.9462 8.7796C12.7276 7.9982 13.1666 6.93839 13.1666 5.83332C13.1666 4.72825 12.7276 3.66845 11.9462 2.88704C11.1648 2.10564 10.105 1.66666 8.99989 1.66666C7.89482 1.66666 6.83501 2.10564 6.05361 2.88704C5.27221 3.66845 4.83322 4.72825 4.83322 5.83332C4.83322 6.93839 5.27221 7.9982 6.05361 8.7796C6.83501 9.561 7.89482 9.99999 8.99989 9.99999Z" stroke="#FAFDFF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>


            <span className="hidden lg:flex h-full items-center justify-center"><p>ورود / ثبت نام</p></span>

            </button>
          </span>
              {/* content of nav in both view port */}
              <div className="flex justify-center items-center gap-x-8">
            <div className={`${nav ? 'w-full sm:w-2/4 ' : ''} w-0 overflow-hidden h-screen pt-12 lg:py-0 lg:h-fit lg:w-auto z-50 fixed lg:static bg-Foam-50 shadow-2xl lg:shadow-none right-0  bottom-0 duration-300`}>
                {/* container */}
                <div className="w-full h-full overflow-hidden">
                    {/* close menu icon */}
                  <div className="w-full lg:hidden mt-20 flex justify-end items-center px-10 md:px-16 mb-5">
                  <svg onClick={()=> setNav(!nav)} className="w-16 h-16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14 22.5C13.1716 22.5 12.5 23.1716 12.5 24C12.5 24.8284 13.1716 25.5 14 25.5L30 25.5L30 30C30 31.858 30 32.787 29.8769 33.5643C29.1992 37.8433 25.8433 41.1992 21.5643 41.8769C20.787 42 19.858 42 18 42C16.142 42 15.213 42 14.4357 41.8769C10.1567 41.1992 6.80083 37.8433 6.12311 33.5643C6 32.787 6 31.858 6 30L6 18C6 16.142 6 15.213 6.12312 14.4357C6.80083 10.1567 10.1567 6.80083 14.4357 6.12312C15.213 6 16.142 6 18 6C19.858 6 20.787 6 21.5643 6.12312C25.8433 6.80083 29.1992 10.1567 29.8769 14.4357C30 15.213 30 16.142 30 18L30 22.5L14 22.5ZM30 22.5L39.621 22.5C38.9661 21.8547 38.002 21.0875 36.594 19.9711L33.0681 17.1754C32.4189 16.6607 32.3099 15.7172 32.8246 15.0681C33.3393 14.4189 34.2828 14.3099 34.9319 14.8246L38.5295 17.6771C39.8745 18.7435 40.9843 19.6234 41.775 20.411C42.5863 21.2193 43.2589 22.1163 43.4415 23.2627C43.4804 23.5069 43.5 23.7532 43.5 24C43.5 24.2468 43.4804 24.4931 43.4415 24.7373C43.2589 25.8837 42.5863 26.7808 41.775 27.589C40.9843 28.3766 39.8745 29.2565 38.5295 30.3229L34.9319 33.1754C34.2828 33.6901 33.3393 33.5811 32.8246 32.9319C32.3099 32.2828 32.4189 31.3393 33.0681 30.8246L36.594 28.0289C38.002 26.9125 38.9661 26.1453 39.621 25.5L30 25.5L30 22.5Z" fill="#2150F5"/>
                  </svg>
                  </div>
                    {/* content of menu  */}
                    <div className="flex items-center gap-y-4 flex-col lg:flex-row-reverse w-full h-full lg:gap-x-5 overflow-hidden">
                      {/* main page icon */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="dynamicNav">صفحه اصلی</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600 dynamicSvgColor">
                          <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5.29367 2.96556C2.62685 4.90311 1.29344 5.87189 0.769737 7.30291C0.727726 7.41771 0.689938 7.534 0.656451 7.65157C0.239006 9.11711 0.748322 10.6846 1.76696 13.8197C2.78559 16.9547 3.2949 18.5222 4.49405 19.4625C4.59025 19.5379 4.68918 19.6098 4.79064 19.678C5.21729 19.9647 5.68756 20.1546 6.25 20.2805V16.8197C6.25 14.1963 8.37665 12.0697 11 12.0697C13.6234 12.0697 15.75 14.1963 15.75 16.8197V20.2805C16.3124 20.1546 16.7827 19.9647 17.2094 19.678C17.3108 19.6098 17.4098 19.5379 17.506 19.4625C18.7051 18.5222 19.2144 16.9547 20.2331 13.8197C21.2517 10.6846 21.761 9.11711 21.3436 7.65157C21.3101 7.534 21.2723 7.41771 21.2303 7.30291C20.7066 5.87189 19.3732 4.90312 16.7064 2.96557C14.0395 1.02801 12.7061 0.0592252 11.1833 0.00336104C11.0611 -0.00112035 10.9389 -0.00112035 10.8167 0.00336104C9.29389 0.0592251 7.96048 1.02801 5.29367 2.96556Z"/>
                          <path d="M14.25 20.4732V16.8197C14.25 15.0247 12.7949 13.5697 11 13.5697C9.20507 13.5697 7.75 15.0247 7.75 16.8197V20.4732C8.62296 20.5279 9.67917 20.5279 11 20.5279C12.3208 20.5279 13.377 20.5279 14.25 20.4732Z"/>
                          </svg>
                          </span>
                        </button>
                      </div>
                      {/* trading crypto */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="group p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="nav">خرید وفروش ارزدیجیتال</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600">
                            <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.0473 6.99343C11.1139 6.95499 11.1816 6.92044 11.2501 6.88969L11.2501 10.92C9.62302 10.2015 9.4706 7.90376 11.0473 6.99343Z"/>
                              <path d="M12.7501 17.1103L12.7501 13.08C14.3772 13.7984 14.5296 16.0962 12.9529 17.0066C12.8863 17.045 12.8186 17.0796 12.7501 17.1103Z"/>
                              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9548 2.25H12.0452C13.8818 2.24999 15.3214 2.24999 16.4635 2.37373C17.6291 2.50001 18.5734 2.76232 19.3798 3.34815C19.8679 3.70281 20.2972 4.13209 20.6518 4.62024C21.2377 5.42656 21.5 6.37094 21.6263 7.53648C21.75 8.67859 21.75 10.1182 21.75 11.9547V12.0453C21.75 13.8818 21.75 15.3214 21.6263 16.4635C21.5 17.6291 21.2377 18.5734 20.6518 19.3798C20.2972 19.8679 19.8679 20.2972 19.3798 20.6518C18.5734 21.2377 17.6291 21.5 16.4635 21.6263C15.3214 21.75 13.8818 21.75 12.0453 21.75H11.9547C10.1182 21.75 8.67859 21.75 7.53648 21.6263C6.37094 21.5 5.42656 21.2377 4.62024 20.6518C4.13209 20.2972 3.70281 19.8679 3.34815 19.3798C2.76232 18.5734 2.50001 17.6291 2.37373 16.4635C2.24999 15.3214 2.24999 13.8818 2.25 12.0452V11.9548C2.24999 10.1182 2.24999 8.67861 2.37373 7.53648C2.50001 6.37094 2.76232 5.42656 3.34815 4.62024C3.70281 4.13209 4.13209 3.70281 4.62024 3.34815C5.42656 2.76232 6.37094 2.50001 7.53648 2.37373C8.67861 2.24999 10.1182 2.24999 11.9548 2.25ZM12.7501 5C12.7501 4.58579 12.4143 4.25 12.0001 4.25C11.5858 4.25 11.2501 4.58579 11.2501 5V5.30807C10.9233 5.39005 10.6026 5.51813 10.2973 5.69439C7.57547 7.26586 7.92142 11.2989 10.8712 12.3839L11.2501 12.5233L11.2501 17.2195C10.7152 17.0686 10.2373 16.717 9.93805 16.1988L9.56248 15.5483C9.35538 15.1895 8.89668 15.0666 8.53796 15.2737C8.17924 15.4808 8.05634 15.9395 8.26344 16.2983L8.63901 16.9488C9.21748 17.9507 10.1927 18.5796 11.2501 18.7535L11.2501 19C11.2501 19.4142 11.5858 19.75 12 19.75C12.4143 19.75 12.7501 19.4142 12.7501 19L12.7501 18.692C13.0769 18.61 13.3975 18.4819 13.7029 18.3056C16.4247 16.7341 16.0788 12.7011 13.1291 11.6161L12.7501 11.4767L12.7501 6.78053C13.285 6.93138 13.7629 7.28298 14.0622 7.80125L14.4377 8.45175C14.6448 8.81047 15.1035 8.93337 15.4622 8.72626C15.821 8.51916 15.9439 8.06047 15.7368 7.70175L15.3612 7.05125C14.7827 6.04928 13.8074 5.42033 12.7501 5.2465V5Z"/>
                            </svg>
                          </span>
                        </button>
                       </div>
                      {/* online price */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="group p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="nav">قیمت های آنلاین</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600">
                          <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0453 2.25C13.8818 2.24999 15.3214 2.24999 16.4635 2.37373C17.6291 2.50001 18.5734 2.76232 19.3798 3.34815C19.8679 3.70281 20.2972 4.13209 20.6518 4.62024C21.2377 5.42656 21.5 6.37094 21.6263 7.53648C21.75 8.67859 21.75 10.1182 21.75 11.9547V12.0453C21.75 13.8818 21.75 15.3214 21.6263 16.4635C21.5 17.6291 21.2377 18.5734 20.6518 19.3798C20.2972 19.8679 19.8679 20.2972 19.3798 20.6518C18.5734 21.2377 17.6291 21.5 16.4635 21.6263C15.3214 21.75 13.8818 21.75 12.0453 21.75H11.9547C10.1182 21.75 8.67859 21.75 7.53648 21.6263C6.37094 21.5 5.42656 21.2377 4.62024 20.6518C4.13209 20.2972 3.70281 19.8679 3.34815 19.3798C2.76232 18.5734 2.50001 17.6291 2.37373 16.4635C2.24999 15.3214 2.24999 13.8818 2.25 12.0453V11.9548C2.24999 10.1182 2.24999 8.67861 2.37373 7.53648C2.50001 6.37094 2.76232 5.42656 3.34815 4.62024C3.70281 4.13209 4.13209 3.70281 4.62024 3.34815C5.42656 2.76232 6.37094 2.50001 7.53648 2.37373C8.67861 2.24999 10.1182 2.24999 11.9547 2.25H12.0453ZM12.75 7C12.75 6.58579 12.4142 6.25 12 6.25C11.5858 6.25 11.25 6.58579 11.25 7V17C11.25 17.4142 11.5858 17.75 12 17.75C12.4142 17.75 12.75 17.4142 12.75 17V7ZM16.75 11C16.75 10.5858 16.4142 10.25 16 10.25C15.5858 10.25 15.25 10.5858 15.25 11V17C15.25 17.4142 15.5858 17.75 16 17.75C16.4142 17.75 16.75 17.4142 16.75 17V11ZM8.75 13C8.75 12.5858 8.41421 12.25 8 12.25C7.58579 12.25 7.25 12.5858 7.25 13V17C7.25 17.4142 7.58579 17.75 8 17.75C8.41421 17.75 8.75 17.4142 8.75 17V13Z"/>
                          </svg>
                          </span>
                        </button>
                       </div>
                      {/* learn */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="group p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="nav">آموزش</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600">
                          <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.4099 19.5009C12.9957 19.5009 12.6599 19.8367 12.6599 20.2509C12.6599 20.6651 12.9957 21.0009 13.4099 21.0009H19.4099C19.8241 21.0009 20.1599 20.6651 20.1599 20.2509C20.1599 19.8367 19.8241 19.5009 19.4099 19.5009H13.4099Z"/>
                            <path d="M14.2039 4.57541L14.294 4.62741C15.0721 5.07662 15.721 5.45121 16.1961 5.81786C16.6976 6.20485 17.0956 6.64905 17.2623 7.27123C17.429 7.89341 17.3064 8.47711 17.0656 9.063C16.8985 9.46966 16.6527 9.92665 16.3566 10.4479L15.7213 10.0703L15.7131 10.0655L8.78779 6.06719L8.14014 5.68548C8.44023 5.17439 8.71061 4.73786 8.97681 4.39291C9.3638 3.89143 9.808 3.4934 10.4302 3.32669C11.0524 3.15997 11.6361 3.28258 12.222 3.52338C12.777 3.75151 13.4259 4.12615 14.2039 4.57541Z"/>
                            <path d="M7.38872 6.98375L3.91075 13.0077C3.61296 13.5225 3.3775 13.9295 3.29026 14.3925C3.20303 14.8555 3.27421 15.3204 3.36424 15.9082L3.3885 16.0671C3.55469 17.1585 3.69167 18.058 3.89827 18.7402C4.11434 19.4536 4.44649 20.0712 5.09977 20.4483C5.75304 20.8255 6.4539 20.8044 7.17979 20.6348C7.87385 20.4726 8.72139 20.1415 9.74962 19.7397L9.89936 19.6813C10.4535 19.4653 10.8916 19.2945 11.249 18.9875C11.6064 18.6804 11.8411 18.273 12.1381 17.7577L15.6078 11.7478L14.959 11.3622L8.02905 7.36118L7.38872 6.98375Z"/>
                           </svg>
                          </span>
                        </button>
                       </div>
                      {/* blog */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="group p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="nav">وبلاگ</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600">
                          <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_117_11194)">
                            <path d="M3.90932 1.70878C9.25925 0.736069 14.7407 0.736069 20.0907 1.70878C22.2097 2.09406 23.75 3.93965 23.75 6.09342V14.4283C23.75 17.3011 21.2153 19.5136 18.3689 19.1255C16.504 18.8712 14.6277 18.7291 12.75 18.6992V21.584C13.3744 21.6277 13.9959 21.7259 14.6073 21.8788L16.1819 22.2724C16.5837 22.3729 16.8281 22.7801 16.7276 23.1819C16.6271 23.5838 16.2199 23.8281 15.8181 23.7277L14.2435 23.334C13.507 23.1499 12.7535 23.0578 12 23.0578C11.2465 23.0578 10.493 23.1499 9.75655 23.334L8.1819 23.7277C7.78006 23.8281 7.37285 23.5838 7.27239 23.1819C7.17193 22.7801 7.41625 22.3729 7.8181 22.2724L9.39274 21.8788C10.0041 21.7259 10.6256 21.6277 11.25 21.584V18.6992C9.37234 18.7291 7.49602 18.8712 5.63113 19.1255C2.78473 19.5136 0.25 17.3011 0.25 14.4283V6.09342C0.25 3.93965 1.79028 2.09406 3.90932 1.70878Z"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_117_11194">
                            <rect width="24" height="24" fill="white"/>
                            </clipPath>
                            </defs>
                          </svg>
                          </span>
                        </button>
                       </div>
                      {/* contact us */}
                      <div className="w-3/5 lg:w-auto">
                        <button className="group p-4 h-full w-full flex items-start justify-end pr-4 lg:pr-0 md:pr-8 gap-x-3">
                          <p className="nav">ارتباط با ما</p>
                          <span className="lg:hidden mt-0.5 h-full flex mb-1 text-Foam-600">
                          <svg className="w-6 h-6 fill-current group-hover:text-BlueRibbon-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.397 3.89454C11.457 3.70182 12.543 3.70182 13.603 3.89454C18.3658 4.76051 21.5798 9.25273 20.8617 14.0401L20.8535 14.0946C19.4028 14.1708 18.25 15.3711 18.25 16.8408V18.8408C18.25 20.3596 19.4812 21.5908 21 21.5908C22.5188 21.5908 23.75 20.3596 23.75 18.8408V16.8408C23.75 15.7999 23.1721 14.8952 22.3203 14.4281L22.3451 14.2626C23.1834 8.67386 19.4314 3.42967 13.8713 2.41873C12.6339 2.19376 11.3661 2.19376 10.1287 2.41873C4.56859 3.42967 0.816569 8.67386 1.65488 14.2626L1.67971 14.4281C0.827854 14.8952 0.25 15.7999 0.25 16.8408V18.8408C0.25 20.3596 1.48122 21.5908 3 21.5908C4.51878 21.5908 5.75 20.3596 5.75 18.8408V16.8408C5.75 15.3711 4.59716 14.1708 3.14647 14.0946L3.13829 14.0401C2.42018 9.25273 5.63419 4.76051 10.397 3.89454Z"/>
                            <path d="M7.53033 13.3105C7.23744 13.0176 6.76256 13.0176 6.46967 13.3105C6.17678 13.6034 6.17678 14.0782 6.46967 14.3711L6.86967 14.7711C6.93136 14.8328 6.9566 14.8581 6.97686 14.8789C8.57962 16.5283 8.57962 19.1533 6.97686 20.8027C6.9566 20.8235 6.93136 20.8488 6.86967 20.9105L6.46967 21.3105C6.17678 21.6034 6.17678 22.0782 6.46967 22.3711C6.76256 22.664 7.23744 22.664 7.53033 22.3711L7.93574 21.9657C7.9904 21.9111 8.02394 21.8775 8.0526 21.848C10.221 19.6166 10.221 16.065 8.0526 13.8336C8.02388 13.804 7.99048 13.7706 7.93563 13.7158L7.53033 13.3105Z"/>
                            <path d="M17.5303 14.3711C17.8232 14.0782 17.8232 13.6034 17.5303 13.3105C17.2374 13.0176 16.7626 13.0176 16.4697 13.3105L16.0644 13.7157C16.0095 13.7706 15.9761 13.804 15.9474 13.8336C13.779 16.065 13.779 19.6166 15.9474 21.848C15.9761 21.8776 16.0095 21.9109 16.0643 21.9658L16.4697 22.3711C16.7626 22.664 17.2374 22.664 17.5303 22.3711C17.8232 22.0782 17.8232 21.6034 17.5303 21.3105L17.1303 20.9105C17.0686 20.8488 17.0434 20.8235 17.0231 20.8027C15.4204 19.1533 15.4204 16.5283 17.0231 14.8789C17.0434 14.8581 17.0686 14.8328 17.1303 14.7711L17.5303 14.3711Z"/>
                          </svg>
                          </span>
                        </button>
                       </div>
                    </div>

                </div>
            </div>
        {/* logo brand*/}
          <span className="flex items-center justify-center flex-1 lg:flex-none">

            <svg className="w-24 lg:w-28" viewBox="0 0 78 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0.835631 28.0374C1.8303 29.3163 3.66145 29.5727 4.96913 28.6162L8.64789 25.9254C9.17216 25.542 9.48203 24.9314 9.48203 24.2819V22.4703C9.48203 21.5087 10.6774 20.9713 11.6391 20.9713L12.0925 19.6781C12.3223 19.0227 12.3173 18.3079 12.0784 17.6559L11.6026 16.3576C10.4342 16.3576 9.48203 15.3989 9.48203 14.1706V10.558C9.48203 9.04604 8.05993 7.93743 6.59367 8.30636C5.56174 8.56601 4.83839 9.49391 4.83839 10.558V21.4714C4.83839 22.3514 4.45155 23.1868 3.78052 23.7561L0 26.963L0.835631 28.0374Z" fill="#F53A21"/>
            <path d="M11.6325 20.9713C12.3789 20.9713 13.0879 20.8431 13.746 20.6137C15.2349 20.0948 17.0133 20.1012 18.5037 20.6159C18.6667 20.6721 18.8328 20.7223 19.0018 20.7659C19.9505 21.0107 20.8372 20.3523 21.1614 19.4277C21.3347 18.9336 21.3347 18.3952 21.1614 17.9011C20.8372 16.9765 19.8488 16.4488 19.1285 15.7846C18.6984 15.388 18.4332 14.8166 18.4332 14.1706V10.5249C18.4332 9.02701 17.028 7.92636 15.5737 8.2852C14.5435 8.53942 13.8195 9.4637 13.8195 10.5249V14.1706C13.8195 15.3989 12.8309 16.3576 11.6325 16.3576H11.6026L12.0784 17.6559C12.3173 18.3079 12.3223 19.0227 12.0925 19.6781L11.6391 20.9713H11.6325ZM7.86422 2.7712C7.86422 3.75568 8.6623 4.55376 9.64678 4.55376H16.8604C17.8448 4.55376 18.6429 3.75568 18.6429 2.7712C18.6429 1.78673 17.8448 0.988647 16.8604 0.988647H9.64678C8.6623 0.988647 7.86422 1.78673 7.86422 2.7712Z" fill="#F53A21"/>
            <path d="M20.093 19.1885C20.402 20.2451 21.3709 20.9713 22.4718 20.9713C23.2159 20.9713 23.928 20.8439 24.5883 20.6159C26.0787 20.1012 27.8571 20.0948 29.346 20.6137C30.0041 20.8431 30.7131 20.9713 31.4595 20.9713L32.2059 18.7243L32.5172 16.3576C31.3188 16.3576 29.2725 15.3989 29.2725 14.1706V10.5249C29.2725 9.02701 27.8672 7.92636 26.413 8.2852C25.3827 8.53942 24.6588 9.4637 24.6588 10.5249V14.1706C24.6588 15.3989 23.6702 16.3576 22.4718 16.3576H22.045C21.183 16.3576 20.4101 16.8883 20.1006 17.6928C19.9366 18.119 19.9172 18.5873 20.0454 19.0256L20.093 19.1885ZM20.7641 25.7497C20.7641 26.7342 21.5622 27.5323 22.5467 27.5323H23.7637C24.4401 27.5323 24.9884 28.0806 24.9884 28.7569C24.9884 29.5877 25.798 30.1773 26.5887 29.9225L27.3569 29.6749C28.1058 29.4335 28.6134 28.7366 28.6134 27.9497V26.963C28.6134 25.3085 27.2721 23.9672 25.6175 23.9672H22.5467C21.5622 23.9672 20.7641 24.7652 20.7641 25.7497Z" fill="#1635A3"/>
            <path d="M31.4595 20.9713H32.5172H33.5657C37.3106 20.9713 40.3664 17.9154 40.3664 14.1706V10.5249C40.3664 9.02701 38.9612 7.92636 37.5069 8.2852C36.4767 8.53942 35.7527 9.4637 35.7527 10.5249V14.1706C35.7527 15.3989 34.7641 16.3576 33.5657 16.3576H32.5172L32.2059 18.7243L31.4595 20.9713ZM31.2289 25.7347C31.2289 26.7275 32.0337 27.5323 33.0265 27.5323H37.3406C38.3333 27.5323 39.1381 26.7275 39.1381 25.7347C39.1381 24.742 38.3333 23.9372 37.3406 23.9372H33.0265C32.0337 23.9372 31.2289 24.742 31.2289 25.7347Z" fill="#1635A3"/>
            <path d="M41.4682 26.1106C42.3847 27.4907 44.2473 27.8649 45.6257 26.946L47.1746 25.9134C47.7351 25.5397 48.0717 24.9107 48.0717 24.2372V21.8417C48.0717 21.1353 49.291 20.7266 49.9737 20.9081C50.3215 21.0006 50.3085 20.7439 50.4276 20.4043L51.0377 18.6644L50.1812 16.1029C49.8067 15.7284 48.0717 15.3989 48.0717 14.1706V10.558C48.0717 9.04604 46.6496 7.93743 45.1834 8.30636C44.1514 8.56601 43.4281 9.49391 43.4281 10.558V21.2646C43.4281 22.2612 42.9326 23.1925 42.1061 23.7493L40.582 24.776L41.4682 26.1106Z" fill="#1635A3"/>
            <path d="M50.2222 20.9713H70.7441C74.489 20.9713 77.5747 17.9154 77.5747 14.1706C77.5747 10.4257 74.489 7.39986 70.7441 7.39986H60.1686L64.0391 4.68329C65.057 3.96885 65.2701 2.54808 64.5066 1.56644C63.8164 0.678975 62.5637 0.463511 61.6166 1.06935L53.0951 6.52037C52.2384 7.06833 51.7202 8.0151 51.7202 9.032C51.7202 10.6787 53.055 12.0135 54.7017 12.0135H70.7441C71.9424 12.0135 72.9311 12.9722 72.9311 14.1706C72.9311 15.3989 71.9424 16.3576 70.7441 16.3576L50.1812 16.1029L50.5557 17.2264L51.0377 18.6644L50.2222 20.9713Z" fill="#1635A3"/>
            </svg>

          </span>
          </div>
            {/* mobile icon menu */}
          <span onClick={()=> setNav(!nav)} className="lg:hidden flex justify-center items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 stroke-BlueRibbon-700">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>

        </div>
      </nav>
    </>
  );
};

export default NavBar;
