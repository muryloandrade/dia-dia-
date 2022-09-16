import axios from "axios";
import { signInWithEmailAndPassword } from "firebase/auth"
import { auth } from "./firebaseConfig";


export const Auth = async (email: string, password: string) => {
    try {
        const usr = await signInWithEmailAndPassword(auth, email, password);
        const token = (await usr.user.getIdTokenResult()).token;
        axios.get("https://login-client-om32e3yzoa-uc.a.run.app/authentication", {
            headers: {
                Authorization: token,
            }
        }).then((response) => {
            console.log(response.data, "Deu bom o login");
        }).catch((error) => {
            console.log(error.data);
        }
        );
    }
    catch (error) {
        console.log(error);
    }
}