let buttons = document.querySelectorAll('.button')
let phone = document.querySelector('.phone')
let cont1 = document.querySelector('.container1')

buttons.forEach(function (button) {
    button.addEventListener('click', function(event){
       if (event.target.id === 'red'){
        phone.style.backgroundColor = "#EE114B";
       }
       if (event.target.id === 'blue'){
        phone.style.backgroundColor = "#007FFD";
       }
       if (event.target.id === 'green'){
        phone.style.backgroundColor = "#00CC99";
       }
       if (event.target.id === 'yellow'){
        phone.style.backgroundColor = "#FFFF73";
       }
       if (event.target.id === 'pink'){
        phone.style.backgroundColor = "#EA878C" ;
       }
       if (event.target.id === "light-grey"){
        phone.style.backgroundColor = '#778da9';
       }
       if (event.target.id === "skin"){
        phone.style.backgroundColor = '#f6c28b';
       }
       if (event.target.id === "lemon"){
        phone.style.backgroundColor = '#f0f3bd';
       }
       if (event.target.id === "d-white"){
        phone.style.backgroundColor = '#edf2f4';
       }
       if(event.target.id === "d-green"){
        phone.style.backgroundColor = "#22577a"
       }
    })

})