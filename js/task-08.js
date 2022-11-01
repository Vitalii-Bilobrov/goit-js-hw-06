const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }
  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset();

  //   const formElements = event.currentTarget.elements;
  //   const email1 = formElements.email.value;
  //   const password1 = formElements.password.value;
  //   const formData = {
  //     email1,
  //     password1,
  //   };
}
