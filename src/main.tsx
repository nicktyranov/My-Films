import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from './Layout/Layout';
import { Favorites } from './Pages/Favorites/Favorites';
import { LoginPage } from './Pages/LoginPage/LoginPage';
import { Movie } from './Pages/Movie/Movie';
import { HomePage } from './Pages/HomePage/HomePage';
import { CurrentUserProvider } from './context/user.context';
import axios from 'axios';
import { PREFIX } from './helpers/API';
import { RequireAuth } from './Components/RequireAuth/RequireAuth';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Modal from './Components/Modal/Modal';



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
				path: '/favorites',
				element: <RequireAuth><Favorites/></RequireAuth>
			},
			{
				path: '/movie/:id',
				element: <Movie />,
				errorElement: <HomePage isError={true} />,
				loader: async ({ params }) => {
					try {
						const response = await axios.get(`${PREFIX}?tt=${params.id}`);
						return response.data;
					} catch (e) {
						throw new Error(`${e}`);
						
					}
				}
			},
			{
				path: '*',
				element: <HomePage isError={true}/>
			}
		]
	}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<CurrentUserProvider>
				<RouterProvider router={router} />
				<Modal/>
			</CurrentUserProvider>
		</Provider>
	</React.StrictMode>
);




