import { CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IProduct } from '../../../user/model/IProduct.model';

@Component({
    selector: 'app-card',
    standalone: true,
    imports: [CurrencyPipe],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss',
})
export class CardComponent {
    @Input({required: true}) product!: IProduct;
}
