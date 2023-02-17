import { useEffect, useState } from 'react';
import './App.css';
import { Duck } from './Duck.ts';




function App() {
  const [myDucks] = useState(new Array(new Duck(0),new Duck(1),new Duck(2),new Duck(3),new Duck(4)));
  const [iterationCount, setIterationCount] = useState(0);
  const [points, setPoints] = useState(0);
  const [isVisible, setVisibility] = useState('hidden');
  const [allTime, setAllTime] = useState(0);
  const [timeStart, setTimeStart ] = useState(new Date());
  const [isGameEnd, setGameEnd ] = useState(false);



  useEffect(() => {
    const intervalId = setInterval(() => {
      
      if(points>=100){
        if(!isGameEnd){
          
          let milisec = (new Date().getTime()-timeStart.getTime())/1000;
          setGameEnd(true);
          setVisibility('visible');
          //console.log(milisec);
          setAllTime(milisec);
        }
        return;
      }

      for(let duck of myDucks){
        duck.move();
      }
     
       setIterationCount(iterationCount+1);
    }, 10);
    return () => {
      clearInterval(intervalId);
    };
  });
   


  
  function handleClick(id){
    let duck = myDucks.find(x=>x.getId()===id);
    duck.resetDuck();
    setPoints(Math.round(points+ (10-duck.getY()/100)));
  }

   const images = myDucks.map((duck) => <img  key={duck.getId()} onClick={()=> handleClick(duck.getId())} src={duck.getIcon()} style={{position: 'absolute',zIndex:`9`, left: `${duck.getX()}px`, top: `${duck.getY()}px`}}  className="App-logo" alt="logo" />);
  //const images = myDucks.map((curDuck) => Node(curDuck,()=> setIterationCount(iterationCount+100)));
  return (
    <div className="App">
      <header className="App-header">
        <p className='points'> {points} points</p>
        <h1 style={{visibility:`${isVisible}` }} >You Win</h1>
        <h2 style={{visibility:`${isVisible}`}} >Your time: {allTime} sec</h2>
      { images }

      
      </header>
    </div>
  );
}

export default App;
