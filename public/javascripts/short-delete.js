window.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = Array.from(document.getElementsByClassName('delete-short-buttons'));

    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            fetch(`/shorts/${button.id}`, {
                method: 'DELETE',
            });
            const shortDiv = document.getElementById(`short-div-${button.id}`);
            shortDiv.remove();
        });
    });

    const pageDeleteButton = document.querySelector('.delete-page');

    if (pageDeleteButton) {
        pageDeleteButton.addEventListener('click', event => {
            fetch(`/shorts/${event.target.id}`, {
                method: 'DELETE',
            }).then(res => {
                console.log(res.redirected, 'test');
                if (!res.redirected) {
                    console.log('HEREEEEEE');
                    window.location.href = '/shorts'
                }
            });
        });
    }
});