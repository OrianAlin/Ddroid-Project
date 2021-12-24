function myFunction() {
  console.log("merge");
  var theForm = document.getElementById("myForm");
  if (theForm.checkValidity()) {
    theForm.submit();
  }
}
