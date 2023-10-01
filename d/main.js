import "./style.css";

setupCounter(document.querySelector("#counter"));

const addBtns = () => {
  document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");

    // Create a document fragment to hold the template content
    const fragment = document.createDocumentFragment();

    const control = document.createElement("div");
    control.id = "control";
    control.className = "control";

    // Add your template content to the control element
    const template = `
    <div id="control">
    <div class="time">
      <p>00:00:00</p>
      <span class="dot"></span>
    </div>

    <div class="btn-wrapper">
      <div class="btn">
        <span><img src="pause.svg" /></span>
        <p>Pause</p>
      </div>
      
  </div>
    `;
    control.innerHTML = template;

    // Append the control element to the fragment
    fragment.appendChild(control);

    // Insert the fragment into the body of the document
    body.appendChild(fragment);
  });
};

addBtns();
