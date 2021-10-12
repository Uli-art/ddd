import React from "react"
import MyButton from "./components/MyButton/MyButton"
import MyButtonClass from "./components/MyButton/MyButtonClass";
import Clock from "./components/Clock";
import Counter from "./components/Counterrr";

const buttonArray=['success','primary','grey','red','yellow']

const App=() => {
  return (
    <div className="App">
    <Clock/>
      {buttonArray.map((btn)=>
          <MyButton key={btn} className={btn}>
              {btn}
          </MyButton>
      )}
      
      <MyButton className={'primary'}>
        I am primary button
      </MyButton>
   
      
      <MyButtonClass>+</MyButtonClass>
      <MyButtonClass>-</MyButtonClass>

        <Counter/>
    </div>
  );
}

export default App;
