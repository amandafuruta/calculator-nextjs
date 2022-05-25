import Link from "next/link"
import React, { useState } from "react"

import StyleCalculate from "../styles/calculate"
import { BsArrowLeft } from "react-icons/bs";


export default function Calculate(){
    const [ n1, setN1 ] = useState(0)
    const [ operation, setOperation ] = useState("")
    const [ aux, setAux ] = useState(0)

    function montar(event){
        var number = event.target.value

        if(aux === 0 )
            setAux(number)
        else
            setAux(aux + number)
    }

    function buildOperation (event){
        setOperation(event.target.value)
        setN1(aux)
        setAux(0)
    }

    function result(){
        switch (operation){
            case "-":
                setAux(n1 - aux)
                break
                
            case "*":
                setAux(n1 * aux)
                break

            case "/":
                setAux(n1 / aux)
                break

            case "+":
                var number1 = n1.toString()
                var number2 = aux.toString()
                setAux(parseInt(number1) + parseInt(number2))
                break
        }
        
    }


    return(
        <StyleCalculate>
            <Link href="/"><a><BsArrowLeft color="#fff" size={20}/> Back</a></Link>
            <div className="calculator">
               
                <div className="screen">{aux}</div>
                      

                <div className="buttons">
                    <div className="space_around">
                        <button onClick={()=>setAux(0)} className="lightgrey">AC</button>
                        <button onClick={()=>setAux(aux/100)} className="lightgrey">%</button>
                        <button onClick={buildOperation} value="/" className="lightgrey">/</button>
                        <button onClick={buildOperation} value="*"  className="lightgrey">*</button>
                    </div>

                    <div className="row">
                        <button onClick={montar} value={7} className="darkgrey">7</button>
                        <button onClick={montar} value={8} className="darkgrey">8</button>
                        <button onClick={montar} value={9} className="darkgrey">9</button>
                        <button onClick={buildOperation} value="-"  className="lightgrey">-</button>

                    </div>

                    <div className="row">
                        <button onClick={montar} value={4} className="darkgrey">4</button>
                        <button onClick={montar} value={5} className="darkgrey">5</button>
                        <button onClick={montar} value={6} className="darkgrey">6</button>
                        <button onClick={buildOperation} value="+" className="lightgrey">+</button>
                    </div>

                    <div className="row">
                        <button onClick={montar} value={1} className="darkgrey">1</button>
                        <button onClick={montar}  value={2} className="darkgrey">2</button>
                        <button onClick={montar}  value={3} className="darkgrey">3</button>
                        <button onClick={result} className="green">=</button>
                    </div>

                    <div  className="row">
                        <button onClick={montar} value={0} className="darkgrey zero">0</button>
                    </div>

                </div>
            </div>

            
        </StyleCalculate>
    )
}