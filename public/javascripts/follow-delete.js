window.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = Array.from(document.getElementsByClassName('deleteFollow'));
    if (deleteButtons.length !== 0) {
        const userId = deleteButtons[0].className.split(' ')[1];
        const deleteBut = deleteButtons[0];
        deleteBut.addEventListener('click', event => {
            fetch(`/users/${userId}/follows`, {
                method: 'DELETE',
            }).then(res => {
                if (res.redirected) {
                    window.location.href = `${userId}`;
                }
            });
        });
    }
});






