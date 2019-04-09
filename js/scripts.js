$(document).ready(function (){
  $("form#tickets").submit(function(event){
  
    event.preventDefault();   
    
    var userMovie =$("select#movie").val();
    var userTime = $("select#timeTickets").val();
    var userAge = $("select#age").val();
   


//back end logic

function Tickets (name, time, age) {
  this.name = name;
  this.time = time;
  this.age= age;
}

var newUser = new Tickets (userMovie, userTime, userAge);

console.log(newUser)

});
});