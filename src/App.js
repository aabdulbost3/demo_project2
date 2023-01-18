import { useLocation } from "react-router-dom";
import { GlobalStyle, WrapperAdmin } from "./App-styled.js";
import { DataAdmin } from "./routes/admin/data-router";
import ClientRouterComponent from "./routes/client/index.jsx";
import AdminRouterComponent from "./routes/admin/index.jsx";
import Sidebar from "./components/admin/Sidebar/index.jsx";
function App() {
  const pathname = useLocation();
  const filter = DataAdmin.filter((e) => e.path === pathname.pathname);
  window.localStorage.setItem(
    "pathname",
    filter.map((elem) => elem.path)
  );
  return (
    <>
      <GlobalStyle />
      {pathname.pathname === "/admin" ? (
        <>
          <AdminRouterComponent />
        </>
      ) : <ClientRouterComponent /> &&
        pathname.pathname === window.localStorage.getItem("pathname") ? (
        <>
          <WrapperAdmin>
            <Sidebar />
            <AdminRouterComponent />
          </WrapperAdmin>
        </>
      ) : (
        <ClientRouterComponent />
      )}
    </>
  );
}

export default App;
