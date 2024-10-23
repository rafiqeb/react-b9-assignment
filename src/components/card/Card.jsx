import PropTypes from 'prop-types';
import { CiAlarmOn } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Card = ({ card, handleCooking }) => {
    
    const { image, name, short_description, preparing_time, calories, ingredients} = card;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{short_description}</p>
                    <h3 className='text-xl font-bold'>Ingredients: {ingredients.length}</h3>
                    <ul>
                        {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                    <div className='flex justify-center items-center gap-8'>
                        <div className='flex gap-3 justify-center items-center'>
                            <CiAlarmOn />
                            <p>{preparing_time}</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                            <FaFire />
                            <p>{calories} calories</p>
                        </div>
                        
                        <p></p>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={() => handleCooking(card)} className="btn bg-green-400 rounded-full font-bold">Want to cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    card: PropTypes.object,
    handleCooking: PropTypes.func
}
export default Card;