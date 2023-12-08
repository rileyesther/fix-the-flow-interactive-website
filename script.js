// JavaScript code for dynamic folder creation and email sharing

function addFolder() {
    var folderName = prompt("Enter folder name:");
    if (folderName) {
        var foldersContainer = document.getElementById('folders');
        var newFolder = document.createElement('div');
        newFolder.className = 'folder';
        newFolder.textContent = folderName;
        foldersContainer.appendChild(newFolder);
    }
}

function shareFolders() {
    var folders = document.querySelectorAll('.folder');
    var folderNames = [];
    
    folders.forEach(function(folder) {
        folderNames.push(folder.textContent);
    });

    var email = prompt("Enter email address to share folders:");
    
    
    
    console.log("Email sent to: " + email);
    console.log("Folders: " + folderNames.join(', '));
}
// Add this function to your existing script.js
function toggleMenu() {
    var menuIcon = document.querySelector('.menu-icon');
    var foldersContainer = document.getElementById('folders');

    menuIcon.classList.toggle('open');
    foldersContainer.classList.toggle('menu-open');
}
