function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("textarea").value,
    };
    const serviceID = "service_5jzhw2n";
const templateID = "template_47lqctb";

emailjs.send(serviceID,templateID,params)
.then((res) =>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("textarea").value = "";
        console.log(res);
        alert("your message sent successfully");
    })
    .catch((err) => console.log(err));   
}

function loader(){
    document.querySelector('.loader').classList.add('fade-out');
}

function fadeOut(){
    setInterval(loader, 3000);
}

window.onload = fadeOut();