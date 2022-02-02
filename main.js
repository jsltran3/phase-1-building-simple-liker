// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
const heartButton = document.querySelectorAll(".like-glyph");
// heartButton.style.color = "red"

// Your JavaScript code goes here!

function notFetch(event) {
  const heartLike = event.target; 
  mimicServerCall("fakeServerUrl") 
    .then(function() {
      if (heartLike.innerText === EMPTY_HEART) {
        heartLike.innerText = FULL_HEART; 
        //why do i need a className here??
        heartLike.className = "activated-heart"; 
      } else {
        heartLike.innerText = EMPTY_HEART;
        //why do i have to use ""
        heartLike.className = ""; 
      }
  })
  .catch(function(error) {
    const errorModal = document.getElementById('modal'); 
    errorModal.className = "";
    errorModal.innerText = error; 
    setTimeout(() => errorModal.className = "hidden", 3000)
  });
}
  for (const glyph of heartButton) {
    glyph.addEventListener('click', notFetch);
}



// function heartToggle() {
//   const like = heartButton.innerText;
//   if(like === EMPTY_HEART) {
//     heartButton.innerText = FULL_HEART;
//   } else {
//     heartButton.innerText = EMPTY_HEART;
//   }
// }

// document.addEventListener("DOMContentLoaded", () => {

// });


//.hidden = true;
// document.getElementById(like)




// document.addEventListener('DOMContentLoaded', () => {
//   document.querySelector('form').addEventListener('submit', (e) => {
//     e.preventDefault();
//     handleToDo(e.target.children[1].value);
//   })
// })

// function handleToDo(todo) {
//   console.log(todo);
//   let toDoList = document.createElement('li');
//   toDoList.textContent = todo; 
//   document.querySelector('#list').firstChild.nextElementSibling.nextElementSibling.appendChild(toDoList);
// }


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
