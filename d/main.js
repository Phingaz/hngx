import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
   
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))


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
      <div>
        <h1>Hello Vite!</h1>
        <div class="card">
          <button id="counter" type="button"></button>
        </div>
        <p class="read-the-docs">
          Click on the Vite logo to learn more
        </p>
      </div>
    `;
    control.innerHTML = template;
  
    // Append the control element to the fragment
    fragment.appendChild(control);
  
    // Insert the fragment into the body of the document
    body.appendChild(fragment);
  });
}

addBtns()