import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AdminRestService } from '../adminRest/admin-rest.service';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductBranchRestService {
  httOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.adminRest.getToken()
  }) 

  constructor(
    private httP: HttpClient,
    private adminRest: AdminRestService
  ) { }

  getProductsBranch(id: string){
    return this.httP.get(environment.baseUrl + 'productBranch/getProductsBranch/' + id, {headers:this.httOptions})
  };

  getProductsBranch2(id: string){
    return this.httP.get(environment.baseUrl + 'productBranch/getProductsBranch2/' + id, {headers:this.httOptions})
  };

  addProductBranch(){
    return this.httP.post(environment.baseUrl + 'productBranch/addProductBranch', {headers:this.httOptions})
  };

  addSale(id: string){
    return this.httP.post(environment.baseUrl + 'productBranch/addSale/' + id, {headers:this.httOptions} )
  };
  
}
