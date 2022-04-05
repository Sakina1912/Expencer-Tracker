import React from 'react'
import IndividualTransaction from './IndividualTransaction'

function Transaction({setAllList,allList,incList,setIncList,expList,setExpList,setTotalIncome,TotalIncome,TotalExpence,setTotalExpence}) {
    return (
        <ul>
        {
            allList.map(item => (
                <IndividualTransaction item={item} itemText={item.text.inputText} key={item.id} setAllList={setAllList} allList={allList} incList={incList} setIncList={setIncList} expList={expList} setExpList={setExpList} setTotalIncome={setTotalIncome} setTotalIncome={setTotalIncome} TotalIncome = {TotalIncome} TotalExpence ={TotalExpence} setTotalExpence = {setTotalExpence}/>
            ))
        }
        </ul>
    )
}

export default Transaction
