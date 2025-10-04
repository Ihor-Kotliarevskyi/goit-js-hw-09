let formData = {
  email: '',
  message: '',
};
const FEEDBACK_KEY = 'feedback-form-state';

const form = document.querySelector('.feedback-form');
const input = form.querySelector('input');
const textarea = form.querySelector('textarea');

checkInput();

form.addEventListener('submit', handlerSubmit);
form.addEventListener('input', handlerInput);

function handlerSubmit(event) {
  event.preventDefault();

  if (formData.email && formData.message) {
    console.log(formData);
  } else {
    alert('Fill please all fields');
    return;
  }
  event.currentTarget.reset();
  localStorage.removeItem(FEEDBACK_KEY);
  formData.email = '';
  formData.message = '';
}

function handlerInput(event) {
  if (event.target.name === 'email') {
    formData.email = event.target.value;
  } else if (event.target.name === 'message') {
    formData.message = event.target.value;
  }

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function checkInput() {
  const storage = localStorage.getItem(FEEDBACK_KEY);
  if (JSON.parse(storage)) {
    formData.email = input.value = JSON.parse(storage).email;
    formData.message = textarea.value = JSON.parse(storage).message;
  }
  return;
}
