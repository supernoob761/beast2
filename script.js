document.getElementById("pizzaForm").addEventListener("submit", function(e) {
    e.preventDefault(); // stop page refresh
    const pizza = document.getElementById("pizza").value;
    const size = document.querySelector("input[name=size]:checked")?.value;

    if (size) {
        document.getElementById("orderResult").textContent =
            `You ordered a ${size} ${pizza} pizza! 🍕`;
    } else {
        document.getElementById("orderResult").textContent =
            "Please select a size.";
    }
});
