import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { OnlineStatusProvider } from './store/OnlineStatus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <OnlineStatusProvider>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </OnlineStatusProvider>
);

