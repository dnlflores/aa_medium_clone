window.addEventListener('DOMContentLoaded', () => {
  const feedButton = document.getElementById('feedButton');
  const myShortButton = document.getElementById('myShortButton');
  if(myShortButton){
    const userShortsList = document.getElementById('user-shorts-list');
    const feedsShortsList = document.getElementById('feeds-shorts-list');
    const userShortClassName = userShortsList.className;
    const feedsShortClassName = feedsShortsList.className;

    feedButton.addEventListener("click", (event) => {
      userShortsList.className="hidden"; //reset class name to hidden
      feedsShortsList.className=feedsShortClassName;
      feedButton.setAttribute("style", "color:#AABA49")
      myShortButton.setAttribute("style", "color:#01523E")
    });
    myShortButton.addEventListener("click", (event) => {
      feedsShortsList.className="hidden"; //reset class name to hidden
      userShortsList.className=userShortClassName;
      myShortButton.setAttribute("style", "color:#AABA49")
      feedButton.setAttribute("style", "color:#01523E")
    });
  }
})
