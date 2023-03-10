import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import { setStore } from './App/store/StoreService';
import { Provider } from 'react-redux';
import { Routes } from './App/route/Route';
function App({ store }) {
    useEffect(() => {
        setStore(store)
    }, [store])
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Routes />
            </BrowserRouter>
        </Provider>
    );
}

export default App;
