import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TransactionBlock from "../components/TransictionBlock";
function Transiction() {
    let data = [null, false, null, true, null, null, null, true, null, null, null, null, false, null, null, null, null, true, null, null]
    return (
        <>
            <div className="w-auto relative">
                <div className="flex justify-between py-[24px]">
                    <div className="flex gap-[40px] items-center max-[520px]:flex-col max-[520px]:gap-[8px] max-[520px]:items-start">
                        <p className="text-white font-sans text-[18px] font-medium">Transictions</p>
                    </div>
                    <Button variant="contained" className="w-[125px] h-[32px] addwidget">
                        Add Widget
                    </Button>
                </div>
                <div className="flex justify-between mb-[13px]">
                    <p className="text-[18px] font-semibold text-[#616A8B]">Total 1,543</p>
                    <div className="flex gap-[24px]">
                        <p className="text-[white] block rounded-[5px] bg-[#32395E] px-[10px] font-sans text-[14px] font-bold cursor-pointer transition-all" style={{ borderBottom: "3px solid #1288E8" }}>All</p>
                        <p className="text-[#616A8B] font-sans text-[14px] font-bold cursor-pointer transition-all">Send</p>
                        <p className="text-[#616A8B] font-sans text-[14px] font-bold cursor-pointer transition-all">Recent</p>
                    </div>
                </div>
                <div className="flex overflow-y-auto flex-col gap-[16px] no-scrollbar" style={{ height: "calc(100vh - 230px)" }}>
                    {data.map((item) => (
                        <TransactionBlock statement={item}></TransactionBlock>
                    ))}
                </div>
                <div className="absolute w-full h-[25%] left-0 bottom-0" style={{ background: "linear-gradient(180deg, rgba(15, 11, 56, 0) 8.84%, #0F0B38 100%)" }}></div>
            </div>
        </>
    )
}
export default Transiction;