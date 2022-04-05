import React,{useEffect} from 'react'
import {BsFillTrashFill} from 'react-icons/bs'

function IndividualTransaction({item,itemText,itemId,setAllList,allList,incList,setIncList,expList,setExpList,setTotalIncome,TotalIncome, TotalExpence,setTotalExpence}) {

    const deleteHandler = ()=>{
        // console.log(id)
       const newList =  allList.filter(elm => elm.id !== item.id)
       setAllList(newList)
    //    console.log(allList)
    //    console.log(item.id)
    //    const newIncomeList = incList.filter(elm => elm.id !== item.id)
    //    setIncList(newIncomeList)
    //    console.log(incList)
    //    console.log(incList)
    //    console.log(item.id)
    //    const newExpenceList = expList.filter(elm => elm.id !== item.id)
    //    setExpList(newExpenceList)
    // console.log(item.amount.amount)
    const newIncomeList = incList.filter(elm => elm.amount.amount !== item.amount.amount && elm.text.text !== item.text.text)
    setIncList(newIncomeList)
    // if(item.type === 'income'){
    //     setTotalIncome(TotalIncome - parseInt(item.amount.amount))
    // }else if(item.type === 'expence'){
    //     setTotalExpence(TotalExpence - parseInt(item.amount.amount))
    // }
    
    }
    // console.log(item.id)
    return (
            <li key={itemId} id={item.type}> {itemText}
            <span id={item.type}> {item.amount.amount} </span>
            <BsFillTrashFill id={item.type} onClick={() =>deleteHandler()}/>
            </li>
    )
}

export default IndividualTransaction
