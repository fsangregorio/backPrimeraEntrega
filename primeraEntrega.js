
class ProductManager
{
    getProducts = []
    product = [];
    idAuto = 0;

    getProducts(id)
    {
      return this.products;
    }

    addProduct(product)
    {

       this.products.push({
         ...product,
         
         title: new product(),
         description: [],
         price: [],
         thumbnail: [],
         stock: [],
         id: this.idAuto ,
       });

       this.idAuto = this.idAuto + 1;
    }
}

const productManager = new ProductManager();

ProductManager.addProduct({ title: 'Pelota',
                            description: 'Pelota de fútbol',
                            price: 5000,
                            thumbnail: 'img1.jpg',
                            stock: 200,
                            id: this.idAuto
});

ProductManager.addProduct({ title: 'raqueta',
                              description: 'Raqueta de Tenis',
                              price: 10000,
                              thumbnail: 'img2.jpg',
                              stock: 100,
                              id: this.idAuto
});

ProductManager.addProduct({ title: 'botines',
                                description: 'Botines de futbol',
                                price: 15000,
                                thumbnail: 'img3.jpg',
                                stock: 10,
                                id: this.idAuto
});

console.log(ProductManager.getProducts(1));
console.log(ProductManager.getProducts(2));
console.log(ProductManager.getProducts(3));