import PropTypes from 'prop-types';

const Sidebars = ({ cooking , handleRemove, preaparedItem, totalTimeAndCalories, totalTime, totalCalories}) => {
    
    return (
        <div className="md:w-1/3">
            <h3 className='text-2xl font-bold text-center'>Want to cook: {cooking.length}</h3>

            {/* want to cook */}
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cooking.map((cooked, idx) => <tr className="hover" key={idx}>
                                <th>{idx + 1}</th>
                                <td>{cooked.name}</td>
                                <td>{cooked.preparing_time} munites</td>
                                <td>{cooked.calories} calories</td>
                                <td><button onClick={() => {
                                    handleRemove(cooked.id) 
                                    totalTimeAndCalories(cooked.preparing_time, cooked.calories)
                                }
                                } className="px-4 py-2 bg-green-400 rounded-full">Preparing</button></td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </div>

            {/* currently cook */}
            <h3 className='text-2xl font-bold text-center'>Currently cooking: {preaparedItem.length}</h3>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Time</th>
                            <th>Calories</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {
                            preaparedItem.map((currenCook, idx) => <tr className="hover" key={idx}>
                                <th>{idx + 1}</th>
                                <td>{currenCook.name}</td>
                                <td>{currenCook.preparing_time} munites</td>
                                <td>{currenCook.calories} calories</td>
                            </tr> )
                        }
                        <tr>
                            <td></td>
                            <td></td>
                            <td>total time= {totalTime} munites</td>
                            <td>total calories= {totalCalories}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

Sidebars.propTypes = {
    cooking: PropTypes.array,
    handleRemove: PropTypes.func,
    preaparedItem: PropTypes.array,
    totalTimeAndCalories: PropTypes.func,
    totalCalories: PropTypes.number,
    totalTime: PropTypes.number
}
export default Sidebars;