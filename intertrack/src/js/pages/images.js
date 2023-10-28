const selectImage = document.querySelectorAll('.select-image');
const inputFile = document.querySelectorAll('.file');
const imgArea = document.querySelectorAll('.img-area');

selectImage.forEach((button, index) => {
  button.addEventListener('click', function () {
    inputFile[index].click();
  })
});

inputFile.forEach((input, index) => {
  input.addEventListener('change', function () {
    const image = this.files[0];
    if (image.size < 5000000) {
      const reader = new FileReader();
      reader.onload = () => {
        const imgUrl = reader.result;
        const imgAreaItem = imgArea[index];
        const img = imgAreaItem.querySelector('img') || document.createElement('img');
        img.src = imgUrl;
        imgAreaItem.innerHTML = '';
        imgAreaItem.appendChild(img);
        imgAreaItem.classList.add('active');
        imgAreaItem.dataset.img = image.name;
      }
      reader.readAsDataURL(image);
    } else {
      alert("Image size more than 5MB");
    }
  })
})
