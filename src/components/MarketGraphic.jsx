import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

function MarketGraphic({data, max,tricks, width,height, topblock, fontSize,left}) {
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
        if (value === max) {
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
        <div className={`w-[${width}] h-[${height}] flex-grow text-white rounded-lg shadow-lg p-4 max-[1064px]:w-full`} style={{background: "linear-gradient(180deg, rgba(27, 18, 78, 0.2) 0%, #0F0B38 93.37%)" }}>
            {topblock && (<div className="flex justify-between items-center mb-2">
                <div className="flex items-center space-x-4">
                    <div className="text-sm font-bold">Market</div>
                    <div className="text-sm">November</div>
                </div>
                <div className="text-sm">Bitcoin</div>
            </div>)}
            <div className="chart-container h-full">
                <ResponsiveContainer width="100%" height={topblock ? "90%" : "100%"}>
                    <LineChart data={data} margin={{ top: 10, right: 0, left: left, bottom: 0 }}>
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
                        
                        <CartesianGrid stroke="#11184E" strokeWidth={1} vertical={false} />
                        <XAxis dataKey="name" stroke="none" tick={{ fill: '#54669C', fontSize: fontSize }} />
                        <YAxis
                            stroke="none"
                            tick={{ fill: '#54669C', fontSize: fontSize }}
                            domain={[0, 10000]}
                            ticks={tricks}
                        />
                        <Tooltip content={<CustomTooltip />} cursor={false} />
                        <Line
                            type="natural" 
                            dataKey="value" 
                            stroke="url(#lineGradient)" 
                            strokeWidth={3.5} 
                            dot={<CustomDot></CustomDot>} 
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
};

export default MarketGraphic;
