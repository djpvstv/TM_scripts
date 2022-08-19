// ==UserScript==
// @name         DarkSignOn
// @namespace    http://esso.mathworks.com/
// @version      0.1
// @description  try to darken the world!
// @author       DJ PVSTV
// @match        https://esso.mathworks.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mathworks.com
// @grant        none
// @run-at       document-start
// ==/UserScript==

function GM_addStyle(css) {
    const style = document.getElementById("GM_addStyleByGarrett") || (function() {
        const style = document.createElement('style');
        style.type = 'text/css';
        style.id = "GM_addStyleByGarrett";
        document.head.appendChild(style);
        return style;
    })();
    const sheet = style.sheet;
    sheet.insertRule(css, (sheet.rules || sheet.cssRules || []).length);
}

const imgElement = document.querySelector('[alt]');
const newImgDiv = document.createElement('div');
imgElement.parentNode.appendChild(newImgDiv);
newImgDiv.appendChild(imgElement);
newImgDiv.classList.add('logo-div-container');


GM_addStyle (`
    .ping-header {
        background-color: #090909 !important;
        color: #A1A1A1 !important;
    }
`);

GM_addStyle (`
    .ping-body-container {
        background-color: #090909 !important;
        color: #A1A1A1 !important;
    }
`);

GM_addStyle (`
    label, .ping-input-label, .ping-input-container {
        color: #A1A1A1 !important;
    }
`);

GM_addStyle(`
    input[type="button"].primary, input[type="button"].normal, input[type="submit"].primary, input[type="submit"].normal, .ping-button.primary, .ping-button.normal, .button.primary, .button.normal, button.primary, button.normal {
        background-color: #03364f !important;
        color: #A1A1A1 !important;
    }
`)

GM_addStyle(`
    input[type="text"], input[type="password"], textarea, input[type="tel"], input[type="email"], input[type="date"] {
        background-color: #242424 !important;
        border: 1px solid #808080 !important;
    }
`)

GM_addStyle(`
    label.input-checkbox .icon::before, label .ping-checkbox-container .icon::before, label label .icon::before, label li .icon::before, .ping-input-label.input-checkbox .icon::before, .ping-input-label .ping-checkbox-container .icon::before, .ping-input-label label .icon::before, .ping-input-label li .icon::before, .ping-input-container.input-checkbox .icon::before, .ping-input-container .ping-checkbox-container .icon::before, .ping-input-container label .icon::before, .ping-input-container li .icon::before {
        border: 3px solid #808080 !important;
    }
`)

GM_addStyle(`
    .logo-div-container {
        background-color: rgb(204, 204, 204);
        display: inline-block;
        max-height: 48px;
    }
`)

GM_addStyle(`
    img {
        mix-blend-mode: difference !important;
        filter: brightness(.8) opacity(0.9) !important;
    }
`)
