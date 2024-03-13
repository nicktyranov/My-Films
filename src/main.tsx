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


const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/',
				element: <RequireAuth><HomePage/></RequireAuth>
			},
			{
				path: '/login',
				element: <LoginPage/>
			},
			{
				path: '/favotites',
				element: <RequireAuth><Favorites/></RequireAuth>
			},
			{
				path: '/movie/:id',
				element: <RequireAuth><Movie /></RequireAuth>,
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
				element: <RequireAuth><HomePage isError={true}/></RequireAuth>
			}
		]
	}
]);


ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Provider store={store}>
			<CurrentUserProvider>
				<RouterProvider router={router} />
			</CurrentUserProvider>
		</Provider>
	</React.StrictMode>
);




