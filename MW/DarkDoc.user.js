// ==UserScript==
// @name         DarkDoc
// @namespace    https://www.mathworks.com/
// @version      0.2
// @description  try to take over the world!
// @author       You
// @match        https://www.mathworks.com/help/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=mathworks.com
// @grant        none
// @run-at       document-end
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

GM_addStyle (`
    .form-control {
        background-color: #000 !important;
    }
`);

GM_addStyle (`
    .header {
        background-color: #000 !important;
    }
`);

GM_addStyle (`
    html body {
        color: var(--mw-color-primary) !important;
    }
`);

// Navbar Text
GM_addStyle (`
    .navbar-default .topnav.navbar-nav > li > a {
        color: #DEDEDE !important;
    }
`);

// Outline for "Support"
GM_addStyle (`
    .topnav_support a,
    .topnav_support a:hover {
        background: #190D05 !important;
        background-color: rgb(2, 26, 43) !important;
    }
`);

// Top Navbar
GM_addStyle (`
    .section_header {
        background-color: var(--mw-brandcolor-brand1) !important;
    }
`);

GM_addStyle (`
    .sidebar-offcanvas {
        background-color: var(--mw-backgroundColor-active) !important;
    }
`);

GM_addStyle (`
    .add_font_color_darkgray,
    .add_font_color_darkgray * {
        color: #808080 !important;
    }
`);

GM_addStyle (`
   .horizontal_nav_container {
       background: #262323 !important;
   }
`);

GM_addStyle (`
   .horizontal_nav_container
   .navbar-nav > li.active > a,
   .horizontal_nav_container
   .navbar-nav > li.active > a:hover {
       background: rgb(19, 75, 113) !important;
   }
`);

GM_addStyle (`
    .horizontal_nav_container {
        background: var(--mw-backgroundColor-primary) !important;
    }
`);

GM_addStyle (`
    .horizontal_nav_container .navbar-nav > li#crux_nav_documentation.active {
        background: var(--mw-backgroundColor-active) !important;
        color: var(--mw-color-primary) !important;
    }
`);

GM_addStyle (`
    .content_container,
    .content_container_no_conflict {
        background: var(--mw-backgroundColor-active) !important;
    }
`);

GM_addStyle (`
    #doc_center_content {
        background: var(--mw-backgroundColor-active) !important;
    }
`);

GM_addStyle (`
    .panel-group
    .panel-heading {
        background: var(--mw-backgroundColor-primary) !important;
    }
`);

GM_addStyle(`
    .panel {
        background-color: var(--mw-backgroundColor-tertiary) !important;
    }
`);

GM_addStyle (`
    h2, .h2 {
        color: var(--mw-borderColor-selected) !important;
    }
`);

GM_addStyle(`
    #doc_center_content h1 {
        color: var(--mw-color-sectionHeader) !important;
    }
`);

GM_addStyle(`
    div.programlisting div.codeinput {
        background: var(--mw-backgroundColor-primary) !important;
    }
`);

GM_addStyle(`
    .syntax_signature_module {
        background: var(--mw-backgroundColor-primary) !important;
    }
`);

GM_addStyle(`
    .panel-default > .panel-heading {
        color: var(--mw-borderColor-selected) !important;
    }
`);

GM_addStyle(`
    #doc_center_content .expand_collapse .collapsible_content {
        background-color: var(--mw-backgroundColor-primary) !important;
    }
`);

// This is supposed to be the background color for dropdown on search
GM_addStyle(`
    #suggestions {
        background: var(--mw-backgroundColor-active) !important;
        box-shadow: 1px 1px 2px 2px rgb(255 255 255 / 25%) !important;
        border: 1px solid var(--mw-backgroundColor-dragged) !important;
    }
`);

GM_addStyle(`
    .typeahead_container .suggestion_highlight {
         color: var(--mw-color-primary) !important;
     }
`);

GM_addStyle(`
    .typeahead_container a:not(.see_all_results) {
         color: var(--mw-color-code) !important;
     }
`);

GM_addStyle(`
    .typeahead_container a:not(.see_all_results):hover {
        background-color: var(--mw-backgroundColor-primary) !important;
    }
`);

// Tables
// Table Border
GM_addStyle(`
    table, .table {
        border-color: rgb(51, 51, 51) !important;
    }
`);

// Table Row
GM_addStyle(`
    table td, .table > tbody > tr > td {
        background-color: var(--mw-backgroundColor-primary) !important;
    }
`);

// Table Header Background & Text
GM_addStyle(`
    table th, .table > thead > tr > th {
        background-color: rgb(21, 21, 21) !important;
        color: var(--mw-color-white) !important;
    }
`);

// Borders
GM_addStyle (`
    .sidebar-offcanvas
    ul.nav_disambiguation {
        border-bottom-color: var(--mw-backgroundColor-secondary) !important;
    }
`);

