import "./style.scss";
import { Auth } from "../../common/MALDITOLOGIN/AuthContext";
import { useState, useEffect,useCallback } from "react";
import { onAuthStateChanged } from "@firebase/auth";
import { auth } from "../../common/MALDITOLOGIN/firebaseConfig";



export function Logon() {

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

    const testao = useCallback((e:any) => {
        e.preventDefault();
        Auth(email, password);
    }, [email, password]);
    return (


                <form>
                    <div>
                        <h2 className="title">Athena</h2>
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

                        <button onClick={testao}>Logar</button>
                    </div>
                </form>

    );

}