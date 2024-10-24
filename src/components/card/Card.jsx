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
                <div className="card-body space-y-3">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p>{short_description}</p>
                    <h3 className='text-xl font-bold'>Ingredients: {ingredients.length}</h3>
                    <ul className=' text-blue-500 font-bold'>
                        {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
                    </ul>
                    <div className='flex justify-center items-center gap-8'>
                        <div className='flex gap-3 justify-center items-center'>
                            <p className='text-xl font-bold'><CiAlarmOn /></p>
                            <p>{preparing_time} munites</p>
                        </div>
                        <div className='flex gap-3 justify-center items-center'>
                            <FaFire />
                            <p>{calories} calories</p>
                        </div>
                        
                        <p></p>
                    </div>
                    <div className="card-actions justify-center">
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