function Send(){
  console.log('js called');
var nameOfBuyer = document.getElementById("formName1").value;
var emailId = document.getElementById("formEmail").value;
var contact = document.getElementById("formContact").value;
var passage = document.getElementById("formMessage").value;

var body = "Name: "+nameOfBuyer + "<br/> Email: "+emailId +"<br/> Contact Number: "+ contact + "<br/> Message: "+passage;

 console.log(nameOfBuyer);

Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mehtarijul9@gmail.com",
    Password : "678589164E1100E1B8A8392C36C4BE0A4F43",
    To : 'Pooja_Oursecret@outlook.com',
    From : "mehtarijul9@gmail.com",
    Subject : "from: " + nameOfBuyer,
    Body : body
}).then(
  message => alert(message)
);
}





//678589164E1100E1B8A8392C36C4BE0A4F43