import { useNavigate } from "react-router-dom";
import { useLogin } from "../context/LoginContext";
import { useState } from "react";


const LoginView = ()=>{
    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");

    const { login, isAuthenticated } = useLogin();

    const navigate = useNavigate();


    const handleSubmit = (e)=>{
        e.preventDefault();
        const result = login(username, password);
        if(result.success){
        isAuthenticated(true);
        navigate("/");
    }
}

    return(
        <div className="bg-gradient-to-r from-orange-400 via-orange-700 to-orange-500 rounded ml-2 mr-2 py-5">
        <h1 className="text-center font-bold text-xl mt-3">LOGIN</h1>
        <form onSubmit={handleSubmit}
            className="grid py-[18%] ml-[27%]">
            <label className="mb-3">
                <input
                    type="text"
                    placeholder="Username..."
                    value={username}
                    onChange={(e)=> setUsername(e.target.value)}
                    required
                    className="rounded py-1"
                    />
            </label>

            <label>
                <input
                    type="password"
                    placeholder="Password..."
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    required
                    className="rounded py-1"
                    />
            </label>
            <div >
            <button type="submit"
                    className="py-2 mt-4 pl-2 pr-2 ml-14 rounded border font-bold bg-gray-500 text-white border-gray-600 hover:scale-105">Login</button>
            </div>
        </form>
        </div>
    )
}

export default LoginView;