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
    console.log(formData.email, formData.message);
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
  if (event.target.nodeName === 'INPUT') {
    formData.email = event.target.value;
  } else {
    formData.message = event.target.value;
  }

  localStorage.setItem(FEEDBACK_KEY, JSON.stringify(formData));
}

function checkInput() {
  if (JSON.parse(localStorage.getItem(FEEDBACK_KEY))) {
    formData.email = input.value = JSON.parse(
      localStorage.getItem(FEEDBACK_KEY)
    ).email;
    formData.message = textarea.value = JSON.parse(
      localStorage.getItem(FEEDBACK_KEY)
    ).message;
  }
  return;
}
