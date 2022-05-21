function sendEmail() {
  Email.send({
    Host: "smtp.api.com",
    Username: "username",
    Password: "password",
    To: "email",
    From: document.getElementById("email").value,
    Subject: "New Contact Form Enquiry",
    Body:
      "Name: " +
      document.getElementById("name").value +
      "<br> Email: " +
      document.getElementById("email").value +
      "<br> Message: " +
      document.getElementById("message").value,
  }).then((message) => alert("Message sent successfully"));
}
