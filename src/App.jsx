import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Index from "./components/pages/Index";
import Category from "./components/pages/Category";
import Error from "./components/pages/Error";
import "./App.css";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Index />} />
                    <Route path="category/:categoryName" element={<Category />} />
                    
                </Route>
            </Routes>
        </BrowserRouter>


    )
}

export default App;