import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { useEffect } from 'react'
import { BrowserRouter } from "react-router-dom";
import { setStore } from './App/store/StoreService';
import { Provider } from 'react-redux';
import PrimarySearchAppBar from './App/pages/sidenav/PrimarySearchAppBar'

function App({ store }) {
    useEffect(() => {
        setStore(store)
    }, [store])
    return (
        <Provider store={store}>
            <BrowserRouter>
                <PrimarySearchAppBar/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
