import { useState } from 'react';

import cl from 'classnames';
import styles from './Card.module.css';
import bookmarkIcon from '../../assets/Bookmark.svg';
import likeIcon from '../../assets/like.svg';
import starIcon from '../../assets/star.svg';
import { CardProps } from './Card.props';


function Card({ inFavorites, img, rating, heading }:CardProps) {
	const [isInFavorites, setIsInFavorites] = useState(inFavorites);

	const iconFavorite = isInFavorites ? bookmarkIcon : likeIcon;
	const textFavorite = isInFavorites ? 'В избранном' : 'В избранное';

	const classNameFavorites = cl({
		[styles.favorites]: true,
		[styles.inFavorites]: isInFavorites
	});
	

	return (
		<>
			<div className={styles.card}>
				<img className={styles['card-poster']} src={img} alt={heading} />
				<div className={styles.rating}>
				
					<img src={starIcon} alt="rating icon" />
					<span className={styles.ratingNum}>{rating}</span>
				</div>
				<div className={styles['card-text']}>
					<h2 className={styles['heading-film']}>{heading}</h2>
					<div className={classNameFavorites}>
						<img src={iconFavorite} alt="like/dislike icon" />
						{textFavorite}
					</div>
				</div>
			</div>
		</>
	);
}

export default Card;