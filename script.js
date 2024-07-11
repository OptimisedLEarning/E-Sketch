document.addEventListener("DOMContentLoaded", () => {
    const container = document.getElementById("container");
    


    const button_inputGrids =document.createElement("button");
    container.appendChild(button_inputGrids);


    // Create the 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const divs = document.createElement("div");
        divs.classList.add("grid-item");
        container.appendChild(divs);
    }

    // Select all grid items
    const gridItems = document.querySelectorAll(".grid-item");

    // Add event listeners to each grid item
    gridItems.forEach((item) => {
        

        item.addEventListener(
            "mouseenter",
            (event) => {
                // Highlight the mouseenter target
                event.target.style.backgroundColor = "purple";
            },
            false
        );

        item.addEventListener(
            "mouseleave",
            (event) => {
                // Reset the color when the mouse leaves
                event.target.style.backgroundColor = "";
            },
            false
        );
    });
});
