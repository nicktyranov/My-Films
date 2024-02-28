import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';

import { Favotites } from './Pages/Favotites/Favotites';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Movie } from './Pages/Movie/Movie';
import { HomePage } from './Pages/HomePage/HomePage';
import { CurrentUserProvider } from './context/user.context';
// import { Error } from './Pages/Error/Error';
import axios from 'axios';
import { PREFIX } from './helpers/API';


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <HomePage/>
			},
			{
				path: '/login',
				element: <LoginPage/>
			},
			{
				path: '/favotites',
				element: <Favotites/>
			},
			{
				path: '/movie/:id',
				element: <Movie />,
				errorElement: <HomePage isError={true} />,
				loader: async ({ params }) => {
					try {
						const response = await axios.get(`${PREFIX}?tt=${params.id}`);
						console.log(response);
						return response.data;
					} catch (e) {
						console.error(e);
					}
				}
			},
			{
				path: '*',
				// element: <Error /> спросить 
				element: <HomePage isError={true}/>
			}
		]
	}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<CurrentUserProvider>
			<RouterProvider router={router} />
		</CurrentUserProvider>
	</React.StrictMode>
);




