// client-side js
// run by the browser each time your view template is loaded

// by default, you've got jQuery,
// add other scripts at the bottom of index.html
$(document).ready(function() {
  var form = document.forms.namedItem("myForm");
  
form.addEventListener('submit', function(ev) {
  var myFile = document.getElementById('myFile').files[0];
  
  var oData = new FormData(form);
  
  console.log(form);
  console.log(myFile);
  console.log(oData);
  
  var oReq = new XMLHttpRequest();
  oReq.open("POST", "/myAction", true);
  
  oReq.onload = function(oEvent) {
    if (oReq.status === 200) {
      console.log("upload success");
    } else {
      console.log("upload failure: " + oReq.status);
    }
    
    oReq.send(oData);
    ev.preventDefault();
  };
  
});
});
