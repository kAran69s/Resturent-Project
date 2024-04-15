
//Unique Firebase Object
var firebaseConfig = {
    apiKey: "AIzaSyD0gSIbAJqIZ8ooT2Nc0x55589YA-cgTmM",
     authDomain: "restro-90e03.firebaseapp.com",
     projectId: "restro-90e03",
     storageBucket: "restro-90e03.appspot.com",
     messagingSenderId: "1051347885312",
     appId: "1:1051347885312:web:e768df234a84a2f5ebe7e5",
     measurementId: "G-J3N6XYR6T5",
 };
 
 //Initialize Firebase
 firebase.initializeApp(firebaseConfig);
 var firestore = firebase.firestore();

 const db = firestore.collection("login");
 const db1 = firestore.collection("booking");


let submitButton = document.getElementById("register");
submitButton.addEventListener("click", (e) => {
    //Prevent Default Form Submission Behavior
    e.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let CPassword = document.getElementById("CPassword").value;




     //enable alert
    // document.querySelector('.alert').style.display = "block";

     //remove the alert massage
    // setTimeout(() =>{
      //   document.querySelector('.alert').style.display = "none";
    // }, 3000);
 
     //reset the form
     document.getElementById("registrationForm").reset();





var docRef = firestore.collection("login").doc(email);

docRef.get().then((doc) => {
    if (doc.exists) {
        alert("email already taken");
    } else {
        db.doc(email)
            .set({
                username: username,
              email: email,
              password: password,
              CPassword: CPassword,
            })
            .then(() => { })
            .catch((error) => {
              console.log(error);
            });
        
          //alert
          alert("Registration Successful");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

});



