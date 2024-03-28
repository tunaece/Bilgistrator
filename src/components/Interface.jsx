import { useContext, useState } from "react"
import { QuizContext } from "../helpers/contexts"
import '../index.css'
import { GrLinkNext } from "react-icons/gr";
import { MdKeyboardBackspace } from "react-icons/md";
import { IoMdDoneAll } from "react-icons/io";
import Navbar from "./Navbar";

const Interface = () => {
   const {
      setGameState,score,setScore,getQuestionsByCategory,
      current,setCurrent,back,Correct
   }
   =useContext(QuizContext)

   const [selected,setSelected]=useState(null)
   const [isAnswered,setIsAnswered]=useState(false)
   const currentCat=getQuestionsByCategory()
   const correctAnswer=currentCat[current].answer
   const handleOptionClick=opt=>{
      if(!isAnswered){
         setSelected(opt)
         setIsAnswered(true)  
         if(selected===correctAnswer){
            Correct()
         }
      }
   }
   
   const handleNext=()=>{
      setCurrent(current+1)
      setIsAnswered(false)
      setSelected(null)
      if(selected===correctAnswer){
         setScore(score+1)
      }
   }

   const end=()=>{
      if(selected===correctAnswer){
         setScore(score+1)
      }
      setGameState('end')
   }
   const [loading,setLoading]=useState(true)
   const load =()=>{setLoading(false)}
   setTimeout(load,800)

   if(loading===true){
      return <div className="intLoader">
         <div className="loader">
  <div className="square" id="sq1"></div>
  <div className="square" id="sq2"></div>
  <div className="square" id="sq3"></div>
  <div className="square" id="sq4"></div>
  <div className="square" id="sq5"></div>
  <div className="square" id="sq6"></div>
  <div className="square" id="sq7"></div>
  <div className="square" id="sq8"></div>
  <div className="square" id="sq9"></div>
</div>
      </div>
   }


return (
<> 
<div className="acontainer">
<Navbar/>
   <div className="questionCard">
   <h1 className="current"> <span className="currentBig"> {current+1} </span>/ 10
   </h1>
   <h2 className="theQuestion"> {currentCat[current].question} </h2>
      {currentCat[current].options.map((opt,ix)=>(
         <div key={ix} className="optionContainer">
            <button onClick={()=>handleOptionClick(opt)}
         className={`options ${isAnswered&& opt===correctAnswer?
         ' bg-green-600 hover:bg-green-600':selected===opt?' bg-red-600 hover:bg-red-600':''}`}>
          {opt} </button>
         </div>
      ))} <br /><br />
      {isAnswered?
         current!==9? 
         <button onClick={handleNext} className="next" >
            <span className="flex justify-center items-center">
               <span className="me-2">Sonraki Soru </span>
                <GrLinkNext/></span> </button>
         : <button className="end" onClick={end}>
         <span className=" flex justify-center items-center">
            <span className="me-2">Bitir</span>
         <IoMdDoneAll/></span> 
         </button>:''
      }
      </div>
      

      <div className="text-center flex justify-center items-center">
      <button className="backToMenu"> <MdKeyboardBackspace/> 
      <span className="ms-1" onClick={()=>back('menu')}>Menüye Dön</span>
      </button>
      </div>
      </div>
</>   
)
}

export default Interface