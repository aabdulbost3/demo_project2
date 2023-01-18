import { DataClient } from "./data-router"
import { Routes, Route } from "react-router-dom"
import Header from "../../components/client/Header"
import Footer from "../../components/client/Footer"
function ClientRouterComponent() {
    return (
        <>
            <Header />
            <Routes>
                {DataClient.map((elem, index) =>
                    <Route key={index} path={elem.path} element={elem.element} />
                )}
            </Routes>
            <Footer />
        </>
    )
}
export default ClientRouterComponent