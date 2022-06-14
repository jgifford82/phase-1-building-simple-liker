// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const errorModal = document.querySelector('#modal');
errorModal.classList.add('hidden');

document.addEventListener('DOMContentLoaded', (event) => {
  console.log('DOM fully loaded and parsed');
  hideMessage()
  // errorModal.classList.add('hidden')
  // hideMessage()
  // call findLikes
  // findLikes()
  clickHandler()
});

// function hideMessage(event) {
//   console.log(event.target.classList.contains('hidden'))
  // const 
  // if (event.target.classList.contains('hidden')) {
  // errorModal.classList.remove('hidden')
  // }; else {
  //   errorModal.classList.add('hidden')
  // }
// }

// This worked but didnt pass the test.
// function hideMessage() {
//   errorModal.hidden = true;
// }


function hideMessage() {
  errorModal.classList.add('hidden');
}

function clickHandler() {
  document.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'like-glyph') {
      return mimicServerCall()
      .then((data) => {
        console.log(data)
        const activated = event.target.classList.contains("activated-heart");
        if(activated) {
          event.target.classList.remove("activated-heart")
          event.target.textContent = EMPTY_HEART 
        } else {
          event.target.classList.add("activated-heart")
          event.target.textContent = FULL_HEART
        }
        })
      .catch((error) => {
        console.log(error);
        // console.log(errorModal);
        errorModal.classList.remove('hidden')
        setTimeout(() => hideMessage(), 3000)
        })
    }
  })
}

// function activatedHeart() {
//   if (event.target.classList.contains("activated-heart")) {
//     event.target.classList.remove("activated-heart");
//     document.querySelector(".like-glyph").textContent = FULL_HEART
//   } else {(event.target.classList.add("activated-heart");
//     document.querySelector(".like-glyph").textContent = FULL_HEART)
//   }
// }
// function clickFullHeart() {
//   document.addEventListener('click', (event) => document.querySelector(".like-glyph").classList.remove("activated-heart"))
// }

// if(event.target.classList[0] === 'like-glyph activated-heart'){document.querySelector(".like-glyph.activated-heart").classList.remove("activated-heart")}

// else if(event.target.classList[0] === 'like-glyph.activated-heart'){
//   document.querySelector(".like-glyph.activated-heart").classList.remove("activated-heart")}

// This worked but didnt pass the test.
// document.addEventListener('DOMContentLoaded', (event) => {
//   console.log('DOM fully loaded and parsed');
//   error.classList.add("hidden");
// });

// This worked but didnt pass the test.
// window.onload = function() {
//   document.querySelector('#modal').style.display = 'none';
// };

// const toggle = event.target.textContent = FULL_HEART;
// activated
//   ? document.querySelector(".like-glyph").textContent = EMPTY_HEART
//   : document.querySelector(".like-glyph").textContent = FULL_HEART
//   document.querySelector(".like-glyph").textContent = FULL_HEART
// document.querySelector(".like-glyph").classList.add("activated-heart")
// console.log(event.target.classList.contains("activated-heart"))



// function findLikes() {
//   const like = document.querySelectorAll(".like-glyph")
//   like.forEach((singleLike) => {
//     singleLike.addEventListener('click', () => console.log("found it!"))
//   })
// }

// function clickHandler() {
//   document.addEventListener('click', (event) => {
//     if(event.target.classList[0] === 'like-glyph'){
//     console.log("clicked")
//     }
//   })
//   mimicServerCall()
//   // .then(data => console.log(data))
//   // .catch(error => console.log(error))

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
