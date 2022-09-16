import "./style.scss";
import { Auth } from "../../authenticated/AuthContext";
import { useState, useEffect, useCallback } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../authenticated/firebaseConfig";
import { CustomerContext } from "../../common/MALDITOLOGIN/Context";


export const Logon = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, setUser] = useState({});
    useEffect(() => {
        const AuthCheck = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(false);
            }
        });
        return () => AuthCheck();
    }, []);

    const handleSubmit = useCallback((e: any) => {
        e.preventDefault();
        Auth(email, password);
    }, [email, password]);


    return (

        <div>
            <form>
                <div>
                    <CustomerContext.Provider value={{ onsubmit: handleSubmit }}>
                        <input
                            placeholder="Email"
                            onChange={(e) => setEmail(e.target.value)}
                            type="email"
                            id="usuario" />
                        <input
                            placeholder="Senha"
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"
                            id="senha" />

                        <button onSubmit={handleSubmit}>Logar</button>
                    </CustomerContext.Provider>
                </div>
            </form>
        </div>

    );

}
