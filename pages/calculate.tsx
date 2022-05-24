import { useState } from "react"

import StyleCalculate from "../styles/calculate"

export default function Calculate(){
    var total = 0
    var n1 = 0
    var n2 = 0
    const [totalvar, setTotalVar] = useState(0)
    const [n1Var, setN1] = useState(0)
    const [operation, setOperation] = useState("")
    const [ naux, setAux ] = useState("0")

    function montar(valor){
        setAux(naux+valor)
        console.log(naux)
    }

    function buildOperation (valor, op){
        if( op != "=" ){

            if(n1 == 0){
                setN1(parseInt(valor))
                setAux("0")
            }
            
            
        }else{
            operate(valor)
            
        }
    }

    function operate (valor){
        n2= (parseInt(valor))
        console.log("n2" +n2)
        console.log("n1 vvar " +n1Var)

        if( operation == "+"){
            setAux("0")
            total = (n1Var + n2)
            setN1(total)
            setTotalVar(total)
            n2 = 0
        }
    }


    return(
        <StyleCalculate>
            <div className="calculator">
                {
                    totalvar == 0 ?
                        <div className="screen">{naux}</div>
                        :
                        <div className="screen">{totalvar}</div>
                }

                <div className="buttons">
                    <div className="row">
                        <button onClick={()=>setAux("")} className="lightgrey">AC</button>
                        <button onClick={()=>{ buildOperation( naux, "/" ) }} className="lightgrey">/</button>
                        <button  className="lightgrey">*</button>
                        <button  className="lightgrey">-</button>
                    </div>

                    <div className="row">
                        <button onClick={()=>montar("7")} className="darkgrey">7</button>
                        <button onClick={()=>montar("8")} className="darkgrey">8</button>
                        <button onClick={()=>montar("9")} className="darkgrey">9</button>
                        <button onClick={()=>{ n1Var == 0 ? buildOperation( naux, "+" ) : operate(naux), setOperation("+")}} className="lightgrey">+</button>
                    </div>

                    <div className="row">
                        <button  onClick={()=>montar("4")} className="darkgrey">4</button>
                        <button onClick={()=>montar("5")} className="darkgrey">5</button>
                        <button onClick={()=>montar("6")} className="darkgrey">6</button>
                        <button className="lightgrey">.</button>
                    </div>

                    <div className="row">
                        <button onClick={()=>montar("1")} className="darkgrey">1</button>
                        <button onClick={()=>montar("2")} className="darkgrey">2</button>
                        <button onClick={()=>montar("3")} className="darkgrey">3</button>
                        <button onClick={()=>{ buildOperation( naux, "=") }} className="green">=</button>
                    </div>

                    <div  className="row">
                        <button onClick={()=>montar("0")} className="darkgrey zero">0</button>
                    </div>

                </div>
            </div>

            
        </StyleCalculate>
    )
}