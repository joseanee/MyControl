import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/themes/globalStyles";
import UserContext from "./context/UserContext";
import InitialPage from "./pages/InitialPage/index";
import ClienteRegister from "./pages/ClienteRegister";

export default function App(){
    const userContext = {}

    return(
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={userContext}>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/client/add" element={<ClienteRegister />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
