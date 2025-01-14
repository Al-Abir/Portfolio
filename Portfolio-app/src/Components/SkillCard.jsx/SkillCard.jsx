import React from 'react';
import PropTypes from "prop-types";

const SkillCard = ({
    imgSrc,
    label,
    desc,
    calsses
}) => { 
    return (
        <div className={`flex items-center gap-3 ring-2 ring-inset ring-zinc-50/10 rounded-2xl p-4 mb-2 hover:bg-zinc-800 transition-colors group ${calsses}`}>
            <figure className='bg-zinc-700/50 rounded-lg overflow-hidden w-12 h-12 p-2 group-hover:bg-zinc-900 transition-colors'>
                <img
                    src={imgSrc}
                    width={32}
                    height={32}
                    alt={label}
                />
            </figure>
            <div>
                <h2 className="text-white">{label}</h2>
                <p className='text-zinc-400 text-sm'>
                    {desc}
                </p>
            </div>
        </div> 
    );
};

SkillCard.propTypes = {
    imgSrc: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    calsses: PropTypes.string
};

SkillCard.defaultProps = {
    calsses: ""
};

export default SkillCard;
