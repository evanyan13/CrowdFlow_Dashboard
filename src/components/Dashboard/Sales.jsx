import React from "react";
import {
  UserPlusIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  BanknotesIcon,
} from "@heroicons/react/20/solid";

const items = [
  {
    title: "Today's Money",
    value: "$53,000",
    icon: CurrencyDollarIcon,
    percentage: "+55%",
  },
  {
    title: "Total Sales",
    value: "$173,000",
    icon: BanknotesIcon,
    percentage: "+5%",
  },
  {
    title: "Today's Users",
    value: "2,300",
    icon: UserGroupIcon,
    percentage: "-14%",
  },
  {
    title: "New Clients",
    value: "+3,052",
    icon: UserPlusIcon,
    percentage: "+8%",
  },
];

const Sales = () => {
  return (
    <div className="flex flex-col justify-between w-1/3 m-1">
      {items.map((item) => (
        <div className="flex justify-between bg-white rounded-md drop-shadow-md h-[23%] pl-3 pr-3">
          <div className="flex flex-col justify-center">
            <span className="text-gray-400 text-sm">{item.title}</span>
            <div>
              <span className="font-bold">{item.value}</span>
              <span
                className="pl-2 text-sm font-bold"
                style={{
                  color: item.percentage?.charAt(0) === "-" ? "red" : "limegreen",
                }}
              >
                {item.percentage}
              </span>
            </div>
          </div>
          <item.icon className="h-3/5 self-center p-2 bg-teal-400 rounded-lg fill-white w-20" />
        </div>
      ))}
    </div>
  );
};

export default Sales;
