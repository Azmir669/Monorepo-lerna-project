// my-ui-library.js

// Lifecycle events
function onComponentMount() {
  console.log('Component mounted');
}

// State
let state = {
  count: 0
};

// Templating
function renderUI() {
  const countDisplay = document.getElementById('countDisplay');
  countDisplay.innerText = state.count.toString();
}

// Update state and re-render UI
function updateState(newState) {
  state = { ...state, ...newState };
  console.log('State changed:', state);
  renderUI();
}

// Handle button click event
function handleButtonClick() {
  updateState({ count: state.count + 1 });
}

// Add event listener to button
document.getElementById('incrementButton').addEventListener('click', handleButtonClick);

// Lifecycle events
window.onload = function () {
  onComponentMount();
  renderUI();
};
