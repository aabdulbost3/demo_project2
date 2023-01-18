
import { LoginDiv , ImgDiv , Div} from "./styled-index"
import Img1 from "../../../assets/client/login/1.png"
import axios from "axios"
import { useRef } from "react"
import { useNavigate } from "react-router-dom"

function Login() {

    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()

    const HendelLogin = async (e) => {
        e.preventDefault()

        try {
            const body = {
                email : email.current.value,
                password: password.current.value
            }
            const response = await axios.post("https://x8ki-letl-twmt.n7.xano.io/api:vR9Klpfo/auth/login" , body)
            if(response.data) {
                window.localStorage.setItem("authToken" , response.data.authToken)
                navigate("/admin/dashboard")
            }
        } catch (error) {
            
        }
    }
    return (
        <>
            <LoginDiv>
                <ImgDiv>
                    <img src={Img1} alt="loginPhoto" />
                </ImgDiv>
                <Div>
                    <h2>Rever Hotel</h2>
                    <p>Добро пожаловать на внутреннюю платфому reverhotel.uz ! Доступ есть только у администраторов</p>
                    <form>
                        <label>Email</label>
                        <input ref={email} type="email" placeholder="email..." />

                        <label>Password</label>
                        <input ref={password} type="password" placeholder="password..." />

                        <button onClick={HendelLogin}>Enter</button>
                    </form>
                </Div>
            </LoginDiv>
        </>
    )
}
export default Login;