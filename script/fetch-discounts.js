function fetchProducts(url) {
    console.log("Fetching products...");
    const productsContainer = document.querySelector('.discount-products');
    fetch('http://localhost:8080/api/products/discounts')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            data.forEach(product => {
                const template = document.getElementById('product-item-temp');
                let newItem = template.cloneNode(true);

                let img = newItem.querySelector(".product-img");
                img.src = product.img_url;

                let descriptionTextNode = newItem.querySelector(".product-desc-text");
                descriptionTextNode.innerHTML = product.name;

                let descriptionPrice = newItem.querySelector(".product-desc-price");
                descriptionPrice.innerHTML = product.price;

                productsContainer.appendChild(newItem);
            });
        })
}

fetchProducts();
