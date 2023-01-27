// Create Blackbird counter

var i = 0;

    function incNumber() {
        if (i < 10) {
            i++;
        } 
        document.getElementById("display").innerHTML = i;
    };

    function decNumber() {
        if (i > 0) {
            i--;
        }
        document.getElementById("display").innerHTML = i;
    };

    // Create Robin counter
var b = 0;

    function incNumberR() {
        if (b < 10) {
            b++;
        } 
        document.getElementById("robinDisplay").innerHTML = b;
    };

    function decNumberR() {
        if (b > 0) {
            b--;
        }
        document.getElementById("robinDisplay").innerHTML = b;
    };

// Create Blue tit counter
var x = 0;

    function incNumberBT() {
        if (x < 10) {
            x++;
        } 
        document.getElementById("bluetitDisplay").innerHTML = x;
    };

    function decNumberBT() {
        if (x > 0) {
            x--;
        }
        document.getElementById("bluetitDisplay").innerHTML = x;
    };


// Create Coal Tit counter
var y = 0;

    function incNumberCT() {
        if (y < 10) {
            y++;
        } 
        document.getElementById("coaltitDisplay").innerHTML = y;
    };

    function decNumberCT() {
        if (y > 0) {
            y--;
        }
        document.getElementById("coaltitDisplay").innerHTML = y;
    };


// Create Collared Dove counter
var a = 0;

    function incNumberCD() {
        if (a < 10) {
            a++;
        } 
        document.getElementById("doveDisplay").innerHTML = a;
    };

    function decNumberCD() {
        if (a > 0) {
            a--;
        }
        document.getElementById("doveDisplay").innerHTML = a;
    };



// Create Gold Finch counter
var d = 0;

    function incNumberGF() {
        if (d < 10) {
            d++;
        } 
        document.getElementById("goldfinchDisplay").innerHTML = d;
    };

    function decNumberGF() {
        if (d > 0) {
            d--;
        }
        document.getElementById("goldfinchDisplay").innerHTML = d;
    };

// Create Great Tit counter
var e = 0;

    function incNumberGT() {
        if (e < 10) {
            e++;
        } 
        document.getElementById("greatDisplay").innerHTML = e;
    };

    function decNumberGT() {
        if (e > 0) {
            e--;
        }
        document.getElementById("greatDisplay").innerHTML = e;
    };

// Create Magpie counter
var f = 0;

    function incNumberM() {
        if (f < 10) {
            f++;
        } 
        document.getElementById("magpieDisplay").innerHTML = f;
    };

    function decNumberM() {
        if (f > 0) {
            f--;
        }
        document.getElementById("magpieDisplay").innerHTML = f;
    };

// Create Sparrow counter
var g = 0;

    function incNumberSP() {
        if (g < 10) {
            g++;
        } 
        document.getElementById("sparrowDisplay").innerHTML = g;
    };

    function decNumberSP() {
        if (g > 0) {
            g--;
        }
        document.getElementById("sparrowDisplay").innerHTML = g;
    };

// Create Starling counter
var h = 0;

    function incNumberST() {
        if (h < 10) {
            h++;
        } 
        document.getElementById("starlingDisplay").innerHTML = h;
    };

    function decNumberST() {
        if (h > 0) {
            h--;
        }
        document.getElementById("starlingDisplay").innerHTML = h;
    };


// Create Wood Pigeon counter
var j = 0;

    function incNumberW() {
        if (j < 10) {
            j++;
        } 
        document.getElementById("pigeonDisplay").innerHTML = j;
    };

    function decNumberW() {
        if (j > 0) {
            j--;
        }
        document.getElementById("pigeonDisplay").innerHTML = j;
    };

// Create Long Tailed Tit counter
var k = 0;

    function incNumberLT() {
        if (k < 10) {
            k++;
        } 
        document.getElementById("longtailedDisplay").innerHTML = k;
    };

    function decNumberLT() {
        if (k > 0) {
            k--;
        }
        document.getElementById("longtailedDisplay").innerHTML = k;
    };


    // Select the pop up box
var modal = document.getElementById("answerSection");

// Select the submit button
var btn = document.getElementById("submitanswer");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the pop up box 

let submitResult = () => {

    confetti({
            particleCount: 100,
            spread: 70,
            origin: { y: 0.6 }
            });

    modal.style.display = "block";

    var input = document.getElementById('otherBirds').value;
        
        document.getElementById("answer").innerText = `You saw:
        - ${i} Blackbirds
        - ${b} Robins
        - ${x} Blue Tits
        - ${y} Coal Tits
        - ${a} Collared Doves
        - ${d} Gold Finchs
        - ${e} Great Tits
        - ${f} Magpies
        - ${g} Sparrows
        - ${h} Starlings
        - ${j} Wood Pigeons
        - ${k} Long Tailed Tits
        
        You also saw: 
        ${input}`;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
} 