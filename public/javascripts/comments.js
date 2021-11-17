window.addEventListener('DOMContentLoaded', () => {
    const addComment = document.querySelector('#add-comment');
    const addSection = document.querySelector('.add-section');
    addComment.addEventListener('click', () => {
        console.log('hey')
        console.log(addSection)
        addSection.setAttribute('style', 'visibility: visible');
    })

    const submitAdd = document.querySelector('.submit-add');

    submitAdd.addEventListener('click', () => {
        
    })
});