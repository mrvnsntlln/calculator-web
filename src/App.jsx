import React, { useState } from 'react'

const App = () => {

  const [value, setValue] = useState('')
  
  const handleButtonClick = (event) =>{
    const clickedValue = event.target.value;
    if (clickedValue === '='){
      try{
        setValue(eval(value).toString())
      } catch {
        setValue('Error')
      }
    } else if (clickedValue === 'C'){
      setValue('')
    } else if (clickedValue === 'delete'){
      setValue(value.slice(0, -1))
    } else {
      setValue(value + clickedValue);
    }
  }

  const buttonClick ='w-[20%] h-[80%] border-2 border-solid border-black rounded-md hover:bg-blue-800'
  const buttonClick2 = 'w-[27%] h-[80%] border-2 border-solid border-black rounded-md ms-[3px] hover:bg-blue-800'
  const buttonClick3 = 'border-2 border-solid border-black rounded-md w-[78px] h-[90%] ms-[2px] hover:bg-blue-800'
  
  
  return (
    <div className=' bg-[#F4BA94] h-full'>
      <div className="flex justify-center">
      
        <div className=' bg-slate-400 w-[500px] h-[600px] m-[50px] rounded-xl flex flex-col justify-center gap-3 border-4 border-solid border-black'>
          <h1 className=' text-center font-extrabold'>Marvin Calculator</h1>
            <div className='bg-white w-[80%] h-[20%] ms-[45px] rounded-md p-[20px] border-2 border-solid border-black'>
              <h1 className='font-black text-2xl'>
                {value}
              </h1>
                
            </div>
            <div className='bg-blue-500 w-[80%] h-[60%] ms-[45px] rounded-md border-2 border-solid border-black p-2'>
              <div className='flex justify-evenly h-[20%]'>
                <button onClick={handleButtonClick} className={buttonClick} value="C">C</button>
                <button onClick={handleButtonClick} className={buttonClick} value="/">/</button>
                <button onClick={handleButtonClick} className={buttonClick} value="*">x</button>
                <button onClick={handleButtonClick} className={buttonClick} value="delete">Delete</button>
              </div>
              <div className='flex justify-evenly h-[20%]'>
                <button onClick={handleButtonClick} className={buttonClick} value="7">7</button>
                <button onClick={handleButtonClick} className={buttonClick} value="8">8</button>
                <button onClick={handleButtonClick} className={buttonClick} value="9">9</button>
                <button onClick={handleButtonClick} className={buttonClick} value="-">-</button>
              </div>
              <div className='flex justify-evenly h-[20%]'>
                <button onClick={handleButtonClick} className={buttonClick} value="4">4</button>
                <button onClick={handleButtonClick} className={buttonClick} value="5">5</button>
                <button onClick={handleButtonClick} className={buttonClick} value="6">6</button>
                <button onClick={handleButtonClick} className={buttonClick} value="+">+</button>
              </div>
              <div className='flex h-[40%]'>
                <div className='flex flex-col w-[75%]'>
                  <div className='flex justify-evenly h-[50%]'>
                    <button onClick={handleButtonClick} className={buttonClick2} value="1">1</button>
                    <button onClick={handleButtonClick} className={buttonClick2} value="2">2</button>
                    <button onClick={handleButtonClick} className={buttonClick2} value="3">3</button>
                  </div>
                  <div className='flex justify-evenly h-[50%]'>
                    <button onClick={handleButtonClick} className={buttonClick2} value="%">%</button>
                    <button onClick={handleButtonClick} className={buttonClick2} value="0">0</button>
                    <button onClick={handleButtonClick} className={buttonClick2} value=".">.</button>
                  </div>
                </div>
                <div>
                    <button onClick={handleButtonClick} className={buttonClick3}  value="=">=</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default App