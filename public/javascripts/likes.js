window.addEventListener('DOMContentLoaded', () => {
  const likeButtons = Array.from(document.getElementsByClassName('likes')) // turns to RRAY
  const unlikeButtons = Array.from(document.getElementsByClassName('deleteLikes'))

  const likeButton = likeButtons[0] // grabbing first ele from array like button
  const shortId = likeButton.className.split(' ')[0] //number

  likeButton.addEventListener('click', event => {
    fetch(`/shorts/${shortId}/likes`, {
      method: 'POST' //what we called our route
    })
  });
});
