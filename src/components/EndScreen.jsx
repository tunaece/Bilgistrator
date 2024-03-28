import { useContext } from "react"
import { QuizContext } from "../helpers/contexts"
import Navbar from "./Navbar"
import './comp.css'

const EndScreen = () => {
  const {score,back} = useContext(QuizContext)
return (
<> <Navbar/>
  <div className="endContainer">
  <div className="text-center"
  > Skor: {score}/10 </div> <br />
  <button className="endBackBtn"
  onClick={()=>back('menu')}>Ana Menüye Dön</button>
  </div>
<div className="grid justify-center pt-20">
  <button className="button"
  onClick={()=>back('start')}>
  <div className="button__int">
    <span className="button__span">Oyundan Çık</span>
  </div>
</button>
</div>

</>
)
}

export default EndScreen