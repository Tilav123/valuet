import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login({ path }) {
    const [isShowed, setIsShowed] = useState(false);
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();
    let user = localStorage.getItem("user")
    useEffect(() => {
        if (user) {
            navigate("/")
        }
    })
    const onSubmit = async (data) => {
        try {
            if (data) {
                console.log(data);
                if (!data.name) {
                    // Вход
                    const response = await fetch('http://localhost:8080/users');
                    const users = await response.json();
                    
                    const user = users.find(user => user.email === data.email && user.password === data.password);

                    if (!user) {
                        console.log("Нет совпадений");
                    } else {
                        localStorage.setItem('user', JSON.stringify(user));
                    }
                } else if(data.name) {
                    // Регистрация
                    data.wallets = []
                    const response = await fetch('http://localhost:8080/users', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify(data)
                    });

                    if (!response.ok) {
                        throw new Error('Ошибка регистрации');
                    }
                    const user = await response.json();
                    localStorage.setItem('user', JSON.stringify(user));
                }
            }
        } catch (error) {
            console.error('Ошибка при обработке запроса:', error.message);
        }
    };


    useEffect(() => {
        reset();
    }, [path, reset]);

    return (
        <>
            <div className="h-[100vh] relative flex justify-center gap-[260px] items-center max-[1150px]:gap-0 max-[1150px]:justify-between max-[1150px]:px-[40px] max-[900px]:flex-col-reverse max-[900px]:justify-center max-[900px]:gap-[25px] max-[630px]:p-0">
                <img src="./faceWave.png" alt="" className="face_wave z-0 absolute right-0 bottom-0 h-[557px] w-auto" />
                <img src="./belowWave.png" alt="" className="below_wave z-1 absolute right-0 bottom-0 h-[766px] w-auto" />
                <div className="w-[480px] h-[646px] form relative z-3 flex flex-col py-[82px] max-[900px]:gap-[40px] max-[630px]:py-0 max-[630px]:w-[380px] max-[630px]:px-[0px] max-[630px]:h-auto left_register_form max-[450px]:w-full max-[450px]:px-[15px]">
                    <p className="text-white font-['Roboto'] text-[36px] text-center font-medium ">Welcome!</p>
                    <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-[26px] w-[380px] m-auto max-[630px]:w-full">
                        {!path && (
                            <>
                                <div className={`w-full fatherFromInput relative h-[58px] flex justify-between items-center px-[16px] ${errors.name ? "error" : ""}`}>
                                    <div className="form_input_img max-[340px]:hidden" style={{ background: "url(/userImage.png) no-repeat center" }}></div>
                                    <input
                                        type="text"
                                        name="name"
                                        className="form_input font-['Roboto'] h-full flex-grow px-[16px] max-[340px]:p-0"
                                        placeholder="Name"
                                        {...register("name", { required: "Name is required" })}
                                    />
                                </div>
                                <div className={`w-full fatherFromInput relative h-[58px] flex justify-between items-center px-[16px] ${errors.surname ? "error" : ""}`}>
                                    <div className="form_input_img max-[340px]:hidden" style={{ background: "url(/userImage.png) no-repeat center" }}></div>
                                    <input
                                        type="text"
                                        name="surname"
                                        className="form_input font-['Roboto'] h-full flex-grow px-[16px] max-[340px]:p-0"
                                        placeholder="Surname"
                                        {...register("surname", { required: "Surname is required" })}
                                    />
                                </div>
                            </>
                        )}
                        <div className={`w-full fatherFromInput relative h-[58px] flex justify-between items-center px-[16px] ${errors.email ? "error" : ""}`}>
                            <div className="form_input_img max-[340px]:hidden" style={{ background: "url(/mailIcon.png) no-repeat center" }}></div>
                            <input
                                type="text"
                                name="email"
                                className="form_input font-['Roboto'] h-full flex-grow px-[16px] max-[340px]:p-0"
                                placeholder="E-mail"
                                {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                        message: "Email must be a valid email address"
                                    }
                                })}
                            />
                        </div>
                        <div className={`w-full fatherFromInput relative h-[58px] flex justify-between items-center px-[16px] ${errors.password ? "error" : ""}`}>
                            <div className="form_input_img max-[340px]:hidden" style={{ background: "url(/passwordImage.png) no-repeat center" }}></div>
                            <input
                                type={isShowed ? "text" : "password"}
                                minLength={8}
                                name="password"
                                className="form_input font-['Roboto'] h-full flex-grow px-[16px] max-[340px]:p-0"
                                placeholder="Password"
                                {...register("password", { required: "Password is required", minLength: { value: 8, message: "Password must be at least 8 characters long" } })}
                            />
                            <img
                                src={isShowed ? "/isshowed.png" : "/isnotshowed.png"}
                                alt=""
                                className={`w-[25px] ${isShowed ? "h-[24.8px]" : "h-[21px]"} cursor-pointer`}
                                onClick={() => setIsShowed(!isShowed)}
                            />
                        </div>
                        <div className={`flex justify-center gap-[32px] ${!path ? "mt-[0px]" : "mt-[38px]"} max-[630px]:mt-0`}>
                            <Button
                                onClick={path ? () => navigate('/signup') : () => console.log("submit")}
                                variant="contained"
                                type={path ? "button" : "submit"}
                                className="uppercase w-[105px] h-[42px]"
                                style={!path ? {
                                    background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                                } : {
                                    background: "linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%)",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                                    color: "rgba(148, 158, 192, 1)",
                                }}
                            >
                                Sign up
                            </Button>
                            <Button
                                onClick={path ? () => console.log("submit") : () => navigate('/signin')}
                                variant="contained"
                                type={path ? "submit" : "button"}
                                className="uppercase w-[105px] h-[42px]"
                                style={path ? {
                                    background: "linear-gradient(271.88deg, #3887FE 4.26%, #3BA0FF 51.37%, #5FB2FF 99.01%)",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                                } : {
                                    background: "linear-gradient(88.43deg, #2F3453 11.5%, #242845 76.7%)",
                                    borderRadius: "8px",
                                    boxShadow: "0px 4px 12px 0px rgba(0, 0, 0, 0.15)",
                                    color: "rgba(148, 158, 192, 1)",
                                }}
                            >
                                Sign in
                            </Button>
                        </div>
                    </form>
                    <a href="" style={{ color: "rgba(95, 178, 255, 1)" }} className="text-[14px] text-center w-full block forgottenPassword" onClick={(e) => alert("Sorry ! But it is not our problem !")}>
                        Forgot your password?
                    </a>
                </div>
                <div className="relative z-3 flex flex-col items-center titles">
                    <h1 className="title text-[72px] font-sans font-bold">VALUET</h1>
                    <hr className="hr w-[175px] rounded" />
                    <p className="text-white font-['Roboto'] mt-[24px] font-light">Your currency dashboard</p>
                </div>
            </div>
        </>
    );
}

export default Login;
