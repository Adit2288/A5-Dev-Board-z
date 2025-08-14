document.getElementById('btn-one').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked ShopEase")
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";

  const heading = document.getElementById('one-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);

})

document.getElementById('btn-two').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked CloudSync")
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";

  const heading = document.getElementById('two-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);
})

document.getElementById('btn-three').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked SwiftPay")
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";
 const heading = document.getElementById('three-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);
})

document.getElementById('btn-four').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked Meta")
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";
  const heading = document.getElementById('four-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);
})

document.getElementById('btn-five').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked Google LLC")
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";
  const heading = document.getElementById('five-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);
})

document.getElementById('btn-six').addEventListener('click',function(event){
  event.preventDefault();
  alert("You have clicked GLassdoar")
  alert("Its your last Item nothing left");
  const value1 = convertedInnerText('task-num');
//   console.log(value1);
const newValue1 = value1-1;
 setInnertextById('task-num',newValue1);

 const tValue = convertedInnerText('t-part');
 const newTValue = tValue+1;
 setInnertextById('t-part',newTValue);
 event.target.disabled=true;
 event.target.style.backgroundColor ="gray";
  const heading = document.getElementById('six-head').innerText;
 
 const now = new Date();
 const time = now.toLocaleTimeString();
 const container = document.getElementById('action-space');
 const div = document.createElement('div');
 div.innerHTML=`
 <br>
 <h1 class="">You have completed the task ${heading} at ${time} </h1>
 
 `
container.appendChild(div);
})