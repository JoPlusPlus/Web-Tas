let availableCopies = 8;


// Buy button
function buyBook() {

    if (availableCopies > 0) {

        availableCopies--;

        document.getElementById("copies").innerText = availableCopies;

        document.getElementById("message").innerText =
            "Book purchased successfully!";

    } else {

        document.getElementById("message").innerText =
            "Sorry, this book is not available.";
    }
}


// Book button
function bookBook() {

    if (availableCopies > 0) {

        document.getElementById("message").innerText =
            "Book reserved successfully!";

    } else {

        document.getElementById("message").innerText =
            "Sorry, there are no copies available.";
    }
}