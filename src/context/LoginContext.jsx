import { createContext, useContext, useEffect, useState, } from "react";

export const LoginContext = createContext();

export function LoginProvider({children}){
    const[user, setUser] = useState(null);
    const[isAuthenticated, setIsAuthenticated] = useState(false);
   
    const login = (username, password)=>{
        const demoUser = {
            id: 1,
            username: "demo",
            password: "demo"
        }
        if(username === "demo" && password === "demo"){
        setUser(demoUser);
        setIsAuthenticated(true);
        localStorage.setItem("user", JSON.stringify(demoUser));

        return {success: true}

        }else{

            return {success: false,
                    error: "Invalid credentials. Try demo"
        }
        }
    };

        useEffect(()=>{ 
            const savedUser = localStorage.getItem("user");
            if(savedUser){
                setUser(JSON.parse(savedUser));
                setIsAuthenticated(true);
            }
        }, [])



    const value = {
            user,
            isAuthenticated,
            login
    }

    return(
        <LoginContext.Provider value={value}>
            {children}
        </LoginContext.Provider>
    )
                
    }

    export const useLogin = ()=>{
        const context = useContext(LoginContext);
        if(!context){
            throw new Error("Check the Provider!")
        }
        return context
    }
        

    
        

    
