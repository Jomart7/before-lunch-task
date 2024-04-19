let workspaces = [];

function generateRandomToken() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for (let i = 0; i < 14; i++) { 
        token += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return token;
}

function displayWorkspaces() {
    const workspaceList = document.getElementById('workspace-list');
    workspaceList.innerHTML = ''; 
    workspaces.forEach((workspace, index) => {
        const workspaceDiv = document.createElement('div');
        workspaceDiv.className = 'workspace-item';

        workspaceDiv.innerHTML = `
            <span class="title-style">${workspace.title}</span><br>
            <span class="description-style">${workspace.description}</span><br>
        `;

        const open = document.createElement('button');
            open.textContent = 'OPEN';
            open.classList.add('open-button');
            open.addEventListener('click', function() {
                const newHtmlFileUrl = 'two.html';
                window.open(newHtmlFileUrl, '_blank');
            });
            workspaceDiv.appendChild(open);

        const tokenButton = document.createElement('button');
        tokenButton.textContent = 'API Token';
        tokenButton.onclick = () => viewToken(index);
        workspaceDiv.appendChild(tokenButton);

        const editButton = document.createElement('button');
        editButton.textContent = 'Edit';
        editButton.onclick = () => editWorkspace(index);
        workspaceDiv.appendChild(editButton);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.onclick = () => deleteWorkspace(index);
        workspaceDiv.appendChild(deleteButton);

        workspaceList.appendChild(workspaceDiv);
    });
}

document.getElementById('workspace-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;

    const existingWorkspace = workspaces.find(workspace => workspace.title === title);
    if (existingWorkspace) {
        alert('Workspace with the same title already exists.');
        return;
    }

    const newWorkspace = {
        title: title,
        description: description,
        apiToken: generateRandomToken(), 
        tokenVisible: false 
    };

    workspaces.push(newWorkspace);

    document.getElementById('title').value = '';
    document.getElementById('description').value = '';

    displayWorkspaces();
});

function viewToken(index) {
    const workspace = workspaces[index];

    if (workspace.tokenVisible) {
        alert('API token has already been viewed and cannot be viewed again.');
        return;
    }

    alert(`API Token: ${workspace.apiToken}`);

    workspace.tokenVisible = true;
}

function editWorkspace(index) {
    const workspace = workspaces[index];

    const newTitle = prompt('Edit Title:', workspace.title);
    const newDescription = prompt('Edit Description:', workspace.description);

    if (newTitle !== workspace.title) {
        const duplicateWorkspace = workspaces.find(w => w.title === newTitle);
        if (duplicateWorkspace) {
            alert('Workspace with the same title already exists.');
            return;
        }
    }

    if (newTitle !== null) workspace.title = newTitle;
    if (newDescription !== null) workspace.description = newDescription;

    displayWorkspaces();
}

function deleteWorkspace(index) {
    const confirmDeletion = confirm('Are you sure you want to delete this workspace?');
    if (confirmDeletion) {
        workspaces.splice(index, 1);

        displayWorkspaces();
    }
}

displayWorkspaces();
