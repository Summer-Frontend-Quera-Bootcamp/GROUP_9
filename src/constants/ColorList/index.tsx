export interface ColorListValue {
  name: string;
  textPrimary: string;
  textSecondary: string;
  bgPrimary: string;
  bgSecondary: string;
  primaryColorCode: string;
  secondaryColorCode: string;
  gradient: string;
  hover: string;
}

export const ColorList = new Map<string, ColorListValue>();

ColorList.set("Cyan", {
  name: "Cyan",
  textPrimary: "text-Cyan-Primary",
  textSecondary: "text-Cyan-Secondary",
  bgPrimary: "bg-Cyan-Primary",
  bgSecondary: "bg-Cyan-Secondary",
  primaryColorCode: "#15AABF",
  secondaryColorCode: "#C5F6FA",
  gradient: "from-[#15AABF] to-[#15AABF80]",
  hover: "hover:bg-[#139aad]",
});

ColorList.set("Red", {
  name: "Red",
  textPrimary: "text-Red-Primary",
  textSecondary: "text-Red-Secondary",
  bgPrimary: "bg-Red-Primary",
  bgSecondary: "bg-Red-Secondary",
  primaryColorCode: "#FA5252",
  secondaryColorCode: "FFE3E3",
  gradient: "from-[#FA5252] to-[#FA525280]",
  hover: "hover:bg-[#f93f3f]",
});

ColorList.set("Teal", {
  name: "Teal",
  textPrimary: "text-Teal-Primary",
  textSecondary: "text-Teal-Secondary",
  bgPrimary: "bg-Teal-Primary",
  bgSecondary: "bg-Teal-Secondary",
  primaryColorCode: "#12B886",
  secondaryColorCode: "#C3FAE8",
  gradient: "from-[#12B886] to-[#12B88680]",
  hover: "hover:bg-[#10a679]",
});

ColorList.set("Pink", {
  name: "Pink",
  textPrimary: "text-Pink-Primary",
  textSecondary: "text-Pink-Secondary",
  bgPrimary: "bg-Pink-Primary",
  bgSecondary: "bg-Pink-Secondary",
  primaryColorCode: "#E64980",
  secondaryColorCode: "#FFDEEB",
  gradient: "from-[#E64980] to-[#E6498080]",
  hover: "hover:bg-[#e43874]",
});

ColorList.set("Brand", {
  name: "Brand",
  textPrimary: "text-Brand-Primary",
  textSecondary: "text-Brand-Secondary",
  bgPrimary: "bg-Brand-Primary",
  bgSecondary: "bg-Brand-Secondary",
  primaryColorCode: "#208D8E",
  secondaryColorCode: "#C2F7FA",
  gradient: "from-[#208D8E] to-[#208D8E80]",
  hover: "hover:bg-[#1c7d7e]",
});

ColorList.set("Grape", {
  name: "Grape",
  textPrimary: "text-Grape-Primary",
  textSecondary: "text-Grape-Secondary",
  bgPrimary: "bg-Grape-Primary",
  bgSecondary: "bg-Grape-Secondary",
  primaryColorCode: "#BE4BDB",
  secondaryColorCode: "#F3D9FA",
  gradient: "from-[#BE4BDB] to-[#BE4BDB80]",
  hover: "hover:bg-[#b83bd8]",
});

ColorList.set("Green", {
  name: "Green",
  textPrimary: "text-Green-Primary",
  textSecondary: "text-Green-Secondary",
  bgPrimary: "bg-Green-Primary",
  bgSecondary: "bg-Green-Secondary",
  primaryColorCode: "#40C057",
  secondaryColorCode: "#D3F9D8",
  gradient: "from-[#40C057] to-[#40C05780]",
  hover: "hover:bg-[#3bb250]",
});

ColorList.set("Violet", {
  name: "Violet",
  textPrimary: "text-Violet-Primary",
  textSecondary: "text-Violet-Secondary",
  bgPrimary: "bg-Violet-Primary",
  bgSecondary: "bg-Violet-Secondary",
  primaryColorCode: "#7950F2",
  secondaryColorCode: "#E5DBFF",
  gradient: "from-[#7950F2] to-[#7950F280]",
  hover: "hover:bg-[#6b3ef1]",
});

ColorList.set("Lime", {
  name: "Lime",
  textPrimary: "text-Lime-Primary",
  textSecondary: "text-Lime-Secondary",
  bgPrimary: "bg-Lime-Primary",
  bgSecondary: "bg-Lime-Secondary",
  primaryColorCode: "#82C91E",
  secondaryColorCode: "#E9FAC8",
  gradient: "from-[#82C91E] to-[#82C91E80]",
  hover: "hover:bg-[#77b81b]",
});

ColorList.set("Indigo", {
  name: "Indigo",
  textPrimary: "text-Indigo-Primary",
  textSecondary: "text-Indigo-Secondary",
  bgPrimary: "bg-Indigo-Primary",
  bgSecondary: "bg-Indigo-Secondary",
  primaryColorCode: "#4C6EF5",
  secondaryColorCode: "#DBE4FF",
  gradient: "from-[#4C6EF5] to-[#4C6EF580]",
  hover: "hover:bg-[#395ff4]",
});

ColorList.set("Yellow", {
  name: "Yellow",
  textPrimary: "text-Yellow-Primary",
  textSecondary: "text-Yellow-Secondary",
  bgPrimary: "bg-Yellow-Primary",
  bgSecondary: "bg-Yellow-Secondary",
  primaryColorCode: "#FAB005",
  secondaryColorCode: "#FFF3BF",
  gradient: "from-[#FAB005] to-[#FAB00580]",
  hover: "hover:bg-[#e7a205]",
});

ColorList.set("Blue", {
  name: "Blue",
  textPrimary: "text-Blue-Primary",
  textSecondary: "text-Blue-Secondary",
  bgPrimary: "bg-Blue-Primary",
  bgSecondary: "bg-Blue-Secondary",
  primaryColorCode: "#228BE6",
  secondaryColorCode: "#D0EBFF",
  gradient: "from-[#228BE6] to-[#228BE680]",
  hover: "hover:bg-[##1981dc]",
});

ColorList.set("Orange", {
  name: "Orange",
  textPrimary: "text-Orange-Primary",
  textSecondary: "text-Orange-Secondary",
  bgPrimary: "bg-Orange-Primary",
  bgSecondary: "bg-Orange-Secondary",
  primaryColorCode: "#FD7E14",
  secondaryColorCode: "#FFE8CC",
  gradient: "from-[#FD7E14] to-[#FD7E1480]",
  hover: "hover:bg-[#fb7302]",
});
