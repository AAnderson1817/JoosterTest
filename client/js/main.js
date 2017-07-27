//Variables
const signup = $('#signup-btn');
const formpanel = $('#form-panel');
const successpanel = $('#success-panel');

//Functions
function swapPanels(){
  console.log("Working!");
  successpanel[0].style.display = "block";
  successpanel.toggleClass('slideRight').toggleClass('ztop').toggleClass('zbot');
}

//Event Listeners
signup.on('click', swapPanels);
$(window).on('click', )
