class ProductRepository {
  constructor() {
    this.products = [];
    this.nextId = 1;
  }

  addProduct(product) {
    this.products.push(product);
  }

  getProductById(id) {
    return this.products.find((product) => product.id == id);
  }

  getProducts() {
    return this.products;
  }

  updateProduct(updatedProduct) {
    try {
      const existingProduct = this.products.find(
        (product) => product.id === updatedProduct.id
      );
      if (!existingProduct) {
        return null;
      }

      const index = this.products.indexOf(existingProduct);
      console.log(
        `Categorias, existente: ${existingProduct.category}, para atualizar: ${updatedProduct.category}`
      );
      const productToUpdate = {
        id: existingProduct.id,
        name: updatedProduct.name ?? existingProduct.name,
        description: updatedProduct.description ?? existingProduct.description,
        price: updatedProduct.price ?? existingProduct.price,
        category: updatedProduct.category ?? existingProduct.category,
      };

      this.products.splice(existingProduct, 1, productToUpdate);

      return this.products[index];
    } catch (error) {
      console.error(`Error ao atualizar o produto: ${error}`);
      throw error;
    }
  }

  deleteProduct(id) {
    const productToDelete = this.products.find((product) => product.id === id);

    if (!productToDelete) {
      return false;
    }

    const index = this.products.indexOf(productToDelete);

    this.products.splice(index, 1);

    return true;
  }

  getNextProductId() {
    return this.nextId++;
  }
}

module.exports = new ProductRepository();
