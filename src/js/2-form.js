const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInputForm);
form.addEventListener("submit", onFormSubmit);

const formNewState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (typeof formNewState === "object") {
  form.elements.email.value = formNewState.email ?? '';
  form.elements.message.value = formNewState.message ?? '';
}


function onInputForm(event) {
  let userEmail = event.currentTarget.elements.email.value.trim();
  let userMessage = event.currentTarget.elements.message.value.trim();

  const formState = {
    email: userEmail,
    message: userMessage,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (event.target.elements.email.value.length === 0 || event.target.elements.message.value.length === 0) {
    alert ("Заповніть поля Email та Message");
  };

    localStorage.removeItem('feedback-form-state');
    form.reset();
}
