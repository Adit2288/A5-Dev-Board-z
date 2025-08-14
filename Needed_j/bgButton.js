document.getElementById("bg-btn").addEventListener('click',function(event)
{
  event.preventDefault();
   const randomColor = '#'+ Math.floor(Math.random()*16777215).toString(16);
   document.getElementById('yu').style.backgroundColor =randomColor;
})