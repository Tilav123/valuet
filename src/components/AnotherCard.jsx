import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
function AnotherCard({ title, image, firstColor, secondColor, currency }) {
    let data = [
        { name: 'Point 1', value: 15 },
        { name: 'Point 2', value: 5 },
        { name: 'Point 3', value: 10 },
        { name: 'Point 4', value: 5 },
        { name: 'Point 5', value: 15 },
        { name: 'Point 6', value: 10 },
        { name: 'Point 7', value: 30 },
        { name: 'Point 8', value: 10 },
        { name: 'Point 9', value: 5 },
        { name: 'Point 10', value: 20 },
        { name: 'Point 11', value: 15 },
        { name: 'Point 12', value: 5 },
        { name: 'Point 13', value: 10 },
        { name: 'Point 14', value: 5 },
        { name: 'Point 15', value: 15 },
        { name: 'Point 16', value: 10 },
        { name: 'Point 17', value: 20 },
    ];
    return (
        <div className='w-[346px] h-[179px] rounded-[5px] p-[16px] flex-grow' style={{ background: `linear-gradient(180deg, rgba(27, 18, 78, 0.2) -49.17%, #0F0B38 90.11%)` }}>
            <div className='flex justify-between'>
                <div className='flex gap-[12px] h-auto items-center'>
                    <div className="flex items-center h-[70px] w-[70px] rounded-full justify-center" style={{ background: `${secondColor}`, boxShadow: "0px 12px 10px 0px rgba(25, 11, 42, 0.25)" }}>
                        <div className="w-[55px] h-[55px] rounded-full flex items-center justify-center" style={{ background: firstColor }}>
                            <img src={image} alt={`${title} logo`} className="w-auto max-w-[35px] max-h-[35px] h-auto" />
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-sans text-white text-[12px] font-bold'>{title}</p>
                        <p className='font-sans text-[12px] text-[#00E8AC] leading-[16px] font-bold'>1.93%</p>
                    </div>
                </div>
                <div>
                    <div className=''>
                        <div className='flex gap-[12px] justify-end'>
                            <p className='font-sans text-[12px] font-bold text-white'>EUR</p>
                            <p className='font-sans text-[12px] font-bold text-[#616A8B]'>USD</p>
                            <p className='font-sans text-[12px] font-bold text-[#616A8B]'>BTC</p>
                        </div>

                        <div className='flex gap-[7px] items-center justify-end'>
                            <p className='font-sans text-[18px] text-white font-bold'>1,307.96</p>
                            <p className='font-sans text-[14px] text-white font-medium'>EUR</p>
                        </div>
                        <div className='flex'>
                            <p className='text-[#616A8B] text-[14px] font-sans font-light'>Volume</p>
                            <p className='font-sans text-[14px] text-white font-medium mr-[5px] ml-[12px]'>18,423</p>
                            <p className='text-[#616A8B] text-[14px] font-sans font-light'>{currency}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[63px]">
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={data} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                        <Line
                            type="line"
                            dataKey="value"
                            strokeWidth={3}
                            stroke={"#00E8AC"}
                            strokeLinecap="round"
                            dot={false}
                            connectNulls={true}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default AnotherCard;