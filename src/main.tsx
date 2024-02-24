import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { Favotites } from './Pages/Favotites/Favotites';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Movie } from './Pages/Movie/Movie';
import { HomePage } from './Pages/HomePage/HomePage';
import { CurrentUserProvider } from './context/user.context';
import { Error } from './Pages/Error/Error';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage/>,
			},
			{
				path: '/login',
				element: <LoginPage/>,
			},
			{
				path: '/favotites',
				element: <Favotites/>,
			},
			{
				path: '/movie/:id',
				element: <Movie/>,
			},
			{
				path: '*',
				element: <Error />
			}
		]
	},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CurrentUserProvider>
			<RouterProvider router={router} />
		</CurrentUserProvider>
	</React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')!).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );


