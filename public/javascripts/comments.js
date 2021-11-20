window.addEventListener('DOMContentLoaded', () => {
    const commentSection = document.querySelector('.comment-section');

    const addComment = document.querySelector('#add-comment');
    const addSection = document.querySelector('.add-section');

    const socket = new WebSocket('wss://aa-gp7-shorts.herokuapp.com/comments');

    socket.onmessage = (msg) => {
        console.log('a message has been recieved');
        console.log(msg.data)
        const comment = msg.data.split(':');

        if(comment[3] === 'new') {
            commentSection.innerHTML += 
            `<div>
            <p>${comment[0]}</p>
            <pre>${comment[1]}</pre>
            <button id='edit-${comment[2]}' class='edit-comment'> Edit </button>
            <button id='delete-${comment[2]}' class='delete-comment'> Delete </button>
            </div>`;
            resetListenersAdd();
        } else if(comment[3] === 'edit') {

            const editDiv = document.getElementById(`${comment[2]}`)
    
            editDiv.innerHTML = 
                    `
                        <p>${comment[0]}</p>
                        <pre>${comment[1]}</pre>
                        <button id='edit-${comment[2]}' class='edit-comment'> Edit </button>
                        <button id='delete-${comment[2]}' class='delete-comment'> Delete </button>
                    `;
                    
                    resetListeners();
        }


    }
    
    
    addComment.addEventListener('click', () => {
        addSection.setAttribute('style', 'visibility: visible');
    })
    
    const cancelAdd = document.querySelector('.cancel-add');
    
    cancelAdd.addEventListener('click', () => {
        document.querySelector('#add-content').value = '';
        addSection.setAttribute('style', 'visibility: hidden; height: 0px;');
    });
    
    const submitAdd = document.querySelector('.submit-add');
    
    submitAdd.addEventListener('click', async () => {
        const precontent = document.querySelector('#add-content').value;
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
        // commentSection.innerHTML += 
        // `<div>
        // <p>${username}</p>
        // <pre>${precontent}</pre>
        // <button id='edit-${commentId}' class='edit-comment'> Edit </button>
        // <button id='delete-${commentId}' class='delete-comment'> Delete </button>
        // </div>`;
        
        socket.send(`${username}:${precontent}:${commentId}:new`);
        
        document.querySelector('#add-content').value = '';
        addSection.setAttribute('style', 'visibility: hidden; height: 0px;');
    });
    
    function deleteListeners() {
        const deleteButtons = Array.from(document.querySelectorAll('.delete-comment'));
        deleteButtons.forEach( button => {
            button.addEventListener('click', async () => {
                const id = button.id.slice(7)
                await fetch(`/comments/${id}`, {
                    method: 'DELETE',
                });
                button.parentElement.remove();
            });
        });
    };

    

    function addListeners() {
        const editButtons = Array.from(document.querySelectorAll('.edit-comment'));
        editButtons.forEach( button => {
            if(button.getAttribute('listener') !== 'true') {
                skipCheck(button);
            }
        });
    };

    function resetListeners() {
        addListeners();
        deleteListeners();
    };

    function resetListenersAdd() {
        const editButtons = Array.from(document.querySelectorAll('.edit-comment'));
        editButtons.forEach( button => {
            skipCheck(button);
        });
        deleteListeners();
    };
    
    resetListeners();

    function skipCheck(button) {

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
            // const editDiv = document.querySelector(`#edit-div-${id}`)

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

                socket.send(`${username}:${precontent}:${id}:edit`);

                // editDiv.parentElement.innerHTML = 
                // `
                //     <p>${username}</p>
                //     <pre>${precontent}</pre>
                //     <button id='edit-${id}' class='edit-comment'> Edit </button>
                //     <button id='delete-${id}' class='delete-comment'> Delete </button>
                // `;
                
                // resetListeners();
                // editDiv.remove();

            })

            editCancel.addEventListener('click', () => {
                
                resetListeners();
                editDiv.remove();
            });
            
        });
    }

});