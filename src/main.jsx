import App from './App.jsx'
import './index.css'
import { Toaster } from 'react-hot-toast';
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store.js';


ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <BrowserRouter>
             <App />
             <Toaster/>
         </BrowserRouter>
    </Provider>


)
