window.addEventListener('DOMContentLoaded', () => {
    const deleteButtons = Array.from(document.getElementsByClassName('deleteFollow'));
    const followButtons = Array.from(document.getElementsByClassName('follow'));
    const youFollow = document.getElementById('youFollow')
    if (deleteButtons.length !== 0) {
        const userId = deleteButtons[0].className.split(' ')[1];
        const deleteBut = deleteButtons[0];
        const followButton = followButtons[0];
        deleteBut.addEventListener('click', event => {
            fetch(`/users/${userId}/follows`, {
                method: 'DELETE',
            });
            const followers = document.getElementById('followers');
            const followersNum = parseInt(followers.innerText.split(':')[1], 10);
            followers.innerHTML = `Followers: ${followersNum - 1}`;
            followButton.removeAttribute('hidden');
            deleteBut.setAttribute('hidden', 'true');
            youFollow.setAttribute('hidden', 'true');
        });
    }

    if (followButtons.length !== 0) {
        const userID = followButtons[0].className.split(' ')[1];
        const followBut = followButtons[0];
        followBut.addEventListener('click', event => {
            fetch(`/users/${userID}/follows`, {
                method: 'POST',
            });
            const deleteBut = deleteButtons[0];
            const followers = document.getElementById('followers');
            const followersNum = parseInt(followers.innerText.split(':')[1], 10);
            followers.innerHTML = `Followers: ${followersNum + 1}`;
            followBut.setAttribute('hidden', 'true');
            deleteBut.removeAttribute('hidden');
            youFollow.removeAttribute('hidden');
        });
    }
});






