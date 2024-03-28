import { useState } from "react"
import MainMenu from "./components/MainMenu"
import Interface from "./components/Interface"
import EndScreen from "./components/EndScreen"
import { QuizContext } from "./helpers/contexts"
import { Astronomy, Cars, Games, General, Geo, LoL, Science, Software } from "./helpers/Storage"
import Start from "./components/Start"

function App() {
   const [gameState,setGameState]=useState('start')
   const [score,setScore]=useState(0)
   const [current,setCurrent]=useState(0)


   const [selectedCategory,setSelectedCategory]=useState('')
   const handleCategory=category=>{
      setSelectedCategory(category)
      setGameState('interface')   
   }
   const back=(stat)=>{
      setGameState(stat)
      setScore(0)
      setCurrent(0)
    }

   const getQuestionsByCategory=()=>{
      switch(selectedCategory){
         case 'astronomy': 
            return Astronomy;
         case 'software' : 
            return Software;
         case 'cars' :
            return Cars;
         case 'games':
            return Games;
         case 'science':
            return Science;
         case 'general':
            return General;
         case 'geo':
            return Geo;
         case 'lol':
            return LoL

         default: return [];
      }
   }

return (
<>

   <QuizContext.Provider 
   value={{
      gameState,setGameState,score,setScore,
      handleCategory,getQuestionsByCategory,current,setCurrent,
      back
   }}>

      {gameState==='start'&&<Start/> }
      {gameState==='menu'&& <MainMenu/> }
      {gameState==='interface'&& <Interface/> }
      {gameState==='end'&& <EndScreen/> }
   
   </QuizContext.Provider>
</>
)
}
export default App
