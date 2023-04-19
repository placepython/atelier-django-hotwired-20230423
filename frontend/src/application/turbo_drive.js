import "../styles/turbo_drive.scss";

import "@hotwired/turbo"; // nouveau

document.addEventListener('turbo:load', function () { // nouveau
    console.log('turbo:load');
});

document.addEventListener("turbo:before-cache", function () {
    console.log('turbo:before-cache');
    const form = document.querySelector('form');
    if (form) {
        form.reset();
    }
});