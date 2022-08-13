import { Injectable, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FuseConfirmationService } from '@fuse/services/confirmation';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService implements OnInit {

  constructor(private _snackBar: MatSnackBar,
    private _fuseConfirmationService: FuseConfirmationService,
    private _formBuilder: FormBuilder) {   //private toastr: ToastrService  

    this.configForm = this._formBuilder.group({
      title: 'Delete Record',
      message: '<span class="font-medium"></span> Are you sure To Delete ? ',
      icon: this._formBuilder.group({
        show: true,
        name: 'feather:exclamation',
        color: 'warn'
      }),
      actions: this._formBuilder.group({
        confirm: this._formBuilder.group({
          show: true,
          label: 'Delete',
          color: 'warn'
        }),
        cancel: this._formBuilder.group({
          show: true,
          label: 'Close'
        })
      }),
      dismissible: true
    });
  }

  configForm: FormGroup;
  ngOnInit(): void {

  }

  //config: ToasterConfig;
  index = 1;
  destroyByClick = true;
  duration = 5000;
  hasIcon = true;
  //position: NbGlobalPosition = NbGlobalPhysicalPosition.TOP_RIGHT;
  preventDuplicates = false;
  status: NbToastStatus = NbToastStatus.SUCCESS;

  title = 'Warning';
  content = `Please Attention to Error!`;
  
  showToast(type: NbToastStatus, title: string, body: string) {
    const titleContent = title ? `${title}` : '';
    this.index += 1;
    this._snackBar.open(body, null, { duration: 30000, panelClass: 'my-custom-snackbar' });
  }

  confirmDelete() {
    const dialogRef = this._fuseConfirmationService.open(this.configForm.value);
    return dialogRef.afterClosed();
  }
}


export enum NbToastStatus {
  DEFAULT,
  DANGER,
  INFO,
  PRIMARY,
  SUCCESS,
  WARNING,
};

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    debugger;
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}