import { Component } from '@angular/core';
import { Product } from '../../interfaces/Produt.interface';
import { ProductsService } from '../../services/products.service';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CarouselModule, TagModule, CardModule, ButtonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})


export class ProductsComponent {

  products!: Product[];


  responsiveOptions: any[] | undefined;


  constructor(private productService: ProductsService) { }


  ngOnInit(): void {
    this.productService.getProductsSmall().then((products) => {
      this.products = products;
    });

    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1
      }
    ];


  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'danger';
    }
  }

}
