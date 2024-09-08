import React from 'react';
import { LineChart, Line, ResponsiveContainer, YAxis } from 'recharts';

function OtherCard({ title, image, firstColor, secondColor, balance, type, validaty, transictions }) {
    const transactionsArray = Array.isArray(transictions) ? transictions : [];
    let data = transictions?.map((item, index) => ({
        name: `Point ${index + 1}`,
        value: item.amount,
    }));
    console.log(data);
    
    return (
        <div className='w-[292px] min-w-[292px] h-[148px] rounded-[5px] p-[16px]' style={{ background: `linear-gradient(237.07deg, ${secondColor} -8.06%, rgba(15, 11, 56, 0.5) 96.63%)` }}>
            <div className='flex justify-between'>
                <p className='font-sans text-white text-[14px] font-semibold'>{title}</p>
                <div className='flex gap-[12px] h-auto items-center'>
                    <div className=''>
                        <p className='font-sans text-white text-end leading-[21px]'>{balance} USD</p>
                        <p className='font-sans text-[12px] text-[#616A8B] text-end leading-[16px]'>{type} {validaty}</p>
                    </div>
                    <div className="flex items-center h-[56px] w-[56px] rounded-full justify-center" style={{ background: `${secondColor}`, boxShadow: "0px 12px 10px 0px rgba(25, 11, 42, 0.25)" }}>
                        <div className="w-[44px] h-[44px] rounded-full flex items-center justify-center" style={{ background: firstColor }}>
                            <img src={image} alt={`${title} logo`} className="w-auto max-w-[28px] max-h-[32px] h-auto" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[63px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <YAxis domain={['auto', 'auto']} hide={true} />
                        <Line
                            type="linear"
                            dataKey="value"
                            strokeWidth={3}
                            stroke={firstColor}
                            strokeLinecap="round"
                            dot={false}
                            connectNulls={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

export default OtherCard;

