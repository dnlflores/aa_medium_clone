window.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = Array.from(document.querySelectorAll('.delete'));
    console.log(deleteButtons)
    deleteButtons.forEach( button => {
        button.addEventListener('click',() => {
            fetch(`/shorts/${button.id}`, {
                method: 'DELETE',
            });
            console.log(button)
            button.parentElement.innerHTML = '';
        })
    })
});