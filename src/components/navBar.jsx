const NavBar = () => {
  return (
    <>
      <div className="w-full px-1 lg:px-3 py-2 bg-gray-200">
        <div className="w-full bg-Foam-50 h-14 lg:h-20 border rounded-xl flex items-center justify-between px-3 lg:px-8">
         {/* 2 button signUp  and support*/}
          <span className="flex gap-x-2">
            {/* support */}
            <button className="bg-Pomegranate-500 rounded-lg lg:rounded-xl w-9 h-9 lg:w-[8rem] lg:h-12 flex items-center justify-around px-1 text-Foam-50 font-semibold text-base">
            {/* support logo on mobile viewport */}
            <svg className="lg:hidden" width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
            <button className="bg-blue-800 rounded-lg lg:rounded-xl h-9 w-9 lg:w-[8rem] lg:h-12 flex items-center justify-around px-1 text-Foam-50 font-semibold text-base">
            {/* signup logo on mobile viewport*/}
            <svg className="lg:hidden" width="12" height="14" viewBox="0 0 12 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
          {/* content of nav in desktop */}
            <div className="hidden lg:flex flex-row-reverse text-sm xl:text-base text-Foam-600 flex-1 lg:pr-1 xl:pr-4 font-medium">
                <a className="nav dynamicNav">صفحه اصلی</a>
                <a className="nav">خرید وفروش ارزدیجیتال</a>
                <a className="nav">قیمت های آنلاین</a>
                <a className="nav">مقالات آموزشی</a>
                <a className="nav">وبلاگ</a>
                <a className="nav">ارتباط باما</a>
            </div>
        {/* logo */}
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
            {/* mobile icon menu */}
          <span className="lg:hidden flex justify-center items-center pl-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7 stroke-BlueRibbon-700">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </span>

        </div>
      </div>
    </>
  );
};

export default NavBar;
