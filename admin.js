function addProduct(name, category, image_url, price, gender, sold) {
    this.name = name;
    this.category = category;
    this.image_url = image_url;
    this.price = price;
    this.gender = gender;
    this.sold = sold;
}

var products = JSON.parse(localStorage.getItem('Products')) || [];

document.querySelector('#inputForm').addEventListener('submit', function (event) {
    event.preventDefault();

    var name = document.getElementById('name').value;
    var category = document.getElementById('category').value;
    var image = document.getElementById('image').value;
    var price = document.getElementById('price').value;
    var gender = document.getElementById('gender').value;
    var sold = document.getElementById('sold').checked;

    // Check for empty inputs
    if (!name || !category || !image || !price || !gender) {
        alert('Please fill in all the fields');
        return;
    }

    var product = new addProduct(name, category, image, price, gender, sold);
    products.push(product);
    alert('Item added successfully');
    localStorage.setItem('Products', JSON.stringify(products));
    document.getElementById('inputForm').reset();
});
