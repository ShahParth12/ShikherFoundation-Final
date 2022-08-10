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
const db = getDatabase();

var fullname = document.getElementById("fullname");
var conno = document.getElementById("conno");
var address = document.getElementById("addr");
var dob = document.getElementById("dob");
var volunteer_info = document.getElementById("volinfo");
var prev_vol = document.getElementById("prevvol");


var send = document.getElementById("sendbtn");

function Insertdata(){
    set(ref(db,"Volunteer/"+fullname.value ) ,{
      Name : fullname.value,
      Contact_Number : conno.value,
      Address : address.value ,
      Date_of_birth: dob.value,
      Why_do_you_wish_to_volunteer : volunteer_info.value,
      have_you_volunteered_before : prev_vol.value 
    })
    .then(()=>{
      alert("data added succesfully");
    })
    .catch((error)=>{
      alert("unsuccesful , error" + error);
    });
  }

  send.addEventListener('click',Insertdata);