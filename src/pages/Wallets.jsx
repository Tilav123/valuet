import React, { useState, useRef } from "react";
import Balance from "../components/Balance";
import OtherCard from "../components/OtherCard";
import MarketGraphic from "../components/MarketGraphic";
import RecentTransactions from "../ccontainers/RecentTransactions";
function Wallets() {
    const carouselRef = useRef(null);
    const [isDragStart, setIsDragStart] = useState(false);
    const [prevPageX, setPrevPageX] = useState(0);
    const [prevScrollLeft, setPrevScrollLeft] = useState(0);
    const data = [
        { name: 'June', value: 4200 },
        { name: '', value: 2000 },
        { name: 'July', value: 6000 },
        { name: '', value: 6200 },
        { name: 'August', value: 4100 },
        { name: '', value: 8200 },
        { name: 'September', value: 5900 },
        { name: '', value: 7000 },
        { name: 'October', value: 2000 },
        { name: '', value: 8000 }
    ];
    const tricks = [0, 2000, 4000, 6000, 8000, 10000, 12000, 14000]
    const handleMouseDown = (e) => {
        setIsDragStart(true);
        setPrevPageX(e.pageX);
        setPrevScrollLeft(carouselRef.current.scrollLeft);
        carouselRef.current.style.transition = 'transform 0.3s';
    };

    const handleMouseMove = (e) => {
        if (!isDragStart) return;
        e.preventDefault();
        carouselRef.current.style.transition = 'none';
        const positionDiff = e.pageX - prevPageX;
        carouselRef.current.scrollLeft = prevScrollLeft - positionDiff;
    };

    const handleMouseUp = () => {
        setIsDragStart(false);
    };

    return (
        <>
            <div className="w-auto max-w-[1271px]">
                <p className="text-white font-sans text-[18px] font-medium mt-[28px] mb-[24px]">Wallets</p>
                <div className="flex gap-[16px] max-[870px]:flex-wrap">
                    <Balance changes={true} />
                    <div
                        ref={carouselRef}
                        className="flex-grow flex gap-[24.5px] overflow-x-auto whitespace-nowrap carousel justify-between"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                    >
                        <OtherCard title={"BitCoin"} image={"/bitCoin.png"} firstColor={"#604392"} secondColor={"#4D337F80"} />
                        <OtherCard title={"Ethereum"} image={"/ethereum.png"} firstColor={"#6162D6"} secondColor={"#4948A866"} />
                        <OtherCard title={"Dash"} image={"/dashLogo.png"} firstColor={"#72EB38"} secondColor={"#6CBA6080"} />
                    </div>
                </div>
                <div className="flex justify-between mt-[24px] gap-[16px] max-[1064px]:flex-wrap">
                    <MarketGraphic data={data} max={8200} tricks={tricks} width={"552px"} height={"399px"} topblock={false} fontSize={"14px"} left={-10}></MarketGraphic>
                    <RecentTransactions></RecentTransactions>
                </div>
            </div>
        </>
    );
}

export default Wallets;
