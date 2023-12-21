function addNewSquare() {
    var squareName = prompt("Enter the name for the new square:");

    if (squareName !== null && squareName.trim() !== "") {
        var newSquare = document.createElement("div");
        newSquare.className = "medium-square"; // Reuse the styling for medium squares

        var newNameInput = document.createElement("input");
        newNameInput.type = "text";
        newNameInput.value = squareName;
        newNameInput.disabled = true;
        newNameInput.className = "square-name";

        newSquare.appendChild(newNameInput);

        var imageContainer = document.querySelector(".image-container");
        imageContainer.insertBefore(newSquare, imageContainer.firstChild);
    }
}


function sortByName() {
    var squares = document.querySelectorAll('.medium-square');
    var sortedSquares = Array.from(squares).sort((a, b) => {
        var nameA = a.querySelector('.square-name').value.toUpperCase();
        var nameB = b.querySelector('.square-name').value.toUpperCase();
        return nameA.localeCompare(nameB);
    });

    var container = document.querySelector(".image-container");
    container.innerHTML = ""; // Clear the container

    sortedSquares.forEach(square => {
        container.appendChild(square);
    });
}

function sortByDate() {
    // Add sorting by date logic here
    alert("Sorting by date is not implemented yet.");
}
