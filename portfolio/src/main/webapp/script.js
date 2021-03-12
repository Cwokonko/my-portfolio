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

var factclick = [0,0,0];

async function ShowFact(contentnum){
    const responseFromServer = await fetch('/hello');
    const textFromResponse = await responseFromServer.json();
    var facts = [textFromResponse.fact1, textFromResponse.fact2, textFromResponse.fact3];
    var container = "hello-container1";
    var contents = facts[0];
        
    if (contentnum == 1){
        contents = facts[0];
        container = "hello-container1";
        factclick[0]++;
    }
    else if (contentnum == 2){
        contents = facts[1];
        container = "hello-container2";
        factclick[1]++;
    }
    else{
        contents = facts[2];
        container = "hello-container3";
        factclick[2]++;
    }

    const helloContainer = document.getElementById(container);
    helloContainer.innerHTML='';
    helloContainer.appendChild(createListElement(contents));
    if (!((factclick[0] > 1 && contentnum == 1) || (factclick[1] > 1 && contentnum == 2) || (factclick[2] > 1 && contentnum == 3)))
        alert(contents);
}

function createListElement(text) {
  const liElement = document.createElement('p');
  liElement.innerText = text;
  return liElement;
}
