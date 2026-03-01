function signup() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;
  let cpass = document.getElementById("cpassword").value;
  let phone = document.getElementById("phone").value;

  if (name == "" || email == "" || pass == "" || cpass == "" || phone == "") {
    alert("All fields are required");
    return;
  }

  if (pass != cpass) {
    alert("Passwords do not match");
    return;
  }

  localStorage.setItem("name", name);
  localStorage.setItem("email", email);
  localStorage.setItem("password", pass);

  alert("Signup Successful");
  window.location.href = "login.html";
}
function login() {
  let email = document.getElementById("email").value;
  let pass = document.getElementById("password").value;

  let savedEmail = localStorage.getItem("email");
  let savedPass = localStorage.getItem("password");

  if (email == savedEmail && pass == savedPass) {
    alert("Login Successful");
    window.location.href = "index.html";
  } else {
    alert("Invalid Email or Password");
  }
}
function bookAppointment() {
  let doctor = document.getElementById("doctor").value;
  let date = document.getElementById("date").value;
  let reason = document.getElementById("reason").value;

  if (doctor == "" || date == "" || reason == "") {
    alert("Fill all fields");
    return;
  }

  localStorage.setItem("doctor", doctor);
  localStorage.setItem("date", date);
  localStorage.setItem("reason", reason);

  alert("Appointment Booked");
}
function sendMessage() {
  alert("Message Sent Successfully");
}
