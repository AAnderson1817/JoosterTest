//Variables
const signup = $('#signup-btn');
const formpanel = $('#form-panel');
const successpanel = $('#success-panel');
const successexit = $('#success-exit');

//Functions
function swapPanels(){
  console.log("Working!");
  successpanel[0].style.display = "block";
  successpanel.addClass('slideRight').addClass('zmid').removeClass('zbot').removeClass('hidden');
}
function closePanel(){
  successpanel.addClass('hidden');
}

//Event Listeners
signup.on('click', swapPanels);
successexit.on('click', closePanel);
