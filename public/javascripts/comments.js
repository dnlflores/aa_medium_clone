window.addEventListener('DOMContentLoaded', () => {

    const addComment = document.querySelector('#add-comment');
    const addSection = document.querySelector('.add-section');

    addComment.addEventListener('click', () => {
        addSection.setAttribute('style', 'visibility: visible');
    })

    const cancelAdd = document.querySelector('.cancel-add');

    cancelAdd.addEventListener('click', () => {
        document.querySelector('#content').value = '';
        addSection.setAttribute('style', 'visibility: hidden; height: 0px;');
    });

    const submitAdd = document.querySelector('.submit-add');
    
    submitAdd.addEventListener('click', async () => {
        const commentSection = document.querySelector('.comment-section');
        const precontent = document.querySelector('#content').value;
        const content = new URLSearchParams({
            content: precontent
        })
        
        const response = await fetch(`/shorts/${submitAdd.id}/comments`, {
            method: 'POST',
            body: content
        })

        
        let resContent = await response.text();
        resContent = JSON.parse(resContent)
        const username = resContent.username;
        const commentId = resContent.commentId;
        commentSection.innerHTML += 
        `<div>
            <p>${username}</p>
            <pre>${precontent}</pre>
            <button id='edit-${commentId}' class='edit-comment'> Edit </button>
            <button id='delete-${commentId}' class='delete-comment'> Delete </button>
        </div>`;
        
        resetListeners();
        document.querySelector('#content').value = '';
        addSection.setAttribute('style', 'visibility: hidden; height: 0px;');
    });

    function deleteListeners() {
        const deleteButtons = Array.from(document.querySelectorAll('.delete-comment'));
        deleteButtons.forEach( button => {
            button.addEventListener('click', async () => {
                console.log('hello')
                const id = button.id.slice(7)
                console.log(id)
                await fetch(`/comments/${id}`, {
                    method: 'DELETE',
                });
                button.parentElement.remove();
            });
        });
    }

    

    function addListeners() {
        const editButtons = Array.from(document.querySelectorAll('.edit-comment'));
        editButtons.forEach( button => {
            if(button.getAttribute('listener') !== 'true') {
                button.setAttribute('listener', 'true');
                button.addEventListener('click', async function editFunc(event) {
                    button.setAttribute('listener', 'false');
                    const id = button.id.slice(5);
                    
                    button.parentElement.innerHTML += `
                        <div id='edit-div-${id}'>
                            <label for='content'> Content </label>
                            <textarea id='edit-content-${id}', name='content', rows=3, cols=30></textarea>
                            <button id='edit-submit-${id}'> Submit </button>
                            <button id='edit-cancel-${id}'> Cancel </button>
                        </div>
                    `;
        
                    const editSubmit = document.querySelector(`#edit-submit-${id}`)
                    const editCancel = document.querySelector(`#edit-cancel-${id}`)
                    const editDiv = document.querySelector(`#edit-div-${id}`)
        
                    editSubmit.addEventListener('click', async () => {
                        const precontent = document.querySelector(`#edit-content-${id}`).value;
                        const content = new URLSearchParams({
                            content: precontent
                        })
                        
                        const response = await fetch(`/comments/${id}`, {
                            method: 'PUT',
                            body: content
                        });
            
                        
                        let resContent = await response.text();
                        resContent = JSON.parse(resContent)
                        const username = resContent.username;
        
                        editDiv.parentElement.innerHTML = 
                        `<div>
                            <p>${username}</p>
                            <pre>${precontent}</pre>
                            <button id='edit-${id}' class='edit-comment'> Edit </button>
                            <button id='delete-${id}' class='delete-comment'> Delete </button>
                        </div>`;
                        
                        resetListeners();
                        editDiv.remove();
        
                    })
    
                    editCancel.addEventListener('click', () => {
                        
                        resetListeners();
                        editDiv.remove();
                    });
                    
                });
            }
        });
    }
    function resetListeners() {
        addListeners();
        deleteListeners();
    }
    
    resetListeners();

});