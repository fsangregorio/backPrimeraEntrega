
class ProductManager
{  
    products = [];
    idAuto = 0;

    getProducts()
    {
      return this.products;
    }

    addProduct(product)
    {
       this.products.push({
         ...product,
         id: this.idAuto
       });

       this.idAuto = this.idAuto + 1;
    }
  
    getProductsById(id){  
        const search = this.products.find((product) => product.id === id);
        return this.product;
};

}

const productManager = new ProductManager();

productManager.addProduct({ title: 'Pelota',
                            description: 'Pelota de fútbol',
                            price: 5000,
                            thumbnail: 'img1.jpg',
                            stock: 200,
                            id: this.idAuto });

productManager.addProduct({ title: 'Raqueta',
                              description: 'Raqueta de Tenis',
                              price: 10000,
                              thumbnail: 'img2.jpg',
                              stock: 100,
                              id: this.idAuto });

productManager.addProduct({ title: 'Botines',
                                description: 'Botines de futbol',
                                price: 15000,
                                thumbnail: 'img3.jpg',
                                stock: 10,
                                id: this.idAuto });


console.log(productManager.getProducts());
console.log(productManager.getProductsById(1));
