
import { useState } from 'react'
import './App.css'
import Cards from './components/card/cards'
import Sidebars from './components/sidebar/sidebars'

function App() {

  const [cooking, setCooking] = useState([])
  const [preaparedItem, setPreaparedItem] = useState([])
  
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

  return (
    <>
      
      <main className='max-w-7xl mx-auto'>

      <section className='flex flex-col md:flex-row gap-6'>
        {/* card section */}
        <Cards handleCooking={handleCooking}></Cards>

        {/* side bar */}
        <Sidebars handleRemove={handleRemove} preaparedItem={preaparedItem} cooking={cooking}></Sidebars>
        
      </section>

      </main>
      
    </>
  )
}

export default App
