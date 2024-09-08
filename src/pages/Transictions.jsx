import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Button from '@mui/material/Button';
import TransactionBlock from "../components/TransictionBlock";

function Transiction({ user, set }) {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const [isModalOpen, setIsModalOpen] = useState(false);
    let [actionTip,setActionTip] = useState(false)
    const onSubmit = (newTransiction) => {
        console.log(newTransiction);
        newTransiction.amount = parseFloat(newTransiction.amount);
        newTransiction.date = new Date().toISOString();
        newTransiction.actionType = actionTip
        const updatedWallets = [...user.wallets];
        updatedWallets[newTransiction.cardSelection] = {
            ...updatedWallets[newTransiction.cardSelection],
            transictions: [
                ...(updatedWallets[newTransiction.cardSelection].transictions || []),
                newTransiction
            ]
        };
        if (newTransiction.actionType) {
            updatedWallets[newTransiction.cardSelection].balance = updatedWallets[newTransiction.cardSelection].balance - newTransiction.amount
        } else {
            updatedWallets[newTransiction.cardSelection].balance = updatedWallets[newTransiction.cardSelection].balance + newTransiction.amount
        }
        fetch(`http://localhost:8080/users/${user.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ wallets: updatedWallets }),
        })
            .then(response => response.json())
            .then(updatedUser => {
                set(updatedUser);
            })
            .catch(error => console.error('Error updating user:', error));
        reset();
    };
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 ${isModalOpen ? 'block' : 'hidden'}`}
                onClick={() => setIsModalOpen(false)}
            >
                <div
                    className="p-6 rounded-lg shadow-lg w-96 text-white"
                    onClick={(e) => e.stopPropagation()}
                    style={{ background: "radial-gradient(46.41% 73.99% at 46.63% 48.05%, rgb(32, 19, 92) 0%, rgb(20, 7, 57) 92.82%)" }}
                >
                    <h2 className="text-xl font-semibold mb-4">Enter Details</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-4">
                            <label htmlFor="selection" className="block text-sm font-medium mb-2">
                                Select Your Card
                            </label>
                            <select
                                id="selection"
                                className="w-full p-2 border border-gray-300 rounded-lg bg-[#2E3558] outline-none border-none"
                                name="cardSelection"
                                {...register("cardSelection", { required: true })}
                            >
                                {user?.wallets?.map((wallet, index) => (
                                    <option key={index} value={index}>
                                        {wallet.name}
                                    </option>
                                ))}
                            </select>
                            {errors.cardSelection && <p className="text-red-500">This field is required</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="amount" className="block text-sm font-medium mb-2">
                                Amount in Dollars
                            </label>
                            <input
                                type="number"
                                id="amount"
                                name="amount"
                                min={0}
                                className="w-full p-2 border border-gray-300 rounded-lg bg-[#2E3558] outline-none border-none"
                                placeholder="$0.00"
                                {...register("amount", { required: true, min: 0 })}
                            />
                            {errors.amount && <p className="text-red-500">Please enter a valid amount</p>}
                        </div>
                        <div className="flex justify-end gap-[10px]">
                            <button
                                type="submit"
                                className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-600"
                                onClick={()=>setActionTip(true)}
                            >
                                Withdraw
                            </button>
                            <button
                                type="submit"
                                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                                onClick={()=>setActionTip(false)}
                            >
                                Deposit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-auto relative">
                <div className="flex justify-between py-[24px]">
                    <div className="flex gap-[40px] items-center max-[520px]:flex-col max-[520px]:gap-[8px] max-[520px]:items-start">
                        <p className="text-white font-sans text-[18px] font-medium">Transictions</p>
                    </div>
                    <Button variant="contained" className="w-[145px] h-[32px] addwidget" onClick={() => setIsModalOpen(true)}>
                        Add Transiction
                    </Button>
                </div>
                <div className="flex overflow-y-auto flex-col gap-[16px] no-scrollbar" style={{ height: "calc(100vh - 230px)" }}>
                    {user?.wallets?.map(wallet =>
                        wallet.transictions.map(transaction => (
                            <TransactionBlock
                                date={transaction.date}
                                cardName={wallet.name}
                                cardNumber={wallet.cardNumber}
                                amount={transaction.amount}
                                statement={transaction.actionType}
                            />
                        ))
                    )}
                </div>
                <div className="absolute w-full h-[25%] left-0 bottom-0" style={{ background: "linear-gradient(180deg, rgba(15, 11, 56, 0) 8.84%, #0F0B38 100%)" }}></div>
            </div>
        </>
    );
}

export default Transiction;

