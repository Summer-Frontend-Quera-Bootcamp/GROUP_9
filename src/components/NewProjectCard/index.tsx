//import React from "react";
interface INewProjectCard {
  newProjectColor:
    | "Cyan"
    | "Red"
    | "Teal"
    | "Pink"
    | "Brand"
    | "Grape"
    | "Green"
    | "Violet"
    | "Lime"
    | "Indigo"
    | "Yellow"
    | "Blue"
    | "Orange";
}
const plusIcon = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="24" height="24" fill="#1E1E1E" />
    <g id="Main Pages">
      <path
        d="M-5379 -3505C-5379 -3506.1 -5378.1 -3507 -5377 -3507H2050C2051.1 -3507 2052 -3506.1 2052 -3505V5981C2052 5982.1 2051.1 5983 2050 5983H-5377C-5378.1 5983 -5379 5982.1 -5379 5981V-3505Z"
        fill="#404040"
      />
      <g id="WorkSpaces" clip-path="url(#clip0_0_1)">
        <rect
          width="1440"
          height="1024"
          transform="translate(-1022 -572)"
          fill="white"
        />
        <g id="Frame 277">
          <g id="Frame 287">
            <g id="Frame 286">
              <g id="Frame 278">
                <g id="Interface, Essential/Plus, Add">
                  <g id="Group">
                    <g id="Group_2">
                      <path
                        id="Path"
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M18 20.0002H6C4.895 20.0002 4 19.1052 4 18.0002V6.00018C4 4.89518 4.895 4.00018 6 4.00018H18C19.105 4.00018 20 4.89518 20 6.00018V18.0002C20 19.1052 19.105 20.0002 18 20.0002Z"
                        stroke="#FA5252"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Path_2"
                        d="M12 8.00018V16.0002"
                        stroke="#FA5252"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        id="Path_3"
                        d="M16 12.0002H8"
                        stroke="#FA5252"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </g>
                </g>
                <path
                  d="M-138 -25.9998H30C37.732 -25.9998 44 -19.7318 44 -11.9998V36.0002C44 43.7322 37.732 50.0002 30 50.0002H-138C-145.732 50.0002 -152 43.7322 -152 36.0002V-11.9998C-152 -19.7318 -145.732 -25.9998 -138 -25.9998Z"
                  stroke="url(#paint0_linear_0_1)"
                  stroke-width="4"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
      <path
        d="M-5377 -3506H2050V-3508H-5377V-3506ZM2051 -3505V5981H2053V-3505H2051ZM2050 5982H-5377V5984H2050V5982ZM-5378 5981V-3505H-5380V5981H-5378ZM-5377 5982C-5377.55 5982 -5378 5981.55 -5378 5981H-5380C-5380 5982.66 -5378.66 5984 -5377 5984V5982ZM2051 5981C2051 5981.55 2050.55 5982 2050 5982V5984C2051.66 5984 2053 5982.66 2053 5981H2051ZM2050 -3506C2050.55 -3506 2051 -3505.55 2051 -3505H2053C2053 -3506.66 2051.66 -3508 2050 -3508V-3506ZM-5377 -3508C-5378.66 -3508 -5380 -3506.66 -5380 -3505H-5378C-5378 -3505.55 -5377.55 -3506 -5377 -3506V-3508Z"
        fill="white"
        fill-opacity="0.1"
      />
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_0_1"
        x1="46"
        y1="-27.9998"
        x2="-102.36"
        y2="108.236"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#FA5252" />
        <stop offset="1" stop-color="#FA5252" stop-opacity="0.5" />
      </linearGradient>
      <clipPath id="clip0_0_1">
        <rect
          width="1440"
          height="1024"
          fill="white"
          transform="translate(-1022 -572)"
        />
      </clipPath>
    </defs>
  </svg>
);
const NewProjectCard = ({ newProjectColor }: INewProjectCard) => {
  return (
    <>
      {newProjectColor === "Cyan" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#15AABF] to-[#15AABF80] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Cyan-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Red" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FA5252] to-[#FA525280] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Red-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Teal" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#12B886] to-[#12B88680] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Teal-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Pink" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#E64980] to-[#E6498080] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Pink-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Brand" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#208D8E] to-[#208D8E80] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Brand-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Grape" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#BE4BDB] to-[#BE4BDB80] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Grape-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Green" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#40C057] to-[#40C05780] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Green-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Violet" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#7950F2] to-[#7950F280] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Violet-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Lime" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#82C91E] to-[#82C91E80] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Lime-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Indigo" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#4C6EF5] to-[#4C6EF580] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Indigo-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Yellow" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FAB005] to-[#FAB00580] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          {" "}
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Yellow-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Blue" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#228BE6] to-[#228BE680] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          {" "}
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Blue-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
      {newProjectColor === "Orange" && (
        <div className="shadow-projectCart bg-gradient-to-l from-[#FD7E14] to-[#FD7E1480] flex justify-center w-[200px] h-[80px] items-center mx-auto p-[4px] w-3 h-3  rounded-[16px] ">
          {" "}
          <div className="h-full w-full bg-White rounded-[12px] flex justify-center items-center">
            <div>{plusIcon}</div>
            <div className=" font-IranYekan800 text-BoldM text-Orange-Primary">
              ساختن پروژه جدید
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NewProjectCard;
