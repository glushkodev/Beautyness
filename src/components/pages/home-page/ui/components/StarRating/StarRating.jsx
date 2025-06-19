import StarFull from '../../../../../../assets/star_full.svg?react';
import StarHalf from '../../../../../../assets/star_half.svg?react';
import StarEmpty from '../../../../../../assets/star_empty.svg?react';

const StarRating = ({ rating = 4.5, max = 5 }) => {
  const fullStars = Math.floor(rating)
  const hasHalf = rating % 1 >= 0.5
  const emptyStars = max - fullStars - (hasHalf ? 1 : 0)

  const stars = [
    ...Array(fullStars).fill(<StarFull />),
    ...(hasHalf ? [<StarHalf />] : []),
    ...Array(emptyStars).fill(<StarEmpty />),
  ];

  return (
    <div style={{ display: 'flex', gap: '4px' }}>
      {stars.map((star, i) => (
        <span key={i} style={{ width: 20, height: 20 }}>{star}</span>
      ))}
    </div>
  );
};

export default StarRating