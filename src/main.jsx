import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

//если переименую в TS, то заюзаю этот код

// const rootElement = document.getElementById('root') as HTMLElement;

// ReactDOM.createRoot(rootElement).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
