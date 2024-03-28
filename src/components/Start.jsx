import { useContext } from "react"
import { QuizContext } from "../helpers/contexts"
import sound from '../assets/TheBass.mp3'
import '../index.css'

const Start = () => {
   const {setGameState}=useContext(QuizContext)
   const startGame=()=>{
      setGameState('menu')      
      new Audio(sound).play()
   }

  return (
   <>

    <div className="bg-black h-screen grid items-center text-center 
    ">
<div className="section-banner">
  <div id="star-1">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-2">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-3">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-4">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-5">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-6">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>

  <div id="star-7">
    <div className="curved-corner-star">
      <div id="curved-corner-bottomright"></div>
      <div id="curved-corner-bottomleft"></div>
    </div>
    <div className="curved-corner-star">
      <div id="curved-corner-topright"></div>
      <div id="curved-corner-topleft"></div>
    </div>
  </div>
</div>

<button className="btn mx-auto scale-125" type="button" onClick={startGame}>
  <strong>OYUNA BAŞLA</strong>
  <div id="container-stars">
    <div id="stars"></div>
  </div>

  <div id="glow">
    <div className="circle"></div>
    <div className="circle"></div>
  </div>
</button>

    </div>
    </>
 )
}
export default Start

