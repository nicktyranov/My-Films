import styles from './LoginPage.module.css';
import Login from '../../Components/Login/Login';
import { Helmet } from 'react-helmet';

export function LoginPage() {
	return <>
		<Helmet>
			<title>My Films | Login</title>
			<meta name="description" content="My Films | Login page. Sign in your account to save your favorites films and movies for later" />
		</Helmet>
		<Login/>
	</>;
}