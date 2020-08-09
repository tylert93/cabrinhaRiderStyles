document.addEventListener("DOMContentLoaded", () =>{
    var selectAll = document.querySelector("#selectAll");
    var selectFreeride = document.querySelector("#selectFreeride");
    var selectFreestyle = document.querySelector("#selectFreestyle");
    var selectBigAir = document.querySelector("#selectBigAir");
    var selectWakestyle = document.querySelector("#selectWakestyle");
    var selectLightwind = document.querySelector("#selectLightwind");
    var selectStraplessFreestyle = document.querySelector("#selectStraplessFreestyle");
    var selectWaveRiding = document.querySelector("#selectWaveRiding");
    var selectBeginnerFoil = document.querySelector("#selectBeginnerFoil");
    var selectAdvancedFoil = document.querySelector("#selectAdvancedFoil");
    var selectRaceFoil = document.querySelector("#selectRaceFoil");
    var selectedStyle = document.querySelector(".selectedStyle");
    var bindingsRow = document.querySelector(".bindings-row");
    var foilRow = document.querySelector(".foil-row");
    var allProducts = document.querySelectorAll(".product");
    var beginnerProducts = document.querySelectorAll(".beginner");
    var freerideProducts = document.querySelectorAll(".freeride");
    var freestyleProducts = document.querySelectorAll(".freestyle");
    var bigAirProducts = document.querySelectorAll(".bigAir");
    var wakestyleProducts = document.querySelectorAll(".wakestyle");
    var lightwindProducts = document.querySelectorAll(".lightwind");
    var straplessFreestyleProducts = document.querySelectorAll(".straplessFreestyle");
    var waveRidingProducts = document.querySelectorAll(".waveRiding");
    var beginnerFoilProducts = document.querySelectorAll(".beginnerFoil");
    var advancedFoilProducts = document.querySelectorAll(".advancedFoil");
    var raceFoilProducts = document.querySelectorAll(".raceFoil");
    //display all products
    selectAll.addEventListener("click", function(){
        allProducts.forEach(function(item){
            item.style.display = "block";
        })

        bindingsRow.style.display = "flex";
        foilRow.style.display = "flex";
        selectedStyle.textContent = "All";
    })
    //display beginner products
    selectBeginner.addEventListener("click", function(){
        displaySelected(beginnerProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Beginner";
    })
    //display freeride products
    selectFreeride.addEventListener("click", function(){
        displaySelected(freerideProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Freeride";
    })
    //display freestyle products
    selectFreestyle.addEventListener("click", function(){
        displaySelected(freestyleProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Freestyle";
    })
    //display big air products
    selectBigAir.addEventListener("click", function(){
        displaySelected(bigAirProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Big Air";
    })
    //display wakestyle products
    selectWakestyle.addEventListener("click", function(){
        displaySelected(wakestyleProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Wakestyle";
    })
    //display lightwind products
    selectLightwind.addEventListener("click", function(){
        displaySelected(lightwindProducts);
        foilRow.style.display = "none";
        selectedStyle.textContent = "Lightwind";
    })
    //display strapless freestyle products
    selectStraplessFreestyle.addEventListener("click", function(){
        displaySelected(straplessFreestyleProducts);
        foilRow.style.display = "none";
        bindingsRow.style.display = "none";
        selectedStyle.textContent = "Strapless Freestyle";
    })
    //display waveriding products
    selectWaveRiding.addEventListener("click", function(){
        displaySelected(waveRidingProducts);
        bindingsRow.style.display = "none";
        selectedStyle.textContent = "Wave Riding";
    })
    //display beginner foil products
    selectBeginnerFoil.addEventListener("click", function(){
        displaySelected(beginnerFoilProducts);
        selectedStyle.textContent = "Beginner Foil";
    })
    //display advanced foil products
    selectAdvancedFoil.addEventListener("click", function(){
        displaySelected(advancedFoilProducts);
        selectedStyle.textContent = "Advanced Foil";
    })
    //display race foil products
    selectRaceFoil.addEventListener("click", function(){
        displaySelected(raceFoilProducts);
        selectedStyle.textContent = "Race Foil";
    })

    function displaySelected(arr){
        displayNone();
        bindingsRow.style.display = "flex";
        foilRow.style.display = "flex";
        arr.forEach(function(item){
            item.style.display = "block";
        })
    }

    function displayNone(){
        allProducts.forEach(function(item){
            item.style.display = "none";
        })
    }

})