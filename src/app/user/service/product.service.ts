import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../model/IProduct.model';
import BASEURL from '../../utils/BASE_URL';

@Injectable({
    providedIn: 'root',
})
export class ProductService {
    private http = inject(HttpClient);
    private productURL: string = BASEURL + '/products?offset=0&limit=10';

    public getAllProduct(): Observable<IProduct[]> {
        return this.http.get<IProduct[]>(this.productURL);
    }
}
