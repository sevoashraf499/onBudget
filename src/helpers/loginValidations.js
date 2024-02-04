const validateEmailOrPhone = (emailValue) => {
  // Add your validation logic
  return emailValue && emailValue.trim() !== "";
};
const validatePassword = (passValue) => {
  // Add your validation logic
  return passValue && passValue.trim() !== "";
};

let b;
export const isFormValid = (emailValue, passValue) => {
  b = validateEmailOrPhone(emailValue) && validatePassword(passValue);
  return b;
};

export const handleSubmit = (e) => {
  e.preventDefault();

  // Add your login logic
  if (b) {
    console.log("Login successful");
  } else {
    console.log("Form validation failed");
  }
};
