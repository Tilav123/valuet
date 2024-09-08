import React, { useEffect, useState } from "react"
import Transactions from "../components/Transaction";
function RecentTransactions({ user }) {
    return (
        <div className="w-[508px] h-[399px] p-[16px_24px] bg-[#0f0f3f] text-white rounded-md relative max-[1064px]:w-full">
            <h2 className="text-[14px] font-bold mb-2">RECENT TRANSACTIONS</h2>
            <hr className="border border-[#2D317A] mb-4" />
            <div className="h-[90%] overflow-y-auto no-scrollbar relative flex-col gap-[20px] flex">
                {user?.wallets?.map(wallet =>
                    wallet.transictions.map(transaction => (
                        <Transactions date={wallet.name} top={!transaction.actionType} action={transaction.actionType ? "Sent dollars" : "Received dollars"} person={transaction.actionType ? "unknown" : user.name} money={`${transaction.actionType ? "-" : "+"}${transaction.amount}$`}></Transactions>
                    ))
                )}
            </div>
            <div className="absolute bottom-0 left-0 w-full h-[76px]" style={{ background: "linear-gradient(180deg, rgba(15, 11, 56, 0) 8.84%, #0F0B38 100%)" }}></div>
        </div>
    );
};
export default RecentTransactions;