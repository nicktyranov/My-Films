import { useLoaderData } from 'react-router-dom';
import cl from 'classnames';
import styles from './Movie.module.css';
import { MovieInterface } from '../../interfaces/Movie.interface';
import Heading from '../../Components/Heading/Heading';
import Paragrah from '../../Components/Paragrah/Paragrah';
import starIcon from '../../assets/star.svg';
import bookmarkIcon from '../../assets/Bookmark.svg';
import likeIcon from '../../assets/like.svg';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { favoritesSlice } from '../../store/favoritesSlice';

const backupImg = '/public/backUpImage.jpg';

export function Movie() {
	const data = useLoaderData() as MovieInterface;
	
	const dispatch = useDispatch();
	const [isInFavorites, setIsInFavorites] = useState(false);
	const userName = useSelector((s:RootState) => s.user.userName);
	const favoritesData = useSelector((state: RootState) => state.favorites.items);

	const id = data.imdbId as string;
	const classNameFavorites = cl({
		[styles.favorites]: true,
		[styles.inFavorites]: isInFavorites
	});
	
	useEffect(() => {
		const isFilmInFavorites = favoritesData.some((film) => film.id === id);
		setIsInFavorites(isFilmInFavorites);
	}, [id, favoritesData]);
	

	const { short } = data;

	const headingText = short.name;
	const title = headingText;

	const img = short.image;
	const description = short.description;
	const rating = short.aggregateRating?.ratingValue ?? '5.6';
		
	const typeMovie = short['@type'];
	const createdDate = short?.datePublished ?? 'N/A';

	const duration = convertDuration();

	//ковнвектор продолжительности фильма
	function convertDuration(): string {
		//"PT2H26M"
		let duration = short?.duration;
		if (!duration) {
			return 'Unknown';
		}
		duration = duration.slice(2);

		let hours = 0;
		let minutes = 0;
		let temp = '';

		for (let i = 0; i < duration.length; i++) {
			// Проверка, является ли текущий символ числом
			if (!isNaN(parseInt(duration[i]))) {
				temp += duration[i]; 
			} else {
				if (duration[i] === 'H') {
					hours = parseInt(temp); 
				} else if (duration[i] === 'M') {
					minutes = parseInt(temp);
				}
				// Сброс temp для следующего числового значения
				temp = '';
			}
		}
		return duration = hours * 60 + minutes + ' min';
	}

	const genre = short.genre.join(', ');

	const reviewDate = short?.review?.dateCreated;
	const reviewHeading = short?.review?.name;
	const reviewText = short?.review?.reviewBody ?? 'No reviews, sorry';
	
	const favoriteToggle = (e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		dispatch(favoritesSlice.actions.addToFavorites({title, rating, img, id, userName}));
	};
	
	const iconFavorite = isInFavorites ? bookmarkIcon : likeIcon;
	const textFavorite = isInFavorites ? 'В избранном' : 'В избранное';

	return <>
		{data ? (
			<div>
				<div className={styles['header']}>
					<div className={styles['menu-name']}>Поиск фильмов</div>
					<Heading
						appearance='movie'
						level={1}
						headingText={headingText}/>
				</div>
				<div className={styles['content']}>
					<div >
						<img
							src={img || backupImg}
							onError={(e) => {
								const target = e.target as HTMLImageElement; 
								target.onerror = null; // Это предотвратит повторное срабатывание onError
								target.src = backupImg;
							}}
							alt={headingText}
							className={styles['poster']} />
					</div>
					<div className={styles['film-info']}>
						<div className={styles['info-section-wrapper']}>
							<Paragrah
								text={'Description'}
								className={styles['info-label']} />
						
							<Paragrah
								text={description}
								className={styles['description']}/>
						</div>
						<div className={styles['rank-favorite']}>
							<div className={styles.rating}>
								<img src={starIcon} alt="rating icon" />
								<span className={styles.ratingNum}>{rating}</span>
							</div>
							<div
								className={styles['favorite-wrapper'] && classNameFavorites}
								onClick={favoriteToggle}>
								<img src={iconFavorite} alt="like/dislike icon" />
								{textFavorite}
							</div>
						</div>
						<div className={styles['info-section-wrapper']}>
							<Paragrah
								text={'Type'}
								className={styles['info-label']} />
							{typeMovie}
						</div>
						<div className={styles['info-section-wrapper']}>
							<Paragrah
								text={'Created'}
								className={styles['info-label']} />
							{createdDate}
						</div>
						<div className={styles['info-section-wrapper']}>
							<Paragrah
								text={'Duration'}
								className={styles['info-label']} />
							{duration}
						</div>
						<div className={styles['info-section-wrapper']}>
							<Paragrah
								text={'Genre'}
								className={styles['info-label']} />
							{genre}
						</div>
						
					</div>
				</div>

				<Paragrah text={'Reviews'} className={styles['info-label']}/>
				<div className={styles['review-wrapper']}>
					<div className={styles['review-info']}>
						<Paragrah
							text={reviewHeading}
							className={styles['review-heading']} />
						<Paragrah
							text={reviewDate}
							className={styles['review-date']}/>
					</div>
					<Paragrah
						text={reviewText}
						className={styles['review-text']} />
				</div>
			</div> 
		) : (
			'Loading...' 
		)}
	</>;

}