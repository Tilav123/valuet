import React, { useEffect, useState } from "react"
function TransactionBlock({date,cardName,statement, cardNumber,amount}) {
    return (
        <div className="flex bg-[#1F184C] pl-[24px] pr-[16px] items-center w-full h-[62px] rounded-[5px] justify-between min-h-[62px] max-[1030px]:pl-[14px] max-[1030px]:pr-[14px] max-[370px]:bg-transparent max-[370px]:px-0">
            <div className="flex gap-[33px] items-center max-[1030px]:gap-[13px]">
                <p className="text-white text-[14px] font-medium max-[570px]:hidden ">{cardName}</p>
                <p className="text-white text-[14px] font-sans">{date}</p>
                <div className="flex items-center justify-center w-[32px] h-[32px] rounded-full max-[464px]:hidden" style={{ border: "2px solid rgba(17, 144, 242, 1)" }}>
                    <img src="./dollarIcon.png" alt="" className="max-h-[20px]" />
                </div>
            </div>
            <div className="flex items-center gap-[24px] max-[1030px]:gap-[9px] max-[920px]:w-[20%]">
                <img src={statement !== true ? "/greenLine.png" : "/redLine.png"} alt="" className="w-[24px] h-[16px] max-[960px]:hidden" />
                <p className="text-white text-[14px] font-sans w-full" style={{whitepace: "nowrap", overflow: "hidden", textOverflow: "ellipsis"}}>{cardNumber}</p>
            </div>
            <div className="flex gap-[24px] items-center w-[40%] justify-end max-[1240px]:w-auto max-[1030px]:gap-[14px]">
                <p className="text-white text-[14px] font-medium">{amount.toLocaleString()} USD</p>
                <button className={`${statement !== true ? "bg-[#00E8ACBF]" : "bg-[#F35050]"} text-white text-[14px] font-semibold rounded-[5px] w-[85px] h-[30px]`}>{statement !== true ? "Deposited" : "Withdrawn"}</button>
            </div>
        </div>
    );
};
export default TransactionBlock;