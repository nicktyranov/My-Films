import { useLoaderData } from 'react-router-dom';
// import styles from './Movie.module.css';
import { MovieInterface } from '../../interfaces/Movie.interface';

export function Movie() {
	const data = useLoaderData() as { data: MovieInterface };
	console.log(data);
	//не могу решить проблему
	// Свойство "short" не существует в типе "{ data: MovieInterface; }".
	console.log(data.short);
	return <>
		{data ? (
			<>Movie – {data.short.name}</> 
		) : (
			'Loading...' 
		)}
	</>;

}