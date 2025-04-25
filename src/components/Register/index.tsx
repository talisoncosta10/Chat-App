import { FaUserPlus } from "react-icons/fa"

export default function Register() {
    return (
        <div className="">
            <section className="flex flex-col justify-center items-center h-[100vh] background-image">
                <div className="bg-white shadow-lg p-5 rounded-x1 h-[27rem] w-[20rem] flex flex-col justify-center items-center">
                    <div className="mb-10">
                        <h1 className="text-center text-[28px] font-bold">Criar Conta</h1>
                        <p className="text-center text-sm text-gray-400">Bem vindo, crie uma conta para continuar</p>
                    </div>
                    <div className="w-full">
                        <input type="text" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]" placeholder="Nome Completo"/>
                        <input type="email" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3] mb-3 font-medium outline-none placeholder:text-[#00493958]" placeholder="Digite seu e-mail"/>
                        <input type="password" className="border border-green-200 w-full p-2 rounded-md bg-[#01aa851d] text-[#004939f3]" placeholder="Digite sua senha"/>
                    </div>
                    <div className="w-full">
                        <button className="bg-[#01aa85] text-white font-bold w-full p-2 rounded-md flex items-center gap-2 justify-center">Cadastrar <FaUserPlus /> </button>
                    </div>
                    <div className="mt-5 text-center text-gray-400 text-sm">
                        <button className="">Já possui cadastro? Clique aqui</button>
                    </div>
                </div>
            </section>
        </div>
    )
}


// import React from 'react'

// const Register = () => {
//     return (
//         <div>Register</div>
//     )
// }

// export default Register

