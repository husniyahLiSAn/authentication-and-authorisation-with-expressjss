async function loadUserProfile() {
    const response = await fetch('http://127.0.0.1:4001/auth/user', {
        credentials: "include"
    });
    const user = (await response.json())?.payload;
    if (!user) {
        alert('Failed to load user profile');
        window.location.href = './index.html';
        return
    }
    document.getElementById('username').value = user.username;
    document.getElementById('contact_number').value = user.contact_number;
    document.getElementById('email').value = user.email;
}

document.getElementById('profile-form').addEventListener('submit', async function (event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const contact_number = document.getElementById('contact_number').value;
    const email = document.getElementById('email').value;
    const response = await fetch('http://127.0.0.1:4001/auth/user', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, contact_number }),
        credentials: "include"
    });
    const result = await response.json();
    if (result.ok) {
        alert('Profile updated successfully');
    } else {
        alert(result.message);
    }
});

document.getElementById("delete-user-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const username = document.getElementById("other-username").value;
    const response = await fetch(`http://127.0.0.1:4001/auth/delete/user`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            username
        }),
        credentials: "include"
    });
    const result = await response.json();
    if (result.ok) {
        alert(`User ${username} deleted successfully.`);
    } else {
        alert(result.message);
    }
});

loadUserProfile();