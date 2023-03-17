function validateForm() {
    let x = document.forms["myForm"]["fname"]["Email"]["Message"].value;
    if (x == "") {
      alert("Name must be filled out");
      return false;
    }
  }
  