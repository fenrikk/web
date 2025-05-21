// GitHub API base URL
const GITHUB_API_BASE = 'https://api.github.com';

// State management
let currentUsers = [];
let currentView = 'grid';

// Utility functions
function showLoading() {
    document.getElementById('loading').style.display = 'block';
}

function hideLoading() {
    document.getElementById('loading').style.display = 'none';
}

function showError(message) {
    alert(message);
}

// API functions
async function fetchGitHubUsers() {
    try {
        showLoading();
        const response = await fetch(`${GITHUB_API_BASE}/users`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        showError('Failed to fetch users. Please try again later.');
        return [];
    } finally {
        hideLoading();
    }
}

async function fetchUserDetails(username) {
    try {
        showLoading();
        const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const user = await response.json();
        return user;
    } catch (error) {
        console.error('Error fetching user details:', error);
        showError('Failed to fetch user details. Please try again later.');
        return null;
    } finally {
        hideLoading();
    }
}

async function fetchUserRepos(username) {
    try {
        const response = await fetch(`${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=5`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const repos = await response.json();
        return repos;
    } catch (error) {
        console.error('Error fetching user repositories:', error);
        return [];
    }
}

// UI functions
function createUserCard(user) {
    const card = document.createElement('div');
    card.className = 'user-card';

    const avatar = document.createElement('img');
    avatar.className = 'user-avatar';
    avatar.src = user.avatar_url;
    avatar.alt = `${user.login}'s avatar`;
    avatar.loading = 'lazy';

    const login = document.createElement('div');
    login.className = 'user-login';
    login.textContent = user.login;

    const link = document.createElement('a');
    link.className = 'user-link';
    link.href = user.html_url;
    link.target = '_blank';
    link.textContent = 'View Profile';

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

    // Fetch and display user repositories
    fetchUserRepos(user.login).then(repos => {
        const reposList = document.getElementById('repos-list');
        reposList.innerHTML = repos.map(repo => `
            <div class="repo-card">
                <div class="repo-name">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="repo-description">${repo.description || 'No description available'}</div>
                <div class="repo-stats">
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                    <span><i class="fas fa-code"></i> ${repo.language || 'N/A'}</span>
                </div>
            </div>
        `).join('');
    });

    modal.style.display = 'block';
}

function renderUsers(users) {
    const usersList = document.getElementById('users-list');
    usersList.innerHTML = '';
    usersList.className = currentView === 'grid' ? 'users-grid' : 'users-list';

    users.forEach(user => {
        const userCard = createUserCard(user);
        usersList.appendChild(userCard);
    });
}

function sortUsers(users, sortBy) {
    return [...users].sort((a, b) => {
        switch (sortBy) {
            case 'login':
                return a.login.localeCompare(b.login);
            case 'repos':
                return b.public_repos - a.public_repos;
            case 'followers':
                return b.followers - a.followers;
            default:
                return 0;
        }
    });
}

// Event handlers
async function handleSearch(event) {
    event.preventDefault();
    const searchInput = document.getElementById('search-input');
    const username = searchInput.value.trim();

    if (username) {
        const user = await fetchUserDetails(username);
        if (user) {
            showUserDetails(user);
        } else {
            showError('User not found');
        }
    }
}

function handleSort(event) {
    const sortBy = event.target.value;
    currentUsers = sortUsers(currentUsers, sortBy);
    renderUsers(currentUsers);
}

function handleViewToggle(event) {
    const view = event.target.id === 'grid-view' ? 'grid' : 'list';
    if (view !== currentView) {
        currentView = view;
        document.getElementById('grid-view').classList.toggle('active');
        document.getElementById('list-view').classList.toggle('active');
        renderUsers(currentUsers);
    }
}

// Initialize the application
async function initializeApp() {
    try {
        currentUsers = await fetchGitHubUsers();
        renderUsers(currentUsers);

        // Set up event listeners
        document.getElementById('search-form').addEventListener('submit', handleSearch);
        document.getElementById('sort-select').addEventListener('change', handleSort);
        document.getElementById('grid-view').addEventListener('click', handleViewToggle);
        document.getElementById('list-view').addEventListener('click', handleViewToggle);

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
    } catch (error) {
        console.error('Error initializing app:', error);
        showError('Failed to initialize the application. Please refresh the page.');
    }
}

// Start the application when the DOM is loaded
document.addEventListener('DOMContentLoaded', initializeApp); 