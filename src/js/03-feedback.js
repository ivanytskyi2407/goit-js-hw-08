import throttle from 'lodash.throttle';
const refs = {
  form: document.querySelector('.feedback-form'),
  inputEmail: document.querySelector('input'),
  textarea: document.querySelector('textarea'),
};

const STORAGE_KEY = 'feedback-form-state';
const formData = {};

refs.form.addEventListener('submit', onFormSubmit);
refs.inputEmail.addEventListener('input', throttle(onInputEmail, 500));
refs.textarea.addEventListener('input', throttle(onInputTextarea, 500));

function onFormSubmit(e) {
  e.preventDefault();
  e.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
  console.log(formData);
}
function onInputEmail(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function onInputTextarea(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}
function populateTextarea() {
  const saveMessage = localStorage.getItem(STORAGE_KEY);
  const parseMessage = JSON.parse(saveMessage);
  if (parseMessage.message) {
    refs.textarea.value = parseMessage.message;
  }
  if (parseMessage.email) {
    refs.inputEmail.value = parseMessage.email;
  }
}
populateTextarea();
