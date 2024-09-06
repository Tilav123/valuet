import React, { useState, useRef, useEffect } from "react";
import Button from '@mui/material/Button';
import Balance from "../components/Balance";
import OtherCard from "../components/OtherCard";
import MarketGraphic from "../components/MarketGraphic";
import RecentTransactions from "../ccontainers/RecentTransactions";
function Wallets({ add }) {
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
    let [formData, setFormData] = useState({
        name: '',
        balance: '',
        validity: '',
        cardNumber: '',
        type: '',
    });
    const [errors, setErrors] = useState({});

    const cardTypes = ['Visa', 'MasterCard', 'American Express', 'Discover'];

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = 'Name is required';
        if (!formData.balance) {
            tempErrors.balance = 'Balance is required';
        } else if (!/^\d+(\.\d{1,2})?$/.test(formData.balance)) {
            tempErrors.balance = 'Enter a valid balance (numbers only)';
        }
        if (!formData.validity) {
            tempErrors.validity = 'Validity period is required';
        } else if (!/^(0[1-9]|1[0-2])\/?([0-9]{2})$/.test(formData.validity)) {
            tempErrors.validity = 'Enter a valid date (MM/YY)';
        }
        if (!formData.cardNumber) {
            tempErrors.cardNumber = 'Card number is required';
        } else if (!/^\d{16}$/.test(formData.cardNumber)) {
            tempErrors.cardNumber = 'Enter a valid 16-digit card number';
        }
        if (!formData.type) tempErrors.type = 'Card type is required';
        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            console.log('Form data:', formData);
            add(formData)
            onClose();
        }
    };
    const [isModalOpen, setIsModalOpen] = useState(false);
    const onOpen = () => {
        setIsModalOpen(true);
    };
    const onClose = () => {
        setIsModalOpen(false);
    };
    let [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" style={isModalOpen ? { display: "flex" } : { display: "none" }}>
                <div className="rounded-lg p-6 w-96 text-white max-[425px]:w-full max-[425px]:h-full" style={{ background: "radial-gradient(46.41% 73.99% at 46.63% 48.05%, #20135C 0%, #140739 92.82%)" }}>
                    <h2 className="text-xl font-semibold mb-4">Enter Card Details</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                maxLength={15}
                                className={`w-full p-2 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded bg-[#2E3558] outline-none border-none`}
                            />
                            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Balance (USD)</label>
                            <input
                                type="number"
                                name="balance"
                                value={formData.balance}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.balance ? 'border-red-500' : 'border-gray-300'} rounded bg-[#2E3558] outline-none border-none`}
                            />
                            {errors.balance && <p className="text-red-500 text-xs">{errors.balance}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Validity Period (MM/YY)</label>
                            <input
                                type="text"
                                name="validity"
                                value={formData.validity}
                                onChange={handleChange}
                                placeholder="MM/YY"
                                className={`w-full p-2 border ${errors.validity ? 'border-red-500' : 'border-gray-300'} rounded bg-[#2E3558] outline-none border-none`}
                            />
                            {errors.validity && <p className="text-red-500 text-xs">{errors.validity}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Card Number</label>
                            <input
                                type="text"
                                name="cardNumber"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.cardNumber ? 'border-red-500' : 'border-gray-300'} rounded bg-[#2E3558] outline-none border-none`}
                            />
                            {errors.cardNumber && <p className="text-red-500 text-xs">{errors.cardNumber}</p>}
                        </div>
                        <div className="mb-4">
                            <label className="block text-sm font-medium mb-1">Card Type</label>
                            <select
                                name="type"
                                value={formData.type}
                                onChange={handleChange}
                                className={`w-full p-2 border ${errors.type ? 'border-red-500' : 'border-gray-300'} rounded bg-[#2E3558] outline-none border-none`}
                            >
                                <option value="">Select Card Type</option>
                                {cardTypes.map((type) => (
                                    <option key={type} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                            {errors.type && <p className="text-red-500 text-xs">{errors.type}</p>}
                        </div>

                        <div className="flex justify-end">
                            <button
                                type="button"
                                className="mr-2 px-4 py-2 bg-red-500 rounded"
                                onClick={onClose}
                            >
                                Cancel
                            </button>
                            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
                                Submit
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <div className="w-auto max-w-[1271px]">
                <div className="flex justify-between items-center">
                    <p className="text-white font-sans text-[18px] font-medium mt-[28px] mb-[24px]">Wallets</p>
                    <Button variant="contained" className="w-[125px] h-[32px] addwidget" onClick={onOpen}>
                        Add Wallet
                    </Button>
                </div>
                <div className="flex gap-[16px] max-[870px]:flex-wrap">
                    <Balance changes={true} />
                    <div
                        ref={carouselRef}
                        className="flex-grow flex gap-[24.5px] overflow-x-auto whitespace-nowrap carousel justify-between"
                        onMouseDown={handleMouseDown}
                        onMouseMove={handleMouseMove}
                        onMouseUp={handleMouseUp}
                    >
                        {!user ? (
                            <>
                                <OtherCard title={"BitCoin"} image={"/bitCoin.png"} firstColor={"#604392"} secondColor={"#4D337F80"} balance={5245} type={"market"}/>
                                <OtherCard title={"Ethereum"} image={"/ethereum.png"} firstColor={"#6162D6"} secondColor={"#4948A866"} balance={5245} type={"market"}/>
                                <OtherCard title={"Dash"} image={"/dashLogo.png"} firstColor={"#72EB38"} secondColor={"#6CBA6080"} balance={5245} type={"market"}/>
                            </>
                        ) : (
                            <>
                                {user.wallets.map((wallet, index) => (
                                    <OtherCard title={wallet.name} index={index} image={wallet.type === 'Visa' 
                                        ? '/visaIcon.png'
                                        : wallet.type === 'MasterCard'
                                        ? '/mastercardIcon.png'
                                        : wallet.type === 'American Express'
                                        ? '/americanExpressIcon.png'
                                        : wallet.type === 'Discover'
                                        ? '/discoverIcon.png'
                                        : ''} firstColor={wallet.type === 'Visa' 
                                            ? '#6162D6'
                                            : wallet.type === 'MasterCard'
                                            ? '#8A8A8A'
                                            : wallet.type === 'American Express'
                                            ? '#006CC9'
                                            : wallet.type === 'Discover'
                                            ? '#006CC9'
                                            : ''} secondColor={wallet.type === 'Visa' 
                                                ? '#4948A866'
                                                : wallet.type === 'MasterCard'
                                                ? '#626262'
                                                : wallet.type === 'American Express'
                                                ? '#014988'
                                                : wallet.type === 'Discover'
                                                ? '#232342'
                                                : ''} type={wallet.type} balance={wallet.balance}></OtherCard>
                                ))}
                            </>
                        )
                        }

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
