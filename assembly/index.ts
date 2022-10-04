import { Product, listedProducts } from "./model";

export function setProduct(product: Product): void {
  let storedProduct = listedProducts.get(product.id);
  if (storedProduct !== null) {
    throw new Error(`a product with ${product.id} already exists!`);
  }
  listedProducts.set(product.id, Product.fromPayload(product));
}

export function getProduct(id: string): Product | null {
  return listedProducts.get(id);
}

export function getProducts(): Product[] {
  return listedProducts.values();
}
