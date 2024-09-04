import React, { useEffect, useState } from "react";
import { Outlet } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
function Layout() {
    let [flag,setFlag] = useState(false)
    let location = useLocation()
    const navigate = useNavigate()
    let user = localStorage.getItem('user')
    useEffect(() => {
        if (!user){
            navigate("/login")
        }
    }, [])
    const handleLogout = () => {
        localStorage.removeItem('user');
        window.location.reload();
      };
    return (
        <>
            <div className="flex h-[100vh]">
                <aside className={`w-[220px] px-[15px] pt-[21px] pb-[17px] flex flex-col justify-between items-center flex-shrink max-[765px]:fixed transition-all max-[765px]:left-[-100%] max-[765px]:w-full max-[765px]:z-50 max-[765px]:h-full max-[765px]:top-0`} style={flag ? {left: 0} : {left: "-100%"}}>
                    <div className="w-full">
                        <h1 className="title text-[24px] text-center font-sans font-bold" style={{ filter: "drop-shadow(0px 5px 12px 0px rgba(6, 5, 19, 0.25))" }} onClick={()=> setFlag(!flag)}>VALUET</h1>
                        <hr className="hr w-[100px] rounded m-auto" />
                        <div className="flex flex-col gap-[5px] mt-[40px]">
                            <div className={`aside_part h-[46px] ${location.pathname == "/" ? "fatherFromInput after:w-full relative" : ""}`} onClick={()=> navigate("/")}>
                                <img src="/overview.png" alt="" className="w-[16px] h-auto" />
                                <p className="font-sans text-[14px] text-white">Overview</p>
                            </div>
                            <div className={`aside_part h-[46px] ${location.pathname == "/wallets" ? "fatherFromInput after:w-full relative" : ""}`} onClick={()=> navigate("/wallets")}>
                                <img src="/wallet.png" alt="" className="w-[16px] h-auto" />
                                <p className="font-sans text-[14px] text-white">Wallets</p>
                            </div>
                            <div className={`aside_part h-[46px] ${location.pathname == "/transictions" ? "fatherFromInput after:w-full relative" : ""}`} onClick={()=> navigate("/transictions")}>
                                <img src="/transictions.png" alt="" className="w-[16px] h-auto" />
                                <p className="font-sans text-[14px] text-white">Transictions</p>
                            </div>
                            <div className={`aside_part h-[46px] ${location.pathname == "/exchange" ? "fatherFromInput after:w-full relative" : ""}`} onClick={()=> navigate("/exchange")}>
                                <img src="/exchange.png" alt="" className="w-[16px] h-auto" />
                                <p className="font-sans text-[14px] text-white">Exchange</p>
                            </div>
                            <div className={`aside_part h-[46px] ${location.pathname == "/market" ? "fatherFromInput after:w-full relative" : ""}`} onClick={()=> navigate("/market")}>
                                <img src="/market.png" alt="" className="w-[16px] h-auto" />
                                <p className="font-sans text-[14px] text-white">Market</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <hr className="hr w-[171px] rounded m-auto max-[765px]:w-full" />
                        <div className="aside_part h-[46px]">
                            <img src="/market.png" alt="" className="w-[22px] h-auto" style={{ border: "1px solid rgba(1, 143, 255, 1)", borderRadius: '50%' }} />
                            <p className="font-sans text-[14px] text-white">Tilav</p>
                        </div>
                        <div className="aside_part h-[46px]" onClick={handleLogout}>
                            <img src="/logout.png" alt="" className="w-[16px] h-auto" />
                            <p className="font-sans text-[14px] text-white">Log out</p>
                        </div>
                    </div>
                </aside>
                <main className="px-[32px] flex-grow max-[400px]:px-[16px] pb-[20px]">
                    <header className="h-[88px] w-full flex justify-between items-center max-[520px]:gap-[24px]" style={{ borderBottom: "1px solid rgba(45, 49, 122, 1)" }}>
                        <div className="storing_search_input relative max-[520px]:flex-grow">
                            <input type="text" name="" id="" className="header_search_input text-[14px] max-[520px]:w-full" />
                        </div>
                        <div className="flex gap-[32px] max-[520px]:gap-[24px]">
                            <div className="header_icon" style={{background: "url('/messageIcon.png') no-repeat center"}}>
                                <div className="w-[16px] h-[16px] quantityOnIcon font-sans">1</div>
                            </div>
                            <div className="header_icon" style={{background: "url('/notificationIcon.png') no-repeat center"}}>
                                <div className="w-[16px] h-[16px] quantityOnIcon font-sans">8</div>
                            </div>
                            <div className="header_icon hidden max-[765px]:block" style={{background: "url('/burgerMenu.png') no-repeat center"}} onClick={()=> setFlag(!flag)}></div>
                        </div>
                    </header>
                    <Outlet></Outlet>
                </main>
            </div>
        </>
    )
}
export default Layout;