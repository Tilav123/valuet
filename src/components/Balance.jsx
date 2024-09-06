import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);
function Balance({ changes }) { 
    let [user,setUser] = useState()
    let [total,setTotal] = useState(0)
    const data = {
        datasets: [
            {
                data: [64, 18, 18],
                backgroundColor: ['#018FFF', '#FAD679', '#f8f8f8'],
                borderWidth: 12,
                cutout: '75%',
                rotation: -175,
            },
        ],
    };
    useEffect(()=>{
        setUser(JSON.parse(localStorage.getItem('user')))
        setTotal(user && user.wallets ? user.wallets.reduce((total, wallet) => {
            return total + (wallet.balance || 0);
        }, 0) : 0);
    },[user])
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            tooltip: { enabled: false },
            legend: { display: false },
        },
        elements: {
            arc: {
                borderColor: 'transparent',
            },
        },
        layout: {
            padding: 0,
        },
    };
    return (
        <div className={`w-[225px] min-w-[225px] flex-grow h-[312px] rounded-[5px] p-[24px] pt-[16px] max-[1346px]:w-[49%] max-[1064px]:flex-grow ${changes ? "change_balance_block" : ""}`} style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
            <p className="text-[14px] text-white font-semibold font-sans mb-[12px] balance_text">Balance</p>
            {changes ? (
                <div className="relative w-[115px] h-[115px]">
                    <Doughnut data={data} options={options} />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                        <span className="text-[12px] text-[#6b6b82]">TOTAL</span>
                        <span className="text-[16px] font-bold text-white">{total}$</span>
                    </div>
                </div>
            )
                : (
                    <div className="relative w-[146px] h-[146px] m-auto">
                        <Doughnut data={data} options={options} />
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-[16px] text-[#0097E8] font-medium">BALANCE</span>
                            <span className="text-[18px] font-bold text-white">{total}$</span>
                        </div>
                    </div>
                )
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