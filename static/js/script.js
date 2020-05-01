$(".register_form").hide(function () {
  $(".register").click(function () {
    $(".login_form").hide();
    $(".register_form").show();
  });
});
$(".login").click(function () {
  $(".register_form").hide();
  $(".login_form").show();
});

function validations_Login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("pasw").value;

  if (username == "" || password == "") {
    alert("Ploteso te gjitha te dhenat");
    return false;
  }
}

function validations_Register() {
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lname").value;
  var password = document.getElementById("pw").value;
  var email = document.getElementById("email").value;

  if (name == "" || lastname == "" || password == "" || email == "") {
    alert("Ploteso te gjitha te dhenat");
    return false;
  }
}
