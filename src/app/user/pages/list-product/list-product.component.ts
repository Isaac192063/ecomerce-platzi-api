import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../service/product.service';

@Component({
  selector: 'app-list-product',
  standalone: true,
  imports: [],
  templateUrl: './list-product.component.html',
  styleUrl: './list-product.component.scss'
})
export class ListProductComponent implements OnInit{

    private productService = inject(ProductService);


    ngOnInit(): void {
        this.productService.getAllProduct().subscribe({
            next: data =>{
                console.log(data);
            },
            error(err) {
                console.log(err);
            },
        })
    }
}
