import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import PlayersContainer from './components/PlayersContainer/PlayersContainer'
import { ToastContainer,toast } from 'react-toastify'
import Footer from './components/Footer/Footer'
import Newsletter from './components/Newsletter/Newsletter'

function App() {
  const [selectedPlayers, setSelectedPlayers] = useState ([])

  const handleSelectedPlayer = player => {
    const isExist = selectedPlayers.find (p => p.id == player.id)
    if (isExist) {
      toast.error("This Player already selected !!")
      return;
    }
    if (coins < player.price) {
      toast.warning('Not enough coins! Please claim more credits.')
      return
    }else{
      setCoins(coins - player.price)
      // const newSelectedPlayers = [...selectedPlayers, player]
      // setSelectedPlayers(newSelectedPlayers)
      setSelectedPlayers ([...selectedPlayers, player]);
      toast.success('Player Chosen Successfully !!')
    }
  }

  const handleDelete = (player) => {
    const remainingPlayers = selectedPlayers.filter((p) => p.id != player.id)
    setSelectedPlayers(remainingPlayers)
    setCoins(coins + player.price);
    toast.success('Player Removed')
  }

  const [coins, setCoins] = useState(0)
  const handleAddCoins = () => {
    setCoins(coins + 1000)
    toast.success('1000 Coins added to your wallet')
  }

  return (
    <>
      <Navbar coins={coins}></Navbar>
      <Header handleAddCoins={handleAddCoins}></Header>
      <PlayersContainer handleSelectedPlayer={handleSelectedPlayer} selectedPlayers={selectedPlayers} handleDelete={handleDelete}></PlayersContainer>
      <br />
      <Newsletter></Newsletter>
      {/* <Footer></Footer> */}
      <ToastContainer position='top-center' autoClose={2000}/>
    </>
  )
}

export default App
