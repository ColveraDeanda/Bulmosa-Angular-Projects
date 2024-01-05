import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CompanyComponent } from './company/company.component';
import { EmployeesComponent } from './employees/employees.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';

export const routes: Routes = [
  {path: 'home', title: 'home', component: HomeComponent},
  {path: 'contact', title: 'contact', component: ContactComponent},

  {path: 'about', title: 'about', component: AboutComponent},
  {path: 'about', children: [
    {path: 'company', title: 'About | Company', component: CompanyComponent},
    {path: 'employees', title: 'About | employees', component: EmployeesComponent},
    {path: 'employees/:id', title: 'Employee Detail', component: EmployeeDetailComponent},
  ]},

  {path: 'products', loadComponent: () => import('./products/products.component').then(m => m.ProductsComponent)},

  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];
