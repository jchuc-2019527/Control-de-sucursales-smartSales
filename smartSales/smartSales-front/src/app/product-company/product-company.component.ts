import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { productCompanyModel } from '../models/productCompany.model';
import { ProductCompanyRestService } from '../services/productCompanyRest/product-company-rest.service';

@Component({
  selector: 'app-product-company',
  templateUrl: './product-company.component.html',
  styleUrls: ['./product-company.component.css']
})
export class ProductCompanyComponent implements OnInit {
  productCompanys: any =['productsOrder2'] ;
  productCompany: productCompanyModel;
  productCompanyUpdate: any;
  company: any;
  constructor(
    private productCompanyRest: ProductCompanyRestService
  ) { 
    this.productCompany = new productCompanyModel('','','',0,'');
  }

  ngOnInit(): void {
    this.getProducts();
    this.getProducts2();
  }

  getProducts(){
    this.productCompanyRest.getProducts().subscribe({
      next:(res:any)=>{
        this.productCompanys = res.productsOrder;
        console.log(this.productCompanys);
      },
      error: (err) => console.log(err.error.message || err.error)
    })
  };
  getProducts2(){
    this.productCompanyRest.getProducts2().subscribe({
      next:(res:any)=>{
        this.productCompanys = res.productsOrder;
        console.log(res)
        console.log(this.productCompanys);
      },
      error: (err) => console.log(err.error.message || err.error)
    })
  };
  getProductCompany(id: string){
    this.productCompanyRest.getProductCompany(id).subscribe({
      next:(res:any)=>{this.productCompanyUpdate = res.product},
      error:(err)=>{alert(err.error.message)}
    })
  };


  addProductCompany(addProductCompanyForm:any){
    this.productCompanyRest.addProductCompany(this.productCompany).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message + '  ' + res.productCompany.name,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getProducts()
        addProductCompanyForm.reset()
      },
      error: (err) => alert(err.error.message || err.error)
    })
  };
  updateProduct( ){
    this.productCompanyRest.updateProduct(this.productCompanyUpdate._id, this.productCompanyUpdate).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message + '  ' + res.productUpdate.name,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getProducts()},
      error:(err)=> alert(err.error.message || err.error)
    })
  };

  deleteProduct(id: string){
    this.productCompanyRest.deleteProduct(id).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message + '  ' + res.deleteProduct.name,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getProducts();
      },
      error:(err)=>Swal.fire({
        title: err.error.message,
        icon: 'error',
        timer: 4000,
        position:'center'
      })
    })
  };

}
