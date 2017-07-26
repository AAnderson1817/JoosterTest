//Variables
const signup = $('#signup-btn');
const testpanel = $('#tester');
const successpanel = $('#success-panel');

//Functions
function swapPanels(){
  console.log("Working!");
  testpanel.toggleClass('hidden');
  successpanel.toggleClass('hidden');
  successpanel.slideDown();
}

//Event Listeners
$(window).on('click', swapPanels);
$(window).on('click', )
