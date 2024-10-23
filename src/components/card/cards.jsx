import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";
import PropTypes from 'prop-types';


const Cards = ({handleCooking}) => {

    const [cards, setCards] = useState([])

    useEffect(() => {
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setCards(data))
    },[])

    return (
        <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                cards.map(card => <Card key={card.id} handleCooking={handleCooking} card={card}></Card>)
            }
        </div>
    );
};

Cards.propTypes= {
    handleCooking: PropTypes.func
}
export default Cards;