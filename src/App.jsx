import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import PlayersContainer from './components/PlayersContainer/PlayersContainer'
import { ToastContainer,toast } from 'react-toastify'
import Newsletter from './components/Newsletter/Newsletter'
import Footer from './components/Footer/Footer'

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState ([])

  const handleSelectedPlayer = player => {
    if(selectedPlayers.length >= 4) {
      toast.error ('You cannot select more than 4 Players')
      return
    }
    const isExist = selectedPlayers.find (p => p.id == player.id)
    if (isExist) {
      toast.error("This Player already selected !!")
      return;
    }
    if (coins >= player.price) {
      setCoins(coins - player.price)
      const newSelectedPlayers = [...selectedPlayers, player]
      setSelectedPlayers (newSelectedPlayers);
      toast.success('Player Chosen Successful !!')
    }else{
      toast.warning ('Not enough coins! Please claim more credits.')
    }
  }

  const handleDelete = (player) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id != player.id)
    setSelectedPlayers(remainingPlayers)
    setCoins(coins + player.price);
    toast.success('Player Removed & Coins Refunded!')
  }

  const [coins, setCoins] = useState(0)
  const handleAddCoins = () => {
    setCoins(coins + 1000)
    toast.success('1000 Coins added to your wallet')
  }

  return (
    <div>
      <div className='main'>
        <Navbar coins={coins}></Navbar>
        <Header handleAddCoins={handleAddCoins}></Header>
        <PlayersContainer handleSelectedPlayer={handleSelectedPlayer} selectedPlayers={selectedPlayers} handleDelete={handleDelete}></PlayersContainer>
        <br />
        <Newsletter></Newsletter>
      </div>
      <Footer></Footer>
      <ToastContainer position='top-center' autoClose={2000}/>
    </div>
  )
}

export default App
