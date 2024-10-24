
import { useState } from 'react'
import './App.css'
import Cards from './components/card/cards'
import Sidebars from './components/sidebar/sidebars'

function App() {

  const [cooking, setCooking] = useState([])
  const [preaparedItem, setPreaparedItem] = useState([])
  const [totalTime, setTotalTime] = useState(0)
  const [totalCalories, setTotalCalories] = useState(0)
  
  const handleCooking = (card) => {
    
    const isExist = cooking.find(previousCard => previousCard.id === card.id)
    if(!isExist){
      setCooking([...cooking, card])
    }else{
      alert('Recepi is already exist')
    }
  }

  const handleRemove = (id) => {
    const delatedItem = cooking.find(item => item.id === id)
    const updateItem = cooking.filter(item => item.id !== id )
    setCooking(updateItem)
    setPreaparedItem([...preaparedItem, delatedItem])
  }

  const totalTimeAndCalories = (time, calories) => {
    setTotalTime(totalTime + time)
    setTotalCalories(totalCalories + calories)
  }

  return (
    <>
      
      <main className='max-w-7xl mx-auto'>

      <section className='flex flex-col md:flex-row gap-6'>
        {/* card section */}
        <Cards handleCooking={handleCooking}></Cards>

        {/* side bar */}
        <Sidebars 
        handleRemove={handleRemove}
        preaparedItem={preaparedItem} 
        cooking={cooking}
        totalTimeAndCalories={totalTimeAndCalories}
        totalTime={totalTime}
        totalCalories={totalCalories}
        ></Sidebars>
        
      </section>

      </main>
      
    </>
  )
}

export default App
