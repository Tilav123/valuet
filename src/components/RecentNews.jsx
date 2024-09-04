import React, { useEffect, useState } from "react"
function RecentNews() {
    const newsItems = [
        { id: 1, time: "19 hours ago", text: "SEC Fails To Show Court Blockvest Tokens Are Securities" },
        { id: 2, time: "23 hours ago", text: "Report: Bitcoin Mining Doesn’t Fuel Climate Change, It Benefits The Global Economy" },
        { id: 3, time: "11.22, 15:27", text: "A Look At The Multi-Currency Encrypted Messaging App ‘Chat.Chat’" },
        { id: 4, time: "11.21, 11:43", text: "Four Ways To Commemorate Bitcoin’s 10th Anniversary" },
        { id: 5, time: "11.20, 10:30", text: "Bitcoin Price Hits All-Time High" },
        { id: 6, time: "11.19, 09:22", text: "New Legislation Aims to Regulate Cryptocurrencies" },
        { id: 7, time: "11.18, 08:15", text: "Major Bank Announces Support for Crypto" },
        { id: 8, time: "11.17, 07:05", text: "Blockchain Technology Revolutionizes Supply Chain" },
        { id: 9, time: "11.16, 06:12", text: "Crypto Exchange Announces Major Partnership" },
        { id: 10, time: "11.15, 05:40", text: "Experts Predict Bullish Future for Bitcoin" },
        { id: 11, time: "11.14, 04:25", text: "New Security Features for Digital Wallets" },
        { id: 12, time: "11.13, 03:55", text: "Crypto Adoption Continues to Grow" },
        { id: 13, time: "11.12, 02:45", text: "Stablecoins: The Future of Digital Currency?" },
        { id: 14, time: "11.11, 01:35", text: "Decentralized Finance (DeFi) Explained" },
        { id: 15, time: "11.10, 00:20", text: "Understanding Cryptocurrency Taxation" },
        { id: 16, time: "11.09, 23:10", text: "The Role of NFTs in the Digital Economy" },
    ];
    return (
        <div className="w-[410px] h-[232px] p-[16px_24px] bg-[#0f0f3f] text-white rounded-md relative max-[1064px]:w-full">
            <h2 className="text-[14px] font-bold mb-2">Recent News</h2>
            <hr className="border border-[#2D317A] mb-4" />
            <div className="news-list h-[164px] overflow-y-auto no-scrollbar relative no-scrollbar">
                {newsItems.map((item) => (
                    <div key={item.id} className="flex mb-2 gap-[26px]">
                        <span className="text-[12px] opacity-70 max-w-[72px] text-nowrap">{item.time}</span>
                        <span className="text-[12px] font-semibold flex-grow">{item.text}</span>
                    </div>
                ))}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[76px]" style={{background: "linear-gradient(180deg, rgba(15, 11, 56, 0) 8.84%, #0F0B38 100%)"}}></div>
        </div>
    );
};
export default RecentNews;
