import React from "react";
import fundIcon from "@assets/svg/fund-icon.svg";
import internIcon from "@assets/svg/intern-icon.svg";
import eduIcon from "@assets/svg/edu-icon.svg";
import bankIcon from "@assets/svg/banks-icon.svg";
import marketIcon from "@assets/svg/market-icon.svg";
import auditIcon from "@assets/svg/audit-icon.svg";

const cardData = [
  {
    id: 1,
    title: "Islamic Fund Management",
    description:
      "We assist retail and institutional clients in managing their funds in accordance with Islamic principles, providing practical advice for making halal investments.",
    icon: fundIcon,
    bgColor: "bg-blue-50",
    iconBg: "bg-blue-100",
  },
  {
    id: 2,
    title: "International Relations",
    description:
      "We establish connections with local and international organizations to promote Islamic financial systems and create partnerships that support financial inclusion.",
    icon: internIcon,
    bgColor: "bg-emerald-50",
    iconBg: "bg-emerald-100",
  },
  {
    id: 3,
    title: "Education and Training",
    description:
      "We offer short-term training courses, seminars, and conferences conducted by experts, along with study tours to leading Islamic financial institutions.",
    icon: eduIcon,
    bgColor: "bg-pink-50",
    iconBg: "bg-pink-100",
  },
  {
    id: 4,
    title: "For Islamic Banks",
    description:
      "We provide experienced consulting on the establishment and management of Islamic banks and branches. We support the development of competitive financial products and services based on Shariah principles.",
    icon: bankIcon,
    bgColor: "bg-violet-50",
    iconBg: "bg-violet-100",
  },
  {
    id: 5,
    title: "Islamic Capital Market",
    description:
      "We provide expert advice on the Islamic capital market, including Shariah-compliant investment products, sukuk issuance, and ethical portfolio management.",
    icon: marketIcon,
    bgColor: "bg-slate-100",
    iconBg: "bg-slate-200",
  },
  {
    id: 6,
    title: "Shariah Compliance Audit",
    description:
      "We provide Shariah supervision and audit services, examining the compliance of business models with Shariah principles.",
    icon: auditIcon,
    bgColor: "bg-amber-50",
    iconBg: "bg-amber-100",
  },
];

function Card() {
  return (
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3 justify-items-center">
        {cardData.map((item) => (
          <div
            key={item.id}
            className={`${item.bgColor} w-full max-w-[380px] flex flex-col justify-between rounded-xl p-7.5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] transition-transform duration-300 hover:-translate-y-1`}
          >
            <div
              className={`inline-flex h-14 w-14 items-center justify-center rounded-3xl ${item.iconBg} mb-6 shadow-sm`}
            >
              <img
                src={item.icon}
                alt={item.title}
                className="h-8 w-8 object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-4">
              {item.title}
            </h3>
            <p className="text-sm leading-7 text-slate-600 mb-6">
              {item.description}
            </p>
            <button className="w-full rounded-[10px] cursor-pointer bg-slate-950 px-5 py-3 text-sm font-semibold text-white shadow-sm transition-colors duration-200 hover:bg-slate-800">
              Learn more
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Card;
