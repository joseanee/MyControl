import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/themes/globalStyles";
import UserContext from "./context/UserContext";
import InitialPage from "./pages/InitialPage/index";

export default function App(){
    const userContext = {}

    return(
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={userContext}>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
