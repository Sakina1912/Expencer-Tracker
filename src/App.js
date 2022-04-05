import React,{useState,useEffect} from 'react';
import './App.css';
import Details from './components/Details';
import Form from './components/Form';
import Transaction from './components/Transaction';

function App() {
  const [Balance,setBalance] = useState('')
  const [TotalIncome,setTotalIncome] = useState('')
  const [TotalExpence,setTotalExpence] = useState('')
  const [inputText,setInputText] = useState('')
  const [amount,setAmount]=useState('')
  const [expList, setExpList] = useState([])
  const [incList,setIncList]= useState([])
  const [allList,setAllList] = useState([])


  useEffect(()=>{
    const incomeAmount = incList.map(item => parseInt(item.amount.amount))
    const TotalIncome =  incomeAmount.reduce((accumulator,current) => accumulator + current,0)
    setTotalIncome(TotalIncome)
  },[incList])

  useEffect(()=>{
    const expenceAmount = expList.map(item => parseInt(item.amount.amount))
    const TotalExpence =  expenceAmount.reduce((accumulator,current) => accumulator + current,0)
    setTotalExpence(TotalExpence)
  },[expList])

  useEffect(()=>{
    const balance = parseInt(TotalIncome) - parseInt(TotalExpence)
    setBalance(balance)
  },[TotalExpence , TotalIncome,incList,expList])

  return (
    <div className="container">
      
      <Details TotalIncome={TotalIncome} TotalExpence={TotalExpence} Balance={Balance}/>

      <Form inputText={inputText} setInputText={setInputText} 
      amount={amount} setAmount={setAmount} 
      incList={incList} setIncList={setIncList} 
      expList={expList} setExpList={setExpList} 
      allList = {allList}setAllList={setAllList} />

      <Transaction setAllList ={setAllList} allList={allList} 
      incList={incList} setIncList={setIncList} 
      expList={expList} setExpList={setExpList} setTotalIncome={setTotalIncome} 
      TotalIncome = {TotalIncome} setTotalIncome= {setTotalIncome}
      TotalExpence ={TotalExpence} setTotalExpence = {setTotalExpence}/>

    </div>
  );
}

export default App;


