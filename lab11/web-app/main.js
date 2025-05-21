async function fetchGitHubUsers() {
    try {
        const response = await fetch('https://api.github.com/users');
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        return [];
    }
}

async function fetchUserDetails(username) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user details:', error);
        return null;
    }
}

function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';

    const avatar = document.createElement('img');
    avatar.className = 'user-avatar';
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;

    const login = document.createElement('div');
    login.className = 'user-login';
    login.textContent = user.login;

    const link = document.createElement('a');
    link.className = 'user-link';
    link.href = user.repos_url;
    link.target = '_blank';
    link.textContent = 'View Repositories';

    const detailsButton = document.createElement('button');
    detailsButton.className = 'view-details';
    detailsButton.textContent = 'View Details';
    detailsButton.addEventListener('click', async () => {
        const userDetails = await fetchUserDetails(user.login);
        if (userDetails) {
            showUserDetails(userDetails);
        }
    });

    card.appendChild(avatar);
    card.appendChild(login);
    card.appendChild(link);
    card.appendChild(detailsButton);

    return card;
}

function showUserDetails(user) {
    const modal = document.getElementById('modal');
    const userDetails = document.getElementById('user-details');
    
    userDetails.innerHTML = `
        <div class="user-detail-item">
            <strong>Name:</strong> ${user.name || 'Not specified'}
        </div>
        <div class="user-detail-item">
            <strong>Login:</strong> ${user.login}
        </div>
        <div class="user-detail-item">
            <strong>Bio:</strong> ${user.bio || 'No bio available'}
        </div>
        <div class="user-detail-item">
            <strong>Location:</strong> ${user.location || 'Not specified'}
        </div>
        <div class="user-detail-item">
            <strong>Public Repositories:</strong> ${user.public_repos}
        </div>
        <div class="user-detail-item">
            <strong>Followers:</strong> ${user.followers}
        </div>
        <div class="user-detail-item">
            <strong>Following:</strong> ${user.following}
        </div>
        <div class="user-detail-item">
            <strong>GitHub Profile:</strong> 
            <a href="${user.html_url}" target="_blank">${user.html_url}</a>
        </div>
    `;

    modal.style.display = 'block';
}

async function renderUsers(users) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';

    users.forEach(user => {
        const userCard = createUserCard(user);
        usersList.appendChild(userCard);
    });
}

async function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const username = searchInput.value.trim();

    if (username) {
        const user = await fetchUserDetails(username);
        if (user) {
            showUserDetails(user);
        } else {
            alert('User not found');
        }
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', async () => {
    const users = await fetchGitHubUsers();
    await renderUsers(users);

    const searchForm = document.getElementById('search-form');
    searchForm.addEventListener('submit', handleSearch);

    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close');

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
}); 