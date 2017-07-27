//Variables
const signup = $('#signup-btn');
const formpanel = $('#form-panel');
const successpanel = $('#success-panel');

//Functions
function swapPanels(){
  console.log("Working!");
  successpanel.toggleClass('slideRight').toggleClass('ztop').toggleClass('zbot');
}

//Event Listeners
$(window).on('click', swapPanels);
$(window).on('click', )
