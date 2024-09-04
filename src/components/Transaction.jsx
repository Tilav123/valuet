import React, { useEffect, useState } from "react"
function Transactions({date,top,action,person,money}) {
    return (
        <div className="w-full h-[31px] flex items-center justify-between gap-[23px] max-[370px]:gap-[10px]">
            <p className="font-sans text-[14px] text-[#616A8B] max-[370px]:text-[10px]">{date}</p>
            <img src={top ? "/getIcon.png" : "/sendIcon.png"} alt=""  className="w-[25px] h-[25px]" style={{objectFit: "contain"}}/>
            <div>
                <p className="font-['Roboto'] font-medium text-white leading-[14.06px] text-[12px]">{action}</p>
                <p className="font-['Roboto'] font-extralight text-white leading-[14.06px] text-[12px]">{person}</p>
            </div>
            <div className="flex-grow">
                <p className="font-['Roboto'] font-medium text-white text-[14px] text-end">{money}</p>
            </div>
        </div>
    );
};
export default Transactions;