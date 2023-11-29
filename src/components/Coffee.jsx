import React from 'react'

export default function Coffee({ name, image, price, rating, votes, popular, available }) {
    return (
        <div className="coffee">
            <img src={image} alt={name} />
            { popular ? (<p className='popular-tag'>Popular</p>) : "" }
            <p className='principal-info'>{name} <span className='price'>{price}</span></p>
            <div className="secondary-info">
                { rating === null ? (
                    <p className='votes'><i className="bi bi-star"></i> No ratings</p>
                ) : (
                    <p><i className="bi bi-star-fill"></i> {rating} <span className='votes'>({votes} votes)</span></p>
                ) }
                { available === false ? (
                    <p className='available'>Sold Out</p>
                ) : "" }
            </div>
        </div>
    )
}
