import React, { useEffect, useState } from "react"
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom"
import Card from "../components/Card";
import { Line } from 'react-chartjs-2';
import Balance from "../components/Balance";
import Speeding from "../components/Speeding";
import MarketGraphic from "../components/MarketGraphic";
import RecentNews from "../components/RecentNews";
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
ChartJS.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);
function Home() {
    const data = [
        { name: 'Nov 15', value: 4200 },
        { name: '', value: 2000 },
        { name: 'Nov 16', value: 7800 },
        { name: '', value: 7000 },
        { name: 'Nov 17', value: 4100 },
        { name: '', value: 9900 },
        { name: 'Nov 18', value: 5900 },
        { name: '', value: 8000 },
        { name: 'Nov 19', value: 2000 },
        { name: '', value: 4000 },
        { name: 'Nov 20', value: 8000 },
        { name: '', value: 10000 },
        { name: 'Nov 21', value: null },
        { name: '', value: null },
        { name: 'Nov 22', value: null },
        { name: '', value: null },
    ];
    const tricks = [0, 2000, 4000, 6000, 8000, 10000]
    return (
        <>
            <div className="w-auto max-w-[1271px]">
                <div className="flex justify-between py-[24px]">
                    <div className="flex gap-[40px] items-center max-[520px]:flex-col max-[520px]:gap-[8px] max-[520px]:items-start">
                        <p className="text-white font-sans text-[18px] font-medium">Overview</p>
                        <p className="text-[14px]" style={{ color: "rgba(84, 102, 156, 1)" }}>25 october, Sunday</p>
                    </div>
                    <Button variant="contained" className="w-[125px] h-[32px] addwidget">
                        Add Widget
                    </Button>
                </div>
                <div className="flex justify-between flex-wrap gap-[16px]">
                    <Balance changes={false}></Balance>
                    <Speeding></Speeding>
                    <div className="flex gap-[16px] flex-wrap w-[584px] max-[1345px]:w-full max-[1345px]:justify-between">
                        <Card title={"BitCoin"} image={"/bitCoin.png"} currency={"btc"} firstColor={"#604392"} secondColor={"#4D337F80"}></Card>
                        <Card title={"GridCoin"} image={"/gridCoin.png"} currency={"grc"} firstColor={"#BC5661"} secondColor={"#AA5E6966"}></Card>
                        <Card title={"Ethereum"} image={"/ethereum.png"} currency={"eth"} firstColor={"#5454BD"} secondColor={"#4948A866"}></Card>
                        <Card title={"Aeternity"} image={"/aeternity.png"} currency={"ae"} firstColor={"#C87038"} secondColor={"#915D3B80"}></Card>
                    </div>
                </div>
                <div className="flex justify-between mt-[24px] gap-[16px] max-[1064px]:flex-wrap">
                    <MarketGraphic data={data} max={10000} tricks={tricks} width={"665px"} height={"232px"} topblock={true} fontSize={"8px"} left={-30}></MarketGraphic>
                    <RecentNews></RecentNews>
                </div>
            </div>
        </>
    )
}
export default Home;