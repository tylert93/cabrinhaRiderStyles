document.addEventListener("DOMContentLoaded", () => {

    const selectedStyle = document.querySelector(".selectedStyle"),
          dropdownItems = document.querySelectorAll(".dropdown-item"),
          allProducts = document.querySelectorAll(".product"),
          rows = document.querySelectorAll(".row");

    //select all dropdown items
    dropdownItems.forEach(function(item){
        //add click event listener to each item
        item.addEventListener("click", function(){
            //get the style that the user has picked 
            let style = this.getAttribute("id");
            //only show products which are applicable to the style selected 
            allProducts.forEach(item => {
                if(!(item.classList.contains(style))){
                    item.style.display = "none";
                    item.setAttribute("show", "no");
                } else {
                    item.style.display = "block";
                    item.setAttribute("show", "yes");
                }
            })
            
            rows.forEach(item => {

                let thisRow = item,
                    theseProducts = item.querySelectorAll(".product"),
                    anyVisible = false;
                //determine if any rows have no proucts showing at all
                theseProducts.forEach(item => {
                    if(item.getAttribute("show") === "yes"){
                        anyVisible = true;
                    }            
                })
                //if the row has no products showing, hide it
                if(anyVisible === false){
                    thisRow.style.display = "none";
                } else {
                    thisRow.style.display = "flex";
                }

            })
            //update the dropdown show to current style being displayed
            selectedStyle.textContent = this.textContent;

        })
    })

})