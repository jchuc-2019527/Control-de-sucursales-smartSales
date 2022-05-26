import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCompanyComponent } from './product-company/product-company.component';
import { BranchComponent } from './components/branch/branch.component';
import { CompanyComponent } from './components/company/company.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'ProductCompany', component: ProductCompanyComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'branch', component: BranchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
