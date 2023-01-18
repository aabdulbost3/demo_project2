import { DataAdmin } from "./data-router"
import {Routes ,Route} from "react-router-dom"
import { WrapperContainerAdmin } from "./styled-index"
function AdminRouterComponent() {

    return(
        < WrapperContainerAdmin>
            <Routes>
                {DataAdmin.map((elem , index) =>
                    <Route key={index} path={elem.path}  element={elem.element} />
                )}
            </Routes>
        </WrapperContainerAdmin>
    )
}
export default AdminRouterComponent