import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { companyModel } from 'src/app/models/company.model';
import { CompanyRestService } from 'src/app/services/companyRest/company-rest.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  company: companyModel;
  idCompany: any
  companys: any =[] ;
  constructor(
    public activateRoute: ActivatedRoute,
    private companyRest: CompanyRestService
  ) { 
    this.company = new companyModel('','','','','','');
  }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe((idC:any)=>{
      this.idCompany = idC.get('id');
    });
    this.getCompany();
};

getCompany(){
  this.companyRest.getCompany(this.idCompany).subscribe({
    next:(res:any)=>{
      this.company = res.company;
     // console.log(this.company);
    },
    error: (err) => console.log(err.error.message || err.error)
  })
};

}
