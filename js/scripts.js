$(document).ready(function (){
  $("form#tickets").submit(function(event){
  
    event.preventDefault();   
    
    var userMovie =$("select#movie").val();
    var userTime = $("select#timeTickets").val();
    var userAge = $("select#age").val();
    var totalValue = parseInt(userTime) + parseInt(userAge)


//back end logic

function Tickets (name, time, age) {
  this.name = name;
  this.time = time;
  this.age= age;
}

var newUser = new Tickets (userMovie, userTime, userAge);
var price = "";


var getThePrice = function(total){
  if (total < 6){
   price = "$5";
 }else if (total < 8){
    price = "$10";
    }else{
    price = "$20";
    }
  return price
}


$("#priceOfTickets").text(getThePrice(totalValue));
$("#hiddenText").show();
});
});