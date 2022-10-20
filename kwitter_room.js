
//ADD YOUR FIREBASE LINKS HERE

      var firebaseConfig = {
      apiKey: "AIzaSyA0kSVjTPrtuWxzE8Zgu6ZByooajERxwCk",
      authDomain: "kwitter-b0c6d.firebaseapp.com",
      databaseURL: "https://kwitter-b0c6d-default-rtdb.firebaseio.com",
      projectId: "kwitter-b0c6d",
      storageBucket: "kwitter-b0c6d.appspot.com",
      messagingSenderId: "964917361246",
      appId: "1:964917361246:web:70d71e83813f58b4c592cf"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="Welcome " + user_name +"!";

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Roomm Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_name +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function addRoom()
{
room_name = document.getElementById("room_name").value;

firebase.database().ref("/").child(room_name).update({
  purpose : "adding room name"  
})
localStorage.setItem("room_name", room_name);

window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name", name)
 window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "kwitter.html";
}







































