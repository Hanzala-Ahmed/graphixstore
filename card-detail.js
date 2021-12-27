let {category, image, description}=JSON.parse(localStorage.getItem("product"))
console.log("image", image)
console.log("category", category)
console.log("description", description)
document.getElementById("cartDetailImage").children[0].src=image;
document.getElementById("productHeading").innerHTML = description;
document.getElementById("ProductCategory").childNodes[1].innerHTML = category