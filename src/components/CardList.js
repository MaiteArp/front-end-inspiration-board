import React from 'react';
import Card from './Card.js'
import PropTypes from 'prop-types';
import './CardList.css';

const generateCardComponents = (cards, likeCallback, deleteCallback) => {
    const cardList = [];
    for (let card of cards) {
        cardList.push(<Card key={card.card_id} id={card.card_id} message={card.message} likes={card.likes_count} onLikeClickCallback={likeCallback} onDeleteClickCallback={deleteCallback}/>);
    }
    return cardList;
}

const CardList = (props) => {

    const cardList = generateCardComponents(props.cards, props.onLikeClickCallback, props.onDeleteClickCallback);

    return (
        <div className='cardsList'>
            { cardList }
        </div>
    );

};

CardList.propTypes = {
    cards: PropTypes.array,
    onLikeClickCallback: PropTypes.func,
    onDeleteClickCallback: PropTypes.func
}

export default CardList;
