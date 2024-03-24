const form = document.querySelector('.feedback-form');
form.addEventListener('input', onInputForm);
form.addEventListener("submit", onFormSubmit);

const formNewState = JSON.parse(localStorage.getItem('feedback-form-state'));

if (typeof formNewState === "object") {
  form.elements.email.value = formNewState.email ?? '';
  form.elements.message.value = formNewState.message ?? '';
}


function onInputForm(event) {
  const userEmail = event.currentTarget.elements.email.value.trim();
  const userMessage = event.currentTarget.elements.message.value.trim();

  const formState = {
    email: userEmail,
    message: userMessage,
  };

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function onFormSubmit(event) {
  event.preventDefault();

  if (event.target.elements.email.value.trim().length === 0 || event.target.elements.message.value.trim().length === 0) {
    alert ("Please, fill in Email and Message fields");
  };

  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));

    localStorage.removeItem('feedback-form-state');
    form.reset();
}
