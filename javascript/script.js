// Initialize Firebase
var config = {
    apiKey: "AIzaSyCu4YmVyU2fb5iIMhzGEQDaZsfbT2emrcg",
    authDomain: "detoura-2ff34.firebaseapp.com",
    databaseURL: "https://detoura-2ff34.firebaseio.com",
    projectId: "detoura-2ff34",
    storageBucket: "detoura-2ff34.appspot.com",
    messagingSenderId: "192883303741"
  };
  firebase.initializeApp(config);

  let database = firebase.database();


  //click event for submit button 
$("#submit").on("click", function (event) {
    event.preventDefault();

    //grab user input 

    let name = $("#name-input").val().trim();
    let email = $("#email-input").val().trim();
    let message = $("#message-input").val().trim();

     // Creates local "temporary" object for holding user data
     let newVisitor = {
        name,
        email,
        message
    };

    //Uploads employee data to the database
    database.ref().push(newVisitor);


    console.log(newVisitor.name);
    console.log(newVisitor.email);
    console.log(newVisitor.message);

    // Clears all of the text-boxes
    $("#name-input").val("");
    $("#email-input").val("");
    $("#message-input").val("");
  


});