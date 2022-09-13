const bill=document.getElementById('billTotalInput')
const tip=document.getElementById('tipInput')
const totpeople=document.getElementById('numberOfPeople')
const perperson=document.getElementById('perPersonTotal')


const calculateBill = () => {
  let billval=(bill.value);
  if(isNaN(billval)){
    alert("please enter a number")
  }
  else billval=Number(billval)
  let tipval=(tip.value);
  if(isNaN(tipval)){
    alert("please enter a number")
  }
  else tipval=Number(tipval)
  perperson.innerText=Math.round((billval+(billval*tipval/100))/(Number(totpeople.innerText)));
}

// ** Splits the bill between more people **
const increasePeople = () => {
  let nump=Number(totpeople.innerText)
  totpeople.innerText=nump+1;
  calculateBill()
}

// ** Splits the bill between fewer people **
const decreasePeople = () => {
  let nump=Number(totpeople.innerText)
  if(nump==1) return ;

  else{
    totpeople.innerText=nump-1;
  }
  calculateBill()
}