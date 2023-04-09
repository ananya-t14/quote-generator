import React, {useState, useEffect} from 'react'
import './App.css';
import Quote from './Components/Quote/Quote';
import bgimg from "./Assets/Images/background.jpg"
import axios from 'axios';

function App() {

  const [quoteNumber, setQuoteNumber] = useState(undefined)
  const [data, setdata] = useState([]);

  useEffect(()=>{
    const data = axios.get('https://type.fit/api/quotes').then((res)=>{setdata(res.data)})
  },[])

  const getQuoteIndex = () => {
    if(data){
      let x = Math.floor((Math.random() * data.length) + 1);
      setQuoteNumber(x)
    }
  }

  return (
    <div className={`w-screen h-screen bg-cover relative  overflow-hidden  `}
    style={{backgroundImage: `url(${bgimg})`,}}>
      <div className='w-screen h-screen overflow-hidden absolute top-0 left-0 flex flex-row justify-center items-center'
        style={{
          backdropFilter: 'brightness(0.9)'
        }}
      > 
      <button id='btn-1' className={`${quoteNumber?"absolute bottom-24 scale-75 ":""} text-[#571a05]  hover:text-[#7a230f] text-[4rem] hover:bg-[#571a0540] transition-all hover:border-[3px] hover:border-[#ffd700] bg-[#7a230f40] flex flex-row justify-center items-center pt-6 px-10 rounded-3xl backdrop-blur-sm`}
      style={{fontFamily:'Harry Potter'}}
      onClick={()=>{getQuoteIndex()}}>
        Get {quoteNumber?"next":"a"} Quote
      </button>
      {
        quoteNumber?
        <Quote data={data[quoteNumber]}></Quote>
        :null
      }
      </div>
      
    </div>
    
  );
}

export default App;



