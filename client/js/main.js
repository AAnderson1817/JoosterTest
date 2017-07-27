//Variables
const signup = $('#signup-btn');
const formpanel = $('#form-panel');
const successpanel = $('#success-panel');
const successexit = $('#success-exit');

//Functions
function swapPanels(){
  successpanel[0].style.display = "block";
  successpanel.addClass('slideRight').addClass('zmid').addClass('col-lg-offset-6').removeClass('zbot').removeClass('hidden').removeClass('slideLeft');
}
function closePanel(){
  successpanel.removeClass('slideRight').removeClass('col-lg-offset-6').addClass('slideLeft');
}

//So that our checkSlide function doesn't trigger like crazy, we use debounce to limit the number of times a call can be made over a certain timeframe. Currently, any function wrapped in debounce can only fire once every 20 ms, as defined by the 'wait' argument. I've since reduced the wait time to 5ms in order to smooth the transition.


// function debounce(func, wait = 5, immediate = true) {
//   var timeout;
//   return function() {
//     var context = this, args = arguments;
//     var later = function() {
//       timeout = null;
//       if (!immediate) func.apply(context, args);
//     };
//     var callNow = immediate && !timeout;
//     clearTimeout(timeout);
//     timeout = setTimeout(later, wait);
//     if (callNow) func.apply(context, args);
//   };
// }

//BEGIN SLIDE IN FUNCTION

//const sliderItems = document.querySelectorAll('.slide-in')

// function checkSlide(e){
//   sliderItems.forEach(sliderItem => {
//     //Halfway through the image
//     const slideInAt =(window.scrollY + window.innerHeight) - sliderItem.height / 10;
//     //Bottom of the image
//     const itemBottom = sliderItem.offsetTop + sliderItem.height;
//     const isHalfShown = slideInAt > sliderItem.offsetTop;
//     const isNotScrolledPast = window.scrollY < itemBottom;
//     if(isHalfShown && isNotScrolledPast) {
//       sliderItem.classList.add('active');
//     } else{
//       sliderItem.classList.remove('active');
//     }
//   });
// }



//Event Listeners
signup.on('click', swapPanels);
successexit.on('click', closePanel);
