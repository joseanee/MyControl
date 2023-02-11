import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyle from "../src/themes/globalStyles";
import UserContext from "./context/UserContext";
import InitialPage from "./pages/InitialPage/index";
import ClienteRegister from "./pages/ClienteRegister";
import ClientesPage from "./pages/ClientesPage";
import ClienteUpdate from "./pages/ClienteUpdate";
import ProductRegister from "./pages/ProductRegister";
import ProductsPage from "./pages/ProductsPage";

export default function App(){
    const userContext = {}

    return(
        <BrowserRouter>
            <GlobalStyle />
            <UserContext.Provider value={userContext}>
                <Routes>
                    <Route path="/" element={<InitialPage />} />
                    <Route path="/client/add" element={<ClienteRegister />} />
                    <Route path="/clients" element={<ClientesPage />} />
                    <Route path="/clients/update/:id" element={<ClienteUpdate />} />
                    <Route path="/products/add" element={<ProductRegister />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </UserContext.Provider>
        </BrowserRouter>
    )
}
