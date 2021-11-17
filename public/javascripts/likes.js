window.addEventListener('DOMContentLoaded', () => {
  const likeButtons = Array.from(document.getElementsByClassName('likes')) // turns to RRAY
  const unlikeButtons = Array.from(document.getElementsByClassName('deleteLikes'))
  const unlikeButton = unlikeButtons[0]
  const likeButton = likeButtons[0] // grabbing first ele from array like button
  const shortId = likeButton.className.split(' ')[0] //number

  likeButton.addEventListener('click', event => {
    fetch(`/shorts/${shortId}/likes`, {
      method: 'POST' //what we called our route
    })
  likeButton.setAttribute('hidden', 'true')
  unlikeButton.removeAttribute('hidden')
  });

  unlikeButton.addEventListener('click', event => {
    fetch(`/shorts/${shortId}/likes`, {
      method: 'DELETE' //what we called our route
    })
    unlikeButton.setAttribute('hidden', 'true')
    likeButton.removeAttribute('hidden')
  })
});
