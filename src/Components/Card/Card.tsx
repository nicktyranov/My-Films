import { useState } from 'react';

import cl from 'classnames';
import styles from './Card.module.css';
import bookmarkIcon from '../../assets/Bookmark.svg';
import likeIcon from '../../assets/like.svg';
import starIcon from '../../assets/star.svg';
import { CardProps } from './Card.props';
import { Link } from 'react-router-dom';

const backupImg = '/public/backUpImage.jpg';

function Card({ id, inFavorites, img, rating, title }:CardProps) {
	const [isInFavorites, setIsInFavorites] = useState(inFavorites);

	const iconFavorite = isInFavorites ? bookmarkIcon : likeIcon;
	const textFavorite = isInFavorites ? 'В избранном' : 'В избранное';

	const classNameFavorites = cl({
		[styles.favorites]: true,
		[styles.inFavorites]: isInFavorites
	});

	return (
		<>
			<Link to={`/movie/${id}`} className={styles.link}>
				<div className={styles.card}>
					<img
						src={img || backupImg}
						onError={(e) => {
							const target = e.target as HTMLImageElement; // Явное приведение типа
							target.onerror = null; // Это предотвратит повторное срабатывание onError
							target.src = backupImg;
						}}
						className={styles['card-poster']}
						alt={title} />
				
					<div className={styles.rating}>
						<img src={starIcon} alt="rating icon" />
						<span className={styles.ratingNum}>{rating}</span>
					</div>

					<div className={styles['card-text']}>
						<h2 className={styles['heading-film']}>{title}</h2>
						<div className={classNameFavorites}>
							<img src={iconFavorite} alt="like/dislike icon" />
							{textFavorite}
						</div>
					</div>
				</div>
			</Link>
		</>
	);
}

export default Card;