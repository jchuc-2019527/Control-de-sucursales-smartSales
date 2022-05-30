import { Component, OnInit } from '@angular/core';
import { productBranchModel } from 'src/app/models/productBranch.model';
import { ActivatedRoute } from '@angular/router';
import { ProductBranchRestService } from 'src/app/services/productBranchRest/product-branch-rest.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-branch',
  templateUrl: './product-branch.component.html',
  styleUrls: ['./product-branch.component.css']
})
export class ProductBranchComponent implements OnInit {
  productBranch: productBranchModel;
  productBranchs : any;

  idBranch:any; 

  constructor(
    private productBranchRest: ProductBranchRestService,
    private activateRoute:  ActivatedRoute
  ) { 
    this.productBranch = new productBranchModel('',0,0, '','');
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((idL:any)=>{
      this.idBranch = idL.get('id');
    });
  }

  getProductsBranch(){
    this.productBranchRest.getProductsBranch(this.idBranch).subscribe({
      next:(res:any)=>{
        this.productBranchs = res.productsBranch;
        console.log(this.productBranchs);
      },
      error: (err) => console.log(err.error.message || err.error)
    })
  }

  getProductsBranch2(){
    this.productBranchRest.getProductsBranch2(this.idBranch).subscribe({
      next:(res:any)=>{
        this.productBranchs = res.productsBranch;
        console.log(this.productBranchs);
      },
      error: (err) => console.log(err.error.message || err.error)
    })
  };

  addProductBranch(addProductForm: any){
    this.productBranchRest.addProductBranch().subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getProductsBranch()
        addProductForm.reset()
      },
      error: (err) => alert(err.error.message || err.error)
    })
  };

  addSale(addSale:any, id:string){
    this.productBranchRest.addSale(id).subscribe({
      next:(res:any)=>{
        Swal.fire({
          title: res.message,
          icon: 'success',
          showConfirmButton: false,
          timer: 2000,
          position:'center'
        })
        this.getProductsBranch()
        addSale.reset()
      },
      error: (err) => alert(err.error.message || err.error)
    })
  }

}
