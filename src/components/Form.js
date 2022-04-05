import React from 'react'
import { v4 as uuidv4 } from 'uuid';
// import Transaction from './Transaction';

function Form({inputText,setInputText,amount,setAmount,incList,setIncList , setExpList,expList,setAllList,allList}) {

    const inputHandler = (e)=>{
        setInputText(e.target.value)
    }

    const amountHandler = (e)=>{
        setAmount(e.target.value)
    }

    const incomeHandler = (e)=>{
        e.preventDefault()
       setIncList([...incList,{
            id: uuidv4(),
            text : {inputText},
            amount: {amount},
            type: 'income'
        }])
        setAllList([...allList ,{
            id: uuidv4(),
            text : {inputText},
            amount: {amount},
            type: 'income'
        }])
        // console.log(allList)
        setInputText('')
        setAmount('')
    }

    const expenceHandler = (e)=>{
        e.preventDefault()
        setExpList([...expList,{
            id: uuidv4(),
            text : {inputText},
            amount: {amount},
            type:'expence'
        }])
        setAllList([...allList ,{
            id: uuidv4(),
            text : {inputText},
            amount: {amount},
            type:'expence'
        } ])
        // console.log(allList)
        setInputText('')
        setAmount('')
    }
    
    return (
        <form>
            <label htmlFor ='inputText'>Text:</label>
            <input type='text' id='inputText' value={inputText} onChange={inputHandler} /> 
            <label htmlFor ='amount'>Amount:</label>
            <input type='number' id='amount' value={amount} onChange={amountHandler} />
            <div className='buttons'>
                <button className='btn incomeBtn' onClick={incomeHandler}>Add Income</button>
                <button className='btn expenceBtn' onClick={expenceHandler}>Add Expence</button>
            </div>
        </form>
    )
}

export default Form
