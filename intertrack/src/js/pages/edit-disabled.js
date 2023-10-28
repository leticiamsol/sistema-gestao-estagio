const editButtons = document.querySelectorAll("[id^='edit-promotion-details']");

editButtons.forEach(function(button) {
    button.addEventListener("click", function() {
        const inputs = button.closest(".products-inputs").querySelectorAll("input, select");

        inputs.forEach(function(input) {
            input.disabled = !input.disabled;
        });
    });
});

// Make Select Person IMG appear below

const selectImgBtn = document.querySelector('.select-image');

let showSelectImgBtn = false;

editButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        showSelectImgBtn = !showSelectImgBtn;
        selectImgBtn.style.display = showSelectImgBtn ? 'block' : 'none';
    }) 
}) 