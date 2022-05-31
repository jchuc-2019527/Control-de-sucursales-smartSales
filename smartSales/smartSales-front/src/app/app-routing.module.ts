import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { BranchComponent } from './components/branch/branch.component';
import { CompanyComponent } from './components/company/company.component';
import { ProductCompanyComponent } from './components/product-company/product-company.component';
import { ProductBranchComponent } from './components/product-branch/product-branch.component';
import { BranchByAdminComponent } from './components/branch-by-admin/branch-by-admin.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', component:LoginComponent},
  {path:'login', component:LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'company', component: CompanyComponent},
  {path: 'branch', component: BranchComponent},
  {path: 'productCompany', component: ProductCompanyComponent},
  {path: 'productBranch/:id', component:ProductBranchComponent},
  {path: 'branchByAdmin/:id', component:BranchByAdminComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