GM_addStyle (`
    .sidebar-offcanvas
    ul.nav_breadcrumb {
        border-bottom-color: var(--mw-backgroundColor-secondary) !important;
    }
`);


GM_addStyle (`
    .offcanvas_content_container {
        border-left-color: var(--mw-backgroundColor-secondary) !important;
    }
`);

// Highlight
GM_addStyle(`
    .highlight_01 {
        background-color: #515110 !important;
    }
`);

// need to remove from doc_center.css, but for highligting
GM_addStyle(`
    .anchor_hinting {
        background-color: #4C5F66 !important;
    }
`);

// Footer
GM_addStyle(`
    footer {
        background-color: var(--mw-backgroundColor-secondary) !important;
        color: var(--mw-color-selected-noFocus) !important;
    }
`);

function waitForCss(selector) {
    return new Promise(resolve => {
        const testFcn = function (selector) {
            return [...document.styleSheets].filter( function(arr) {
                if (arr.href && arr.href.includes(selector)) {return true;}
            })[0];
        }

        if (testFcn(selector)) {
            return resolve(testFcn(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (testFcn(selector)) {
                resolve (testFcn(selector));
                observer.disconnect();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
}

function complainThatSomethingLoaded() {
    console.log(`I guess the index-css.css loaded`);
}

// Get rid of pesky !important CSS in linked style sheets
async function removeAllThoseImportants() {
//window.addEventListener('load', function() {

    document.body.classList.add('mw-theme-dark');
    const doc_centerCss = [...document.styleSheets].filter(function(arr) {
        if (arr.href && arr.href.includes("doc_center.")) {return true;}
    })[0];
    const com_min = document.styleSheets[1];
    const footer_min = [...document.styleSheets].filter(function(arr) {
        if (arr.href && arr.href.includes("footer")) {return true;}
    })[0];
    const theme_css = await waitForCss("docsurvey/release/index-css.css");

    let idx = [];
    let cnt = 0;
    let rule;
    [...doc_centerCss.rules].forEach(function(rule){
        if (rule) {
            if (rule.selectorText) {
                // Top Navbar for "Support"
                if (rule.selectorText.includes('.topnav')) {
                    idx.push(cnt);
                }
                // Expandlable tile for More About
                if (rule.selectorText.includes('#doc_center_content') && rule.selectorText.includes('.expand_collapse ') && rule.selectorText.includes('.collapsible_content')) {
                    idx.push(cnt);
                }
            }
        }
        cnt++;
    });
    if (idx.length > 0) {
        idx.forEach(function(i){
            let newRule = doc_centerCss.rules.item(i).cssText;
            newRule = newRule.replaceAll(" !important", "");
            doc_centerCss.deleteRule(i);
            doc_centerCss.insertRule(newRule, i);
        });
    }

    idx = [];
    cnt = 0;
    [...com_min.rules].forEach(function(rule){
        if (rule) {
            if (rule.selectorText) {
                // Top Navbar color
                if (rule.selectorText === '.section_header') {
                    idx.push(cnt);
                }
            }
        }
        cnt++;
    });
    if (idx.length > 0) {
        idx.forEach(function(i){
            let newRule = com_min.rules.item(i).cssText;
            newRule = newRule.replaceAll(" !important", "");
            com_min.deleteRule(i);
            com_min.insertRule(newRule, i);
        });
    }
    idx = [];
    cnt = 0;
    [...footer_min.rules].forEach(function(rule){
        if(rule) {
            if (rule.selectorText) {
                // Dropdown text color
                if (rule.selectorText === '.typeahead_container a:not(.see_all_results)') {
                    idx.push(cnt);
                }
            }
        }
        cnt++;
    });
    if (idx.length > 0) {
        idx.forEach(function(i){
            let newRule = footer_min.rules.item(i).cssText;
            newRule = newRule.replaceAll(" !important", "");
            footer_min.deleteRule(i);
            footer_min.insertRule(newRule, i);
        });
    }

    // Add missing dark mode definitions
    const toAdd = `--mw-brandcolor-brand1:var(--mw-color-brand4); --mw-brandcolor-brand2:var(--mw-color-brand3); --mw-brandcolor-brand3:var(--mw-color-brand2); --mw-brandcolor-brand4:var(--mw-color-brand1);`;
    theme_css.insertRule(`.mw-theme-dark { ${toAdd} }`);
}

// Case we do not load the main dark mode css
if (document.querySelectorAll(`link[href*=docsurvey\\/release\\/index-css]`).length < 1) {
    const li = document.createElement('link');
    li.type = 'text/css';
    const href = "/help/docsurvey/release/index-css.css";
    li.setAttribute('href', href);
    li.setAttribute('rel', 'stylesheet');
    const h = document.querySelector('head');
    h.appendChild(li, h);
}

removeAllThoseImportants();
