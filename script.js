const ratingButton = document.querySelectorAll("[data-rating]")
const submitButton = document.querySelector('[data-submit-button]')
const ratingCard = document.getElementById('rating-card')
const thankYouCard = document.getElementById('thank-you-card')
const ratingNumber = document.getElementById('rating-number')
let tempNumb

ratingButton.forEach((rating) => {
	rating.addEventListener("click", () => {
    removeClasses()
		tempNumb = appendNumber(tempNumb,rating.innerText);
    console.log(tempNumb)
    rating.classList.add('active')
	});
});
submitButton.addEventListener('click', ()=>{
  if(!tempNumb)return
  ratingNumber.innerText = tempNumb
  submitButton.classList.add('active')
  ratingCard.classList.remove('show')
  thankYouCard.classList.add('show')
})












function removeClasses(){
ratingButton.forEach(rating =>{
  rating.classList.remove('active')
})
}
function appendNumber(number, innerText){
  number = parseInt(innerText)
  return number
}

console.log(ratingButton)
console.log(tempNumb)