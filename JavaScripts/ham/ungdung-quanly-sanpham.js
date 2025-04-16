const products = [
    "Apple",
    "SamSung",

];
let productIndex = 0;
function displayProducts() {
    const tableBody = document.getElementById("productList");
    tableBody.innerHTML = ``;
    let row = ``
    for (let i = 0; i < products.length; i++) {
        row += `<tr>`;
        row += `<td>${products[i]}</td>`;
        row += `<td><button type="button" onclick="handleEdit(${i})">Edit</button></td>`;
        row += `<td><button type="button" onclick="handleDelete(${i})">Delete</button></td>`;
        row += `</tr>`;
    }
    tableBody.innerHTML = row;
}


function createProduct(e){
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    if (products[index] !== -1)
    products.push(productName);
    displayProducts();
}

function handleDelete(index){
    products.splice(index, 1);
    displayProducts();
    }
    function handleEdit(index){
    productIndex = index;
    const productName = product[index];


    }
    displayProducts();