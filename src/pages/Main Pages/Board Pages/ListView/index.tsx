// <======== Code-Files ========> //

// <======== Component-Files ========> //
import { useState } from "react";

interface IListVeiwprops extends React.PropsWithChildren {}

const ListView: React.FC<IListVeiwprops> = ({}): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string>("نمایش لیستی");

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  const normalListIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M11 12H21"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M6.41399 10.586C7.19499 11.367 7.19499 12.633 6.41399 13.414C5.63299 14.195 4.36699 14.195 3.58599 13.414C2.80499 12.633 2.80499 11.367 3.58599 10.586C4.36699 9.80499 5.63299 9.80499 6.41399 10.586"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_3"
            d="M11 5H21"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_4"
            d="M3.02002 4.508L4.67302 5.996L8.00002 3"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_5"
            d="M11 19H21"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_6"
            d="M6.41399 17.586C7.19499 18.367 7.19499 19.633 6.41399 20.414C5.63299 21.195 4.36699 21.195 3.58599 20.414C2.80499 19.633 2.80499 18.367 3.58599 17.586C4.36699 16.805 5.63299 16.805 6.41399 17.586"
            stroke="#323232"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
  const activeListIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 12H21"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.414 10.586C7.195 11.367 7.195 12.633 6.414 13.414C5.633 14.195 4.367 14.195 3.586 13.414C2.805 12.633 2.805 11.367 3.586 10.586C4.367 9.80499 5.633 9.80499 6.414 10.586"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 5H21"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3.02 4.508L4.673 5.996L8 3"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M11 19H21"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M6.414 17.586C7.195 18.367 7.195 19.633 6.414 20.414C5.633 21.195 4.367 21.195 3.586 20.414C2.805 19.633 2.805 18.367 3.586 17.586C4.367 16.805 5.633 16.805 6.414 17.586"
        stroke="#208D8E"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const normalBoardIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M15 21.0001V9.06006"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 9.06006H11C9.89543 9.06006 9 9.95549 9 11.0601V21.0001"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M21 15.0601H9"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const activeBoardIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <path
          id="Path"
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3 6V18C3 19.6569 4.34315 21 6 21H18C19.6569 21 21 19.6569 21 18V6C21 4.34315 19.6569 3 18 3H6C4.34315 3 3 4.34315 3 6Z"
          stroke="#208D8E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_2"
          d="M15 21.0001V9.06006"
          stroke="#208D8E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_3"
          d="M21 9.06006H11C9.89543 9.06006 9 9.95549 9 11.0601V21.0001"
          stroke="#208D8E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          id="Path_4"
          d="M21 15.0601H9"
          stroke="#208D8E"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
    </svg>
  );
  const normalCalenderIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16 2V6"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M8 2V6"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M3 9H21"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.013 12.729C6.875 12.729 6.763 12.841 6.764 12.979C6.764 13.117 6.876 13.229 7.014 13.229C7.152 13.229 7.264 13.117 7.264 12.979C7.264 12.841 7.152 12.729 7.013 12.729"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.013 12.729C11.875 12.729 11.763 12.841 11.764 12.979C11.764 13.117 11.876 13.229 12.014 13.229C12.152 13.229 12.264 13.117 12.264 12.979C12.264 12.841 12.152 12.729 12.013 12.729"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.013 12.729C16.875 12.729 16.763 12.841 16.764 12.979C16.764 13.117 16.876 13.229 17.014 13.229C17.152 13.229 17.264 13.117 17.264 12.979C17.264 12.841 17.152 12.729 17.013 12.729"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M7.013 16.729C6.875 16.729 6.763 16.841 6.764 16.979C6.764 17.117 6.876 17.229 7.014 17.229C7.152 17.229 7.264 17.117 7.264 16.979C7.264 16.841 7.152 16.729 7.013 16.729"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M12.013 16.729C11.875 16.729 11.763 16.841 11.764 16.979C11.764 17.117 11.876 17.229 12.014 17.229C12.152 17.229 12.264 17.117 12.264 16.979C12.264 16.841 12.152 16.729 12.013 16.729"
        stroke="#323232"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
  const activeCalenderIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="Group">
        <g id="Group_2">
          <path
            id="Path"
            d="M16 2V6"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_2"
            d="M8 2V6"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_3"
            d="M3 9H21"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_4"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19 4H5C3.895 4 3 4.895 3 6V19C3 20.105 3.895 21 5 21H19C20.105 21 21 20.105 21 19V6C21 4.895 20.105 4 19 4Z"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_5"
            d="M7.01304 12.729C6.87504 12.729 6.76304 12.841 6.76404 12.979C6.76404 13.117 6.87604 13.229 7.01404 13.229C7.15204 13.229 7.26404 13.117 7.26404 12.979C7.26404 12.841 7.15204 12.729 7.01304 12.729"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_6"
            d="M12.013 12.729C11.875 12.729 11.763 12.841 11.764 12.979C11.764 13.117 11.876 13.229 12.014 13.229C12.152 13.229 12.264 13.117 12.264 12.979C12.264 12.841 12.152 12.729 12.013 12.729"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_7"
            d="M17.013 12.729C16.875 12.729 16.763 12.841 16.764 12.979C16.764 13.117 16.876 13.229 17.014 13.229C17.152 13.229 17.264 13.117 17.264 12.979C17.264 12.841 17.152 12.729 17.013 12.729"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_8"
            d="M7.01304 16.729C6.87504 16.729 6.76304 16.841 6.76404 16.979C6.76404 17.117 6.87604 17.229 7.01404 17.229C7.15204 17.229 7.26404 17.117 7.26404 16.979C7.26404 16.841 7.15204 16.729 7.01304 16.729"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            id="Path_9"
            d="M12.013 16.729C11.875 16.729 11.763 16.841 11.764 16.979C11.764 17.117 11.876 17.229 12.014 17.229C12.152 17.229 12.264 17.117 12.264 16.979C12.264 16.841 12.152 16.729 12.013 16.729"
            stroke="#208D8E"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
      </g>
    </svg>
  );
  return (
    <>
      <div className="flex">
        <div className="w-1/4">replace your sidebar here</div>
        <div className="w-3/4 justify-between pl-[50px]">
          <nav className="flex items-center justify-between w-full mt-xl mb-s pr-s py-s border-b  border-GrayLight">
            <ul className="flex items-center justify-between divide-x gap-s ">
              <h2 className="text-black font-IranYekan800 HeadingXS leading-5  ">
                پروژه اول
              </h2>
              <div className="border-x h-[22px] w-[1px]"></div>

              <li
                className={`flex items-center justify-between pl-s gap-[5px] cursor-pointer`}
                onClick={() => handleItemClick("نمایش لیستی")}
              >
                {activeItem === "نمایش لیستی" ? activeListIcon : normalListIcon}

                <p
                  className={`font-IranYekan500 leading-normal text-BodyM ${
                    activeItem === "نمایش لیستی"
                      ? "text-Brand-Primary"
                      : "text-Black2"
                  }`}
                >
                  نمایش لیستی
                </p>
              </li>
              <li
                className={`flex items-center justify-between pl-s gap-[5px] cursor-pointer`}
                onClick={() => handleItemClick("نمایش ستونی")}
              >
                {activeItem === "نمایش ستونی"
                  ? activeBoardIcon
                  : normalBoardIcon}
                <p
                  className={`font-IranYekan500 leading-normal text-BodyM ${
                    activeItem === "نمایش ستونی"
                      ? "text-Blue-Primary"
                      : "text-Black2"
                  }`}
                >
                  نمایش ستونی
                </p>
              </li>
              <li
                className={`flex items-center justify-between pl-s gap-[5px] cursor-pointer`}
                onClick={() => handleItemClick("تقویم")}
              >
                {activeItem === "تقویم"
                  ? activeCalenderIcon
                  : normalCalenderIcon}
                <p
                  className={`font-IranYekan500 leading-normal text-BodyM ${
                    activeItem === "تقویم" ? "text-Blue-Primary" : "text-Black2"
                  }`}
                >
                  تقویم
                </p>
              </li>
            </ul>
            <div className="flex items-center justify-between cursor-pointer">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.53 7.52002L9.46997 10.56"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4048 4.64228C17.1984 5.43582 17.1984 6.72242 16.4048 7.51596C15.6113 8.3095 14.3247 8.3095 13.5311 7.51596C12.7376 6.72241 12.7376 5.43582 13.5311 4.64228C14.3247 3.84873 15.6113 3.84873 16.4048 4.64228"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.53 16.4802L9.46997 13.4402"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.4048 16.4843C17.1984 17.2779 17.1984 18.5645 16.4048 19.358C15.6113 20.1515 14.3247 20.1515 13.5311 19.358C12.7376 18.5645 12.7376 17.2779 13.5311 16.4843C14.3247 15.6908 15.6113 15.6908 16.4048 16.4843"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.46542 10.5648C10.2582 11.3576 10.2582 12.6429 9.46542 13.4356C8.67266 14.2284 7.38733 14.2284 6.59457 13.4356C5.80181 12.6429 5.80181 11.3575 6.59457 10.5648C7.38734 9.77202 8.67266 9.77202 9.46542 10.5648"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <p className="font-IranYekan500 leading-normal text-BodyM text-Black2">
                اشتراک‌گذاری
              </p>
            </div>
          </nav>
          {/* <Filter></Filter> */}
          <div className="flex items-center gap-s pb-s pr-s border-b border-GrayLight w-full">
            <div className="relative">
              <input
                className=" pr-m align-middle placeholder:align-middle outline-none  placeholder:font-IranYekan400 placeholder:text-GrayLight2 placeholder:text-BodyXS"
                placeholder="جستجو بین تسک‌ها"
              ></input>
              <svg
                className="absolute top-[4px]"
                width="24"
                height="25"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="11.0586"
                  cy="11.5587"
                  r="7.06194"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.0033 20.5034L16.0517 16.5518"
                  stroke="#323232"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
            <div className="flex border-r pr-xl items-center justify-between gap-s">
              <div className="flex items-center justify-between gap-[5px] cursor-pointer">
                <svg
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.12132 5.37877C9.29289 6.55034 9.29289 8.44984 8.12132 9.62141C6.94975 10.793 5.05025 10.793 3.87868 9.62141C2.70711 8.44984 2.70711 6.55034 3.87868 5.37877C5.05025 4.2072 6.94975 4.2072 8.12132 5.37877"
                    stroke="#323232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20 7.50009H9"
                    stroke="#323232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M20.1213 15.3788C21.2929 16.5504 21.2929 18.4499 20.1213 19.6214C18.9497 20.793 17.0502 20.793 15.8787 19.6214C14.7071 18.4499 14.7071 16.5504 15.8787 15.3788C17.0502 14.2072 18.9497 14.2072 20.1213 15.3788"
                    stroke="#323232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M4 17.5001H15"
                    stroke="#323232"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                <p>فیلترها</p>
              </div>
              <div className="flex items-center justify-center bg-Blue-Secondary py-[6px] px-[12px] rounded ">
                <p className="text-Blue-Primary font-IranYekan400 text-BodyXS">
                  دسته‌بندی‌شده با: وضعیت
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListView;
