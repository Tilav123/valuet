import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
function Exchange() {
    return (
        <>
            <div className="w-auto">
                <p className="text-white font-sans text-[18px] font-medium mt-[28px] mb-[24px]">Exchange</p>
                <div className="flex gap-[24px] w-full flex-wrap">
                    <div className="flex flex-col flex-grow gap-[8px]">
                        <p className="font-sans text-[#616A8B] text-[14px]">From</p>
                        <div className="w-full h-[226px] p-[32px] rounded-[5px] justify-between flex flex-col" style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
                            <div className="flex items-center justify-between">
                                <p className="text-white font-sans text-[24px] font-medium">BitCoin</p>
                                <div className="flex items-center h-[88px] w-[88px] rounded-full justify-center" style={{ background: `#4D337F80` }}>
                                    <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ background: "#644696" }}>
                                        <img src={"/bitCoin.png"} alt={``} className="w-auto max-w-[44px] max-h-[48px] h-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-[16px] rounded-[5px] bg-[#32395E] h-[46px]" style={{ borderBottom: "3px solid #1288E8" }}>
                                <p className="text-[24px] font-sans font-extralight text-white">0.45234</p>
                                <p className="text-[24px] font-sans font-extralight text-white">BTC</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col flex-grow gap-[8px]">
                        <p className="font-sans text-[#616A8B] text-[14px]">To</p>
                        <div className="w-full h-[226px] p-[32px] rounded-[5px] justify-between flex flex-col" style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
                            <div className="flex items-center justify-between">
                                <p className="text-white font-sans text-[24px] font-medium">GridCoin</p>
                                <div className="flex items-center h-[88px] w-[88px] rounded-full justify-center" style={{ background: `#AA5E6966` }}>
                                    <div className="w-[70px] h-[70px] rounded-full flex items-center justify-center" style={{ background: "#BC5661" }}>
                                        <img src={"/gridCoin.png"} alt={``} className="w-auto max-w-[44px] max-h-[48px] h-auto" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex justify-between items-center px-[16px] rounded-[5px] bg-[#32395E] h-[46px]" style={{ borderBottom: "3px solid #1288E8" }}>
                                <p className="text-[24px] font-sans font-extralight text-white">1.45534</p>
                                <p className="text-[24px] font-sans font-extralight text-white">GRC</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full h-[113px] flex justify-center gap-[32px] items-center max-[380px]:gap-[15px]" style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) -153.98%, #0F0B38 140.59%)" }}>
                        <div className="flex gap-[16px] items-center">
                            <p className="text-white font-sans text-[24px] font-bold max-[980px]:hidden">0.45234 BTC</p>
                            <div className="flex items-center justify-center w-[59px] h-[59px] rounded-full" style={{ border: "2px solid rgba(17, 144, 242, 1)" }}>
                                <img src="./bitCoin.png" alt="" className="max-h-[31px]" />
                            </div>
                        </div>
                        <img src="./arrowLine.png" alt="" className="w-[144px] h-[16px] max-[380px]:w-[104px]" />
                        <div className="flex gap-[16px] items-center flex-row-reverse">
                            <p className="text-white font-sans text-[24px] font-bold max-[980px]:hidden">1.45534 GRC</p>
                            <div className="flex items-center justify-center w-[59px] h-[59px] rounded-full" style={{ border: "2px solid rgba(17, 144, 242, 1)" }}>
                                <img src="./gridCoin.png" alt="" className="max-h-[42px]" />
                            </div>
                        </div>
                    </div>
                    <center className="w-full">
                        <Button variant="contained" className="w-[125px] h-[32px] addwidget rounded-[8px]">
                            Exchange
                        </Button>
                    </center>
                </div>
            </div>
        </>
    )
}
export default Exchange;