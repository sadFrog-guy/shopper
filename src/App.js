import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home";
import Shop from "./pages/shop";
import Detail from "./pages/detail";
import Basket from "./pages/basket";
import {useContext, useEffect} from "react";
import {Context} from "./index";
import {fetchBrands, fetchLastProduct, fetchProducts, fetchTypes} from "./service/productAPI";
import {observer} from "mobx-react-lite";
import AdminMenu from "./components/UI/AdminMenu/AdminMenu";

const App = observer(() => {
    const {product} = useContext(Context)

    useEffect(() => {
        fetchLastProduct().then(data => product.setLast(data.data))
    }, [])

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/products" element={<Shop/>}/>
                <Route path="/products/:productId" element={<Detail/>}/>
                <Route path="/basket" element={<Basket/>}/>
            </Routes>
        </Router>
    );
})

export default App;
