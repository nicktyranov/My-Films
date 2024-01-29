import './Card.css';

function Card({ inFavorites, img, rating, heading }) {
	let classNameFavorites;
	let iconFavorite;
	let textFavorite;
	if (inFavorites) {
		classNameFavorites = 'favorites inFavorites';
		iconFavorite = '../../public/Bookmark.svg';
		textFavorite = 'В избранном';
	} else {
		classNameFavorites = 'favorites';
		iconFavorite = '../../public/like.svg';
		textFavorite = 'В избранное';
	}

	return (
		<>
			<div className='card'>
				<img className='card-poster' src={img} alt={heading} />
				<div className='rating'>
					<img src="../../public/star.svg" alt="rating icon" /> 
					<span className='ratingNum'>{rating}</span>
				</div>
				<div className='card-text'>
					<h2 className='heading-film'>{heading}</h2>
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

// (
//         <>
// <div className='card'>
//     <img className='card-poster' src={img} alt={heading} />
//     <div className='rating'>
//         <img src="../../public/star.svg" alt="rating icon" /> 
//         <span className='ratingNum'>{rating}</span>
//     </div>
//     <div className='card-text'>
//         <h2>{heading}</h2>
//                     {/* ... остальная часть вашей логики ... */}
//                 </div>
//             </div>
//         </>
//     );
// }