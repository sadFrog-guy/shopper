import React, {createContext} from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ProductStore from './store/product'
import SortStore from './store/sort'
import { createRoot } from 'react-dom/client';
import ProductBasket from "./store/productBasket";


export const Context = createContext(null)

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <Context.Provider value={{
        product: new ProductStore(),
        sort: new SortStore(),
        basket: new ProductBasket(),
    }}>
        <App />
    </Context.Provider>
);
