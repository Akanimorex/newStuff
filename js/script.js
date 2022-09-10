// JavaScript source code
var password = "robot";

function passcheck() {
    if (document.getElementById('pass1').value != password) {
        alert('Wrong Password, Try Again')

        return false;
    }
    if (document.getElementById('pass1').value == password) {
        alert('Correct Password, click OK');
    }
};
// var item = 1;

// if (age == 1) {
//     console.log("You are");
// }

// if (age == 2) {
//     console.log("Yfadfa");
// }

// else {
//     console.log("u9e");
// }


const items = [
    {
        number: 0,
        info:"shi shi",
        shippingFee:"yidi yada",
        reservePrice:"350",
        Total : "30"

    },
    {
        number: 1,
        info:"durag",
        shippingFee:"yidi yada",
        reservePrice:"350",
        Total : "30"

    },
    {
        number: 2,
        info:"denim jeans",
        shippingFee:"yidi yoga",
        reservePrice:"350",
        Total : "30"

    }

    //keep adding the items here following this format, seperating each data set by a COMMA

];

let infoDiv = document.getElementById('info-div');
let costDiv = document.getElementById('cost-div');
let reserveDiv = document.getElementById('reserve-div');
let totalDiv = document.getElementById('total-div');


const fetchData =()=>{
    
    
    const itemNumber = document.getElementById('item-number');
    
    //looping around the array of objects
    items.forEach(element => { 
        if (itemNumber.value == element.number){  //checking if the number typed is the same as the item number
            console.log (element.info);
            infoDiv.innerHTML=(element.info);
            costDiv.innerHTML=(element.shippingFee);
            reserveDiv.innerHTML=`$${element.reservePrice}`;
            totalDiv.innerHTML=`$${element.Total}`;
            //pushing it to html
        }
    });
    
}

const fetchButton = document.getElementById('fetch-button');  //getting the button from html


// clicking the button triggers the fetchData function

fetchButton.addEventListener('click',(items)=>{
    fetchData();
});


//NOW THAT'S HOW TO WRITE PROFESSIONAL CODE, YO 😎



