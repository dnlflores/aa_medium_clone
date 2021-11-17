window.addEventListener('DOMContentLoaded', () => {
    const addComment = document.querySelector('#add-comment');
    const addSection = document.querySelector('.add-section');
    addComment.addEventListener('click', () => {
        addSection.setAttribute('style', 'visibility: visible');
    })

    const submitAdd = document.querySelector('.submit-add');
    
    submitAdd.addEventListener('click', async () => {
        const commentSection = document.querySelector('.comment-section');
        const precontent = document.querySelector('#content').value;
        const content = new URLSearchParams({
            content: precontent
        })
        console.log('hello')
        const response = await fetch(`/shorts/${submitAdd.id}/comments`, {
            method: 'POST',
            body: content
        })
        console.log('hello again')
        
        let resContent = await response.text();
        //console.log(response.resolve())
        console.log(JSON.parse(resContent))
        resContent = JSON.parse(resContent)
        const username = resContent.username;
        commentSection.innerHTML += 
        `<div>
            <p>${username}<p>
            <pre>${precontent}<pre>
        </div>`;
    })
});