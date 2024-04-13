var btn = document.getElementById('btn');
btn.addEventListener('click',function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var subject = document.getElementById('subject').value;
    var message = document.getElementById('message').value;
    var body = 'name: ' +name + '<br/> email: ' + email + '<br/> subject' +
    subject + '<br/> message' +message; 


    Email.send({
        SecureToken : "1ab0a686-025a-4a92-9ab9-746d875bcd20",
        To : 'brandonlast@hotmail.com',
        From : email,
        Subject : subject,
        Body : body
    }).then(
      message => alert(message)
    );
})


