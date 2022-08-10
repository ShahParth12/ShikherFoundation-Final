// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.8.1/firebase-app.js";
import  {getDatabase , ref , set , child , update ,remove} from "https://www.gstatic.com/firebasejs/9.8.1/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCdTLLg3U72vWU3V6PnaYW8WN9y2rw70Ns",
    authDomain: "shikher-foundations.firebaseapp.com",
    databaseURL: "https://shikher-foundations-default-rtdb.firebaseio.com",
    projectId: "shikher-foundations",
    storageBucket: "shikher-foundations.appspot.com",
    messagingSenderId: "48520475587",
    appId: "1:48520475587:web:5941f4e0dc88e000378376"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db= getDatabase();

var fullname = document.getElementById("fullname");
var email = document.getElementById("email");
var phoneno = document.getElementById("phno");
var address = document.getElementById("addr");
var donate = document.getElementById("things");
var nob = document.getElementById("nob");


var sendbtn = document.getElementById("senddata");

function send(){
    set(ref(db,"Donations/"+fullname.value ) ,{
      Name : fullname.value,
      Email_id: email.value,
      phone_number : phoneno.value ,
      Address : address.value ,
      Items_donated : donate.value,
      Number_of_bags : nob.value
    })
    .then(()=>{
      alert("data added succesfully");
    })
    .catch((error)=>{
      alert("unsuccesful , error" + error);
    });
  }
  sendbtn.addEventListener('click',send);