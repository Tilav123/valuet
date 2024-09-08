import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function Speeding() {
    const data = [
        { name: '2', value: 3000 },
        { name: '4', value: 2000 },
        { name: '6', value: 4500 },
        { name: '8', value: 4000 },
        { name: '10', value: 5200 },
        { name: '12', value: 4900 },
        { name: '14', value: 5743 },
        { name: '16', value: 8000 },
    ];
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip" style={{background: "rgba(50, 57, 94, 1)", fontSize: "16px"}}>
                    <p>{`$${payload[0].value}`}</p>
                </div>
            );
        }
        return null;
    };

    const CustomDot = (props) => {
        const { cx, cy, value } = props;
        if (value === 5743) {
            return (
                <svg x={cx - 9} y={cy - 9} width={18} height={18} viewBox="0 0 18 18">
                    <circle cx="9" cy="9" r="9" fill="rgba(1, 143, 255, 0.2)" />
                    <circle cx="9" cy="9" r="7" fill="rgba(1, 143, 255, 0.5)" />
                    <circle cx="9" cy="9" r="5" fill="rgba(1, 143, 255, 1)" />
                </svg>
            );
        }
        return null;
    };

    return (
        <div className="w-[240px] min-w-[240px] min-h-[312px] h-auto rounded-xl py-4 flex flex-col max-[1346px]:w-[49%] max-[1064px]:flex-grow" style={{ background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
            <div className="flex justify-between px-4">
                <h3 className="text-[14px] text-white font-semibold font-sans">Spending</h3>
                <p className="text-white text-sm font-extralight flex items-center gap-[4px]">January <img src="/arrow.png" alt="" className="w-[6px] h-[3px]" /></p>
            </div>
            <div className="flex flex-col gap-[6px] mt-[32px] px-4">
                <div className="text-white text-[16px] font-bold">$ 5,743.35</div>
                <p className="font-extralight text-white text-[8px]">total spending</p>
            </div>
            <div className="chart-container h-[205px] w-[100%]">
            <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 20, right: 20, left: 20, bottom: 0 }}>
                        <defs>
                            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="rgba(0, 151, 232, 0)" />
                                <stop offset="59.83%" stopColor="#0097E8" />
                                <stop offset="106.22%" stopColor="rgba(0, 151, 232, 0)" />
                            </linearGradient>
                            <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="8" stdDeviation="5" floodColor="#00000040" />
                            </filter>
                        </defs>
                        <XAxis dataKey="name" stroke="none" tick={{ fill: 'rgba(255, 255, 255, 1)', fontSize: "14px" }} />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Line
                            type="natural" 
                            dataKey="value" 
                            stroke="url(#lineGradient)" 
                            strokeWidth={3} 
                            dot={<CustomDot />} 
                            activeDot={{ r: 6, stroke: 'rgba(1, 143, 255, 0.2)', strokeWidth: 5, fill: 'rgba(1, 143, 255, 0.5)' }}
                            filter="url(#shadow)"
                            strokeLinecap="round" 
                            connectNulls={true} 
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default Speeding;
