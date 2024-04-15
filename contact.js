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
  const db = firestore.collection("contact");

  let Send = document.getElementById("Send");
  Send.addEventListener("click", (e) => {
      //alert("Booking Successful");
      //Prevent Default Form Submission Behavior
      e.preventDefault();
  
      let name = document.getElementById("name").value;
      let email = document.getElementById("email").value;
      let subject = document.getElementById("subject").value;
      let massage = document.getElementById("massage").value;



      document.querySelector('.alert').style.display = "block";

      //remove the alert massage
      setTimeout(() =>{
          document.querySelector('.alert').style.display = "none";
      }, 3000);
  
      //reset the form
      document.getElementById("form").reset();
      
       // Save Form Data To Firebase
    db.add({
      name: name,
      email: email,
      subject: subject,
      massage: massage,
  })
  .then(() => {
      console.log("Data successfully written to Firestore!");
      //alert("Your order has been placed successfully.");
  })
  .catch((error) => {
      console.error("Error writing document: ", error);
      alert("An error occurred while placing your order. Please try again later.");
  });
  
  });












