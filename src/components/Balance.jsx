import React from 'react';
function Balance({ changes }) {
    return (
        <div className={`w-[225px] min-w-[225px] flex-grow h-[312px] rounded-[5px] p-[24px] pt-[16px] max-[1346px]:w-[49%] max-[1064px]:flex-grow ${changes ? "change_balance_block" : ""}`} style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
            <p className="text-[14px] text-white font-semibold font-sans mb-[12px] balance_text">Balance</p>
            {changes ? (
                <div className="relative w-[105px] h-[105px] min-w-[105px] flex items-center flex-shrink justify-center rounded-full">
                    {/* Outer Circle Segments */}
                    <div className="absolute w-[105px] h-[105px] rounded-full border-[12px] border-[#018FFF]"></div>
                    <div className="absolute w-[105px] h-[105px] rounded-full border-[12px] border-transparent border-l-[#f8f8f8] -rotate-[125deg]"></div>
                    <div className="absolute w-[105px] h-[105px] rounded-full border-[12px] border-transparent border-r-[#FAD679]"></div>

                    {/* Inner Content */}
                    <div className="flex flex-col items-center justify-center absolute">
                        <span className="text-[14px] text-[#6b6b82]">TOTAL</span>
                        <span className="text-[20px] font-bold text-white">8 200$</span>
                    </div>
                </div>
            )
                : (<div className="relative w-[146px] h-[146px] flex items-center justify-center m-auto circle">
                    <div
                        className="absolute w-full h-full rounded-full border-[16px] border-[#018FFF]"
                        style={{
                            clipPath: "circle(50% at 50% 50%)",
                        }}
                    ></div>
                    <div
                        className="absolute w-full h-full rounded-full border-[16px] border-transparent border-r-white"
                        style={{
                            transform: `rotate(70.4deg)`,
                            clipPath: "circle(50% at 50% 50%)",
                        }}
                    ></div>
                    <div
                        className="absolute w-full h-full rounded-full border-[16px] border-transparent border-r-[#FAD679]"
                        style={{
                            transform: `rotate(25.6deg)`,
                            clipPath: "circle(50% at 50% 50%)",
                        }}
                    ></div>
                    <div className="absolute w-[86px] h-[86px] rounded-full flex items-center justify-center gap-[6px]">
                        <div className="text-center">
                            <div className="text-blue-400 font-bold text-sm">BALANCE</div>
                            <div className="text-white font-bold text-lg">8 200$</div>
                        </div>
                    </div>
                </div>)
            }
            <div className="w-full">
                <div className={`flex justify-between ${changes ? "mt-0 flex-grow" : "mt-[24px]"} flex-col gap-[9px]`}>
                    <div className="flex justify-between">
                        <div className="flex gap-[8px] text-[12px] text-white font-sans items-center w-fit">
                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-blue-950 rounded-full">
                                <div className="w-[6px] h-[6px] bg-white rounded-full shadow-[0_0_15px_0_rgba(59,130,246,0.5)]"></div>
                            </div>
                            Ethereum
                        </div>
                        <p className="font-sans font-bold text-[12px] text-white w-fit">18%</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-[8px] text-[12px] text-white font-sans items-center w-fit">
                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-blue-950 rounded-full">
                                <div className="w-[6px] h-[6px] bg-blue-500 rounded-full shadow-[0_0_15px_0_rgba(59,130,246,0.5)]"></div>
                            </div>
                            Bitcoin
                        </div>
                        <p className="font-sans font-bold text-[12px] text-[#018FFF] w-fit">64%</p>
                    </div>
                    <div className="flex justify-between">
                        <div className="flex gap-[8px] text-[12px] text-white font-sans items-center w-fit">
                            <div className="flex items-center justify-center w-[10px] h-[10px] bg-blue-950 rounded-full">
                                <div className="w-[6px] h-[6px] bg-[#FAD679] rounded-full shadow-[0_0_15px_0_rgba(59,130,246,0.5)]"></div>
                            </div>
                            Dash
                        </div>
                        <p className="font-sans font-bold text-[12px] text-[#FAD679] w-fit">18%</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Balance;