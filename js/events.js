/*var numOne = document.getElementById("num-one");
var numTwo = document.getElementById("num-two");
var addSum = document.getElementById("add-sum");

//numOne.addEventListener("input", function(){

//});  I could do it this way above with an anonymous function or below with a named function.

numOne.addEventListener("input", add);
numTwo.addEventListener("input", add);

function add() {
        var one = parseFloat(numOne.value) || 0;
        var two = parseFloat(numTwo.value) || 0;
        //var sum = one + two;
        addSum.innerHTML =  "Your sum is: " + (one+two);
}
*/

var simon = document.getElementById("simon");
//var simonPic =  document.getElementById("simon-pic");

var bruce = document.getElementById("bruce");
//var brucePic =  document.getElementById("bruce-pic");

var tom = document.getElementById("tom");
//var tomPic =  document.getElementById("tom-pic");

/*simon.addEventListener("click", function(){
        if (simonPic.className === "hide") {
                simonPic.className = "";

        }
        else {
                simonPic.className = "hide";
        }
});

bruce.addEventListener("click", function(){
        if (brucePic.className === "hide") {
                brucePic.className = "";
        }

        else {
                brucePic.className = "hide";
        }
});

tom.addEventListener("click", function(){
        if (tomPic.className === "hide") {
                tomPic.className ="";
        }

        else {
                tomPic.className = "hide";
        }
});
*/

simon.addEventListener("click", picLink);
bruce.addEventListener("click", picLink);
tom.addEventListener("click", picLink);

function picLink(){
        var allImages =   document.querySelectorAll("img");

        for(var i = 0; i < allImages.length; i++) {
                allImages[i].className = "hide";
        }

        var picId = this.attributes["data-img"].value;
        var pic = document.getElementById(picId);
        if (pic.className === "hide") {
                pic.className ="show";
        }

        else {
                pic.className = "hide";
        }

}


var name = "chris";
//console.log(`your name is ${name}`); This is the ES6 way
console.log("your name is" + " " + name);
