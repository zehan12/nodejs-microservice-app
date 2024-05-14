import { ICatalogRepository } from "../interface/catalogRepository.interface";

export class CatalogServices {
    private _respository: ICatalogRepository;

    constructor(respository: ICatalogRepository) {
        this._respository = respository;
    }

    createProduct(item: any) {}

    updateProduct(item: any) {}

    getProducts(limit: number, offset: number) {}

    getProduct(id: number) {}

    deleteProduct(id: number) {}
}
