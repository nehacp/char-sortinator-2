
const handleSubmit = function(event) {
  event.preventDefault();
  
  //get input value from input tag in DOM;
  const value = document.getElementsByName('input-word')[0].value;
  console.log('value', value);
}





const button = document.querySelector('button');
button.addEventListener('click', handleSubmit);