import React, { useState } from 'react'
import "./useState-ex1.css"

const UsestateExample1 = () => {
    const [timer, setTimer] = useState(0)
    const [interval, setIntervalId] = useState(null)
    const [sec, setSec] = useState(0)
    const [minute, setMinutes] = useState(0)
    const [hr, setHr] = useState(0)

    const startTimer = () => {
        const id = setInterval(() => {
            setTimer((preCount) => preCount + 1)
        },10)
        setIntervalId(id)
    }

    const stopTimer = () => {
        clearInterval(interval)
        setIntervalId(null)
    }

    const resetTimer=()=>{
        clearInterval(interval)
        setIntervalId(null)
        setHr(0)
        setMinutes(0)
        setSec(0)
        setTimer(0)
    }

    if (timer === 100) {
        setTimer(0)
        setSec((secvalue) => secvalue + 1)
    }
    if (sec === 60) {
        setSec(0)
        setMinutes((minuteValue) => minuteValue + 1)
    }

    if (minute === 60) {
        setMinutes(0)
        setHr((hrValue)=>hrValue+1)
    }

    if(hr==13){
        setHr(1)
    }





    return (

        <>
            <div className="container1">
                <div className='title'><h1>Stop Watch</h1></div>
                <div className='watch'>
                    <div className='timer'>
                        {hr<10?<h1>0{hr}</h1>:<h1>{hr}</h1>}
                    <h6>h</h6>
                    </div>

                    <div  className='timer'>
                    {minute<10?<h1>0{minute}</h1>:<h1>{minute}</h1>}
                    <h6>m</h6>
                    </div>


                    <div  className='timer'>
                    {sec<10?<h1>0{sec}</h1>: <h1>{sec}</h1>}
                    <h6>s</h6>
                    </div>


                    <div  className='timer'>
                    {timer<10?<h1>0{timer}</h1>: <h1>{timer}</h1>}
                    <div><h6 className='ms'>ms</h6></div>
                    </div>

                </div>

                <div className='btns'>
                    <button onClick={startTimer}>Start</button>
                    <button onClick={stopTimer}>Stop</button>
                    <button onClick={resetTimer}>Reset</button>
                </div>

            </div>
        </>
    )


}

export default UsestateExample1