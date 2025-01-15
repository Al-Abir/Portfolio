import React from 'react';
import PropTypes from 'prop-types'
const ratings = Array(5).fill({
    icon: 'star',
    style: { fontVariationSettings: '"FILL" 1' }, // Ensure FILL is capitalized
  });
  

const ReviewCard = (
     {
        content,
        imgSrc,
        name,
        company
     }

) => {
    return (
        <div className="bg-zinc-800 p-5 rounded-xl min-w-[320] flex flex-col lg:min-w-[420px]">
            <div className='flex items-center gap-1 mb-3 text-yellow-300 text-[18px]' >
            {ratings.map(({ icon, style }, key) => (
          <span
            key={key}
            className="material-symbols-rounded text-yellow-400 text-lg mr-1"
            style={style}
          >
            {icon}
          </span>
        ))}

            </div>

            <p className='text-zinc-400 mb-8'>{content}</p>

            <div className="flex items-center gap-2 mt-auto">

                <figure className='img-box rounded-lg'>

                    <img
                    src={imgSrc}
                    alt={name}
                    width={44}
                    height={44}
                    loading='lazy'
                    className='img-cover'>
                    </img>

                </figure>

                <div>

                    <p>{name}</p>
                    <p className='text-xs text-zinc-400 tracking-wider'>{company}</p>
                </div>
            </div>
        
      </div>
    );
};
ReviewCard.prototype={
  content: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  company: PropTypes.string.isRequired,

}

export default ReviewCard;