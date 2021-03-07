// Copyright 2020 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * Adds a random greeting to the page.
 */
function addRandomGreeting() {
  var quote ='I am trilingual';

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = quote;
}

async function showFact1(){
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();

    const helloContainer = document.getElementById('hello-container1');
    helloContainer.innerHTML='';
    helloContainer.appendChild(createListElement(textFromResponse.fact1));
    //helloContainer.innerText = textFromResponse;
}

async function showFact2(){
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();

    const helloContainer = document.getElementById('hello-container2');
    helloContainer.innerHTML='';
    helloContainer.appendChild(createListElement(textFromResponse.fact2));
}

async function showFact3(){
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();

    const helloContainer = document.getElementById('hello-container3');
    helloContainer.innerHTML='';
    helloContainer.appendChild(createListElement(textFromResponse.fact3));
}

function createListElement(text) {
  const liElement = document.createElement('p');
  liElement.innerText = text;
  return liElement;
}
