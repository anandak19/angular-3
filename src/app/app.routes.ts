import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path : "",
        component : HomeComponent
    },
    {
        path : "about-component",
        component : AboutComponent
    },
    {
        path : "product-component",
        component : ProductsComponent
    },
    {
        path : "contact-component",
        component : ContactComponent
    },
];
