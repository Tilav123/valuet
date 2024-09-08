import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';

Chart.register(ArcElement, Tooltip, Legend);
function Balance({ changes, user }) {
    let [total, setTotal] = useState(0)
    useEffect(() => {
        if (user && user.wallets) {
            const totalBalance = user.wallets.reduce((acc, wallet) => {
                return acc + parseFloat(wallet.balance || 0);
            }, 0);
            setTotal(totalBalance);
        }
    }, [user]);
    let percentages = user?.wallets?.map((wallet) => {
        return parseInt((wallet.balance / total) * 100, 10);
    }) || [];
    const baseHue = Math.floor(Math.random() * 360); // Можно выбрать фиксированный оттенок, например 200 для синего

    const colors = Array.from({ length: 5 }, (_, i) => {
        const step = 360 / 5;
        const hue = (baseHue + i * step) % 360;
        const saturation = 100 + Math.floor(Math.random() * 20); // Определите желаемую насыщенность
        const lightness = 50 + Math.floor(Math.random() * 20); // Определите желаемую яркость
        return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    });
    const data = {
        datasets: [
            {
                data: percentages,
                backgroundColor: colors,
                borderWidth: 12,
                cutout: '75%',
                rotation: -175,
            },
        ],
    };
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
        <div className={`w-[225px] min-w-[225px] flex-grow min-h-[312px] h-auto rounded-[5px] p-[24px] pt-[16px] max-[1346px]:w-[49%] max-[1064px]:flex-grow ${changes ? "change_balance_block" : ""}`} style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
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
                    {user?.wallets?.map((wallet, index) => (
                        <div className="flex justify-between">
                            <div className="flex gap-[8px] text-[12px] text-white font-sans items-center w-fit">
                                <div className="flex items-center justify-center w-[10px] h-[10px] bg-blue-950 rounded-full">
                                    <div className={`w-[6px] h-[6px] rounded-full shadow-[0_0_15px_0_rgba(59,130,246,0.5)]`} style={{ background: colors[index] }}></div>
                                </div>
                                {wallet.name}
                            </div>
                            <p className="font-sans font-bold text-[12px] text-white w-fit">{parseInt((wallet.balance / total) * 100)}%</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
export default Balance;