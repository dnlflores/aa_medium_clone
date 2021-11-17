window.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = Array.from(document.querySelectorAll('.delete'));
    deleteButtons.forEach( button => {
        button.addEventListener('click',() => {
            fetch(`/shorts/${button.id}`, {
                method: 'DELETE',
            });
            button.parentElement.innerHTML = '';
        });
    });

    const pageDeleteButton = document.querySelector('.delete-page');

    pageDeleteButton.addEventListener('click', event => {
        console.log(window.location.href);
        fetch(`/shorts/${event.target.id}`, {
            method: 'DELETE',
        }).then( res => {
            if(res.redirected) {
                window.location.href= '/shorts'
            }
        });
    });
});