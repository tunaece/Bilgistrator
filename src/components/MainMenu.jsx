import { useContext, useState } from "react"
import { QuizContext } from "../helpers/contexts"
import '../index.css'
import { motion } from "framer-motion"
import Loading from "./Loading"

const MainMenu = () => {
   const {handleCategory}=useContext(QuizContext)
   const [loading,setLoading]=useState(true)
   const load =()=>{setLoading(false)}
   setTimeout(load,1000)

   if(loading===true){
      return <Loading/>
   }

return (
<> 
<motion.div
animate={{y:0}}
initial={{y:-110}} transition={{duration:.6,delay:2.1}}
>
   <motion.div animate={{backgroundColor:['#45a8ff','#04153f']}}
   transition={{duration:1.5, delay:2.1}} 
    className="heading">
      <motion.h1 animate={{y:[-20,0],opacity:[0,1]}} 
      transition={{delay:3,duration:.3}}
      className="theName">BİLGİSTRATOR</motion.h1>
   </motion.div>
</motion.div>
<div className="flex flex-col text-center">
   <motion.div animate={{borderBottom:['1px solid black','1px solid white']}}
   transition={{delay:2}}
   className="categoryDiv">
      <motion.h2
      animate={{scale:[0,1.1,1],
         borderBottom:['1px solid black','1px solid white']}} 
      transition={{duration:.4,delay:2}}
      className="mb-4 text-lg p-2">Kategori Seç</motion.h2>
      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:.4,duration:.3}}  
      className="btn-donate"
      onClick={()=>handleCategory('general')}
      id="genel" >Genel Kültür</motion.button>
      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:.6,duration:.3}} 
      className="btn-donate"  
      onClick={()=>handleCategory('astronomy')}
      id="astronomi">Astronomi</motion.button>

      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:.8,duration:.3}} 
      className="btn-donate"
      onClick={()=>handleCategory('software')}
      id="yazilim">Yazılım</motion.button>
      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:1,duration:.3}} 
      className="btn-donate"
      onClick={()=>handleCategory('cars')}
      id="araba">Arabalar</motion.button>
      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:1.2,duration:.3}} 
      className="btn-donate"
      onClick={()=>handleCategory('games')}>Oyunlar</motion.button>
      <motion.button
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:1.4,duration:.3}} 
       className="btn-donate"
      onClick={()=>handleCategory('science')}>Bilim</motion.button>
      <motion.button 
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:1.6,duration:.3}} 
      className="btn-donate"
      onClick={()=>handleCategory('geo')}>Coğrafya</motion.button>
      <motion.button  
      initial={{opacity:0}} animate={{opacity:1,scale:[1,3,1]}} 
      transition={{delay:1.8,duration:.3}} 
      className="btn-donate"
      onClick={()=>handleCategory('lol')}>League of Legends</motion.button>
   </motion.div>
   </div>
   <motion.h5 animate={{color:['#000','#ffbc2d','#b2b2b2']}}  
   transition={{delay:3,duration:3}}
   className="warningBottom">
      *Sayfayı yenilemek oyunun bitmesine sebep olur
   </motion.h5>
{/* <button onMouseDownCapture={()=>setGameState('end')}>end</button> */}
</>
)
}

export default MainMenu