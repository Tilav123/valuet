import React from 'react';
function Card({ title, image, currency, firstColor, secondColor }) {
    return (
        <div className="w-[284px] min-w-[284px] h-[148px] text-white p-[16px] pb-[20px] relative rounded-[5px] gap-[19px] max-[1345px]:flex-grow" style={{ background: `linear-gradient(237.07deg, ${firstColor} -8.06%, #0F0B38 96.63%)` }}>
            <h2 className="font-sans text-[14px] font-semibold">{title}</h2>
            <div className='flex items-center gap-[14px] max-[1345px]:justify-between'>
                <div className='flex gap-[8px]'>
                    <div className="flex items-center h-[64px] w-[64px] rounded-full justify-center" style={{ background: `${secondColor}` }}>
                        <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center" style={{background: firstColor}}>
                            <img src={image} alt={`${title} logo`} className="w-auto max-w-[38px] max-h-[32px] h-auto" />
                        </div>
                    </div>
                    <div className='flex flex-col gap-[4px] justify-center'>
                        <div className="text-[14px] font-bold uppercase">600 {currency}</div>
                        <div className="text-[12px] font-extrabold text-[#616A8B]">$30,000,000</div>
                    </div>
                </div>


                <div className="space-y-2">
                    <div className="flex justify-between items-center gap-[10px]">
                        <img src='/totop.png' className="w-auto h-[9px] object-contain"/>
                        <div className="flex flex-col">
                            <span className="text-[8px]">$1 200 = 0,074 {currency}</span>
                            <span className="text-[6px]">1 {currency} = $6 542,35</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[10px]">
                        <img src='/tobottom.png' className="w-auto h-[9px] object-contain"/>
                        <div className="flex flex-col">
                            <span className="text-[8px]">$1 200 = 0,074 {currency}</span>
                            <span className="text-[6px]">1 {currency} = $6 542,35</span>
                        </div>
                    </div>
                    <div className="flex justify-between items-center gap-[10px]">
                        <img src='/tobottom.png' className="w-auto h-[9px] object-contain"/>
                        <div className="flex flex-col">
                            <span className="text-[8px]">$1 200 = 0,074 {currency}</span>
                            <span className="text-[6px]">1 {currency} = $6 542,35</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;