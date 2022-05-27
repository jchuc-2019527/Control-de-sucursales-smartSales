import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { AdminRestService } from '../adminRest/admin-rest.service';


@Injectable({
  providedIn: 'root'
})
export class ProductCompanyRestService {
  httOptions = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': this.adminRest.getToken()
  })
  constructor(
    private http: HttpClient,
    private adminRest: AdminRestService
  ) {}

  getProducts(){
    return this.http.get(environment.baseUrl + 'productCompany/getProducts',{headers:this.httOptions});
  };
  getProducts2(){
    return this.http.get(environment.baseUrl + 'productCompany/getProducts2',{headers:this.httOptions});
  };

  getProductCompany(id: string){
    return this.http.get(environment.baseUrl + 'productCompany/getProductCompany/' + id, {headers:this.httOptions});
  };

  addProductCompany(params: {}){
    return this.http.post(environment.baseUrl + 'productCompany/addProductCompany' ,params, {headers:this.httOptions});
  };

  updateProduct(id:string, params:{}){
    return this.http.put(environment.baseUrl + 'productCompany/updateProduct/' + id, params,  {headers: this.httOptions});
   };

   deleteProduct(id: string){
    return this.http.delete(environment.baseUrl + 'productCompany/deleteProduct/' + id, {headers: this.httOptions});
   };
}
