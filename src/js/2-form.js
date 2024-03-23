const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInputForm);
form.addEventListener("submit", onFormSubmit);

const formNewState = JSON.parse(localStorage.getItem('feedback-form-state'));

form.elements.email.value = formNewState.email ?? '';

form.elements.message.value = formNewState.message ?? '';

function onInputForm(event) {
  let userEmail = event.currentTarget.elements.email.value;
  let userMessage = event.currentTarget.elements.message.value;

  const formState = {
    email: userEmail,
    message: userMessage,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function onFormSubmit(event) {
    event.preventDefault();
    localStorage.removeItem('feedback-form-state');
    form.reset();
}
