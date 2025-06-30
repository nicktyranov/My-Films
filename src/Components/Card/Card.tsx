import { useCallback, useEffect, useState } from 'react';
import cl from 'classnames';
import styles from './Card.module.css';
import bookmarkIcon from '../../assets/Bookmark.svg';
import likeIcon from '../../assets/like.svg';
import starIcon from '../../assets/star.svg';
import { CardProps } from './Card.props';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites } from '../../store/favoritesSlice';
import { RootState } from '../../store/store';

const backupImg = '/backUpImage.jpg';

function Card({ id, inFavorites, img, rating, title }:CardProps) {
	const [isInFavorites, setIsInFavorites] = useState(inFavorites);

	const userName = useSelector((s: RootState) => s.user.userName);
	const isLogined = useSelector((s: RootState) => s.user.isLogined);
	const favoritesData = useSelector((state: RootState)=> state.favorites.items);
	const dispatch = useDispatch();

	useEffect(() => {
		const isFilmInFavorites = favoritesData.some((film) => film.id === id);
		setIsInFavorites(isFilmInFavorites);
	}, [id, favoritesData]);
	
	const iconFavorite = isInFavorites ? bookmarkIcon : likeIcon;
	const textFavorite = isInFavorites ? 'In favorites' : 'To favorites';

	const classNameFavorites = cl({
		[styles.favorites]: true,
		[styles.inFavorites]: isInFavorites
	});

	const handleFavoriteClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
		e.preventDefault();
		if (!isLogined) {
			alert('You must sign in to add to favorites');
			return;
		}
		dispatch(addToFavorites({ title, rating, img, id, userName }));
	}, [dispatch, isLogined, title, rating, img, id, userName]);

	return (
		<>
			<Link to={`/movie/${id}`} className={styles.link}>
				<div className={styles.card} data-testid="card">
					<img
						src={img || backupImg}
						onError={(e) => {
							const target = e.target as HTMLImageElement; 
							target.onerror = null;
							target.src = backupImg;
						}}
						className={styles['card-poster']}
						alt={title}
						data-testid="cardImg"
					/>
					
					<div className={styles.rating}>
						<img src={starIcon} alt="rating icon" data-testid="starIcon"/>
						<span className={styles.ratingNum} data-testid="ratingNum">{rating ?? '0'}</span>
					</div>

					<div className={styles['card-text']}>
						<h2 className={styles['heading-film']} data-testid="cardHeading">{title}</h2>
						<div
							className={classNameFavorites}
							onClick={(e) => {
								handleFavoriteClick(e);}} data-testid="favoriteFn">
							<img src={iconFavorite} alt="like/dislike icon"  data-testid="iconFavorite"/>
							{textFavorite}
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}

export default Card;