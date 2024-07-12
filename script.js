document.addEventListener("DOMContentLoaded", () => {
    
     // Button functionality 

     const button =document.getElementById("ask");
     button.addEventListener('click',inputFunc)
    //  what button will do
    function inputFunc() {
            // clearing the existing grid 
            const container = document.getElementById('container');
            container.innerHTML = ''; 


        // Code to execute when the button is clicked
        let userInput= Number(prompt("enter the no grid patterns "));
        
        
        if (isNaN(userInput)|| userInput<=0  || userInput>100 ){
            alert(" Please enter a valid number ");
            return;
            
        }

       
        // Create the 16x16 grid
        for (let i = 0; i < userInput* userInput; i++) {
            const divs = document.createElement("div");
            divs.classList.add("grid-item");
            container.appendChild(divs);
        }
        var colors = ['red', 'blue', 'green', 'teal', 'rosybrown', 'tan', 'plum', 'saddlebrown','brown','orange' ,'pink','yellow'];
        // Select all grid items
        const gridItems = document.querySelectorAll(".grid-item");
    
        // Add event listeners to each grid item
        gridItems.forEach((item) => {
            
    
            item.addEventListener(
                "mouseenter",
                (event) => {
                    // Highlight the mouseenter target
                    event.target.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];;
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

    }


    // You could easily add more colors to this array.



    
   

    
});
