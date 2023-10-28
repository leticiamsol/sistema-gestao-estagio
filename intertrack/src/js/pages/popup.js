// remover objeto
const removeLinks = document.querySelectorAll("#remove");
const popupOverlay = document.querySelector(".popup-overlay");
const popupRemoveChat = document.querySelector(".popup-removechat");
const cancelRemoveBtn = document.querySelector("#cancel_remove");
const removeTrBtn = document.querySelector("#remove_tr");
let currentRowToDelete = null;

function showPopup() {
popupOverlay.style.display = "block";
popupRemoveChat.style.display = "block";
}
 
function hidePopup() {
popupOverlay.style.display = "none";
popupRemoveChat.style.display = "none";
}

removeLinks.forEach((link) => {
link.addEventListener("click", function () {
    showPopup();
    currentRowToDelete = link.closest("tr");
});
});

cancelRemoveBtn.addEventListener("click", function () {
hidePopup();
});

removeTrBtn.addEventListener("click", function () {
if (currentRowToDelete) {
    const id = currentRowToDelete.getAttribute("data-id");
    
    fetch(`/receipts_delete/${id}`, {
    method: "DELETE",
    })
    .then(response => response.json())
    .then(data => {
    if (data.success) {
        currentRowToDelete.remove();
        hidePopup();
    }
    })
    .catch(error => console.error(error));
}
});