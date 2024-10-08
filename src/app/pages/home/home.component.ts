import { Component, OnInit } from '@angular/core';
import { CategoryComponent } from '../../components/category/category.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { NewArrivalComponent } from '../../components/newarrival/new-arrival.component';
import { TrendingComponent } from '../../components/trending/trending.component';
import { TopRatedComponent } from '../../components/toprated/toprated.component';
import { DealOfTheDayComponent } from '../../components/dealoftheday/dealoftheday.component';
import { NewProductComponent } from '../../components/newproduct/newproduct.component';
import { TestimonialComponent } from '../../components/testimonial/testimonial.component';
import { BlogComponent } from '../../components/blog/blog.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { HeaderComponent } from '../../shared/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,CategoryComponent,SidebarComponent,NewArrivalComponent,TrendingComponent,TopRatedComponent,DealOfTheDayComponent,NewProductComponent,TestimonialComponent,BlogComponent,BannerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
 

}
