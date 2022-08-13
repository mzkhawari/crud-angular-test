import { Component, OnInit } from '@angular/core';
import { NbToastStatus, ToastMessageService } from '../../common-service/service/toast-message.service';
import { BaseCrudService } from '../../common-service/service/base-crud.service';
import { CustomerFormComponent} from '../customer-form/customer-form.component';
import { MatDialog } from '@angular/material/dialog';
import Globals from 'app/common-service/globals';
import { CustomerDto } from '../model/customer.dto';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent implements OnInit {

  datasource : CustomerDto[]=[];
  model : CustomerDto;
  private baseUrlApi : string = "";
  constructor(
    private crudService: BaseCrudService,
    private modalService: MatDialog,
    private toastMessageService: ToastMessageService ) {
      this.model = new CustomerDto(0);
      this.baseUrlApi = Globals.UrlCustomer ;
   }

   columns = [    
    {
      caption:"Edit/Delete",
      width:100,
      cellTemplate:'editCellTemplate',
    },    
     {
        dataField:"Id", 
        alignment:"right", 
        caption:"ID" ,
        sortOrder:"desc",
    },        
    {
        dataField:"Firstname",
        alignment:"center",
        caption: "First Name",
    },   
    {
      dataField:"Lastname",
      alignment:"center",
      caption: "Last Name",
    },
    {
      dataField:"PhoneNumber",
      alignment:"center",
      caption: "Phone Number",
    },                           
    {
      dataField:"Email",
      alignment:"center",
      caption: "Customer Email",
    },                      
    {
      dataField:"BankAccountNumber",
      alignment:"center",
      caption: "Bank Account Number",
    },                       
    {
      dataField:"DateOfBirth",
      alignment:"center",
      caption: "Date Of Birth",
    }];


openDialogForm(dataModel?:CustomerDto) {
  const activeModal = this.modalService.open(CustomerFormComponent );
  activeModal.componentInstance.model = Object.assign({},  dataModel);
  activeModal.componentInstance.OnSave.subscribe((receivedEntry) => {
    this.OnSave(receivedEntry);
      activeModal.close();
    });
}
 
  ngOnInit() {
    this.get();    
  }

  onDeleteConfirm(id:number) {
    this.toastMessageService.confirmDelete().subscribe((result) => {
      console.log(result);
      if(result==='confirmed'){
        let res =this.crudService.deleteById(this.keyItem, id)
        if(res){
          this.toastMessageService.showToast(NbToastStatus.SUCCESS, "Success!" , "Deleted is SuccessFully!")
          this.get();
        }
        else{
          this.toastMessageService.showToast(NbToastStatus.DANGER, "Error!" , "Deleted is Failed!")
        }
      }
    });
  }

  OnUpdate(item : CustomerDto) {     
    this.openDialogForm(item);
  }

  isLoading:boolean =false;
  keyItem:string = 'customer';
  private get(){
    debugger;
    this.crudService.get(this.keyItem).subscribe(res=>{
      this.datasource = res ;     
    },
    error =>{
      this.toastMessageService.showToast(NbToastStatus.DANGER, "Error " , error);
    });
  }

  OnSave(model: CustomerDto){
    debugger;
    var id = model.Id;     
    if(id==0 || id==undefined){
      this.crudService.post(this.keyItem, model).subscribe(res=>{
      if(res){
        this.toastMessageService.showToast(NbToastStatus.SUCCESS, "Success!" , "The Customer is Added SuccessFully!")      
        this.get();
      }else{
        this.toastMessageService.showToast(NbToastStatus.DANGER, "Error!" , "The Error is Adding Customer!")      
      }

      }, error =>{        
        this.toastMessageService.showToast(NbToastStatus.DANGER, "Error!" , error);
      },
      () => {
        //this.get();
        //this.model = new CustomerDto();
      })
    }else{
      this.crudService.putData(this.keyItem, model, model.Id).subscribe(res=>{
      if(res){
        this.toastMessageService.showToast(NbToastStatus.SUCCESS, "Success! " , "The Customer is Updated SuccessFully!")      
      }else{
        this.toastMessageService.showToast(NbToastStatus.DANGER, "Error!" , "Error in Updating!")      
      }
      }, error =>{        
        this.toastMessageService.showToast(NbToastStatus.DANGER, "Error!" , error);
      },
      () => {
        this.get();
        this.model = new CustomerDto();
      })
    }
  }
}
