import { Component, enableProdMode, Input, OnInit, Output,EventEmitter, ViewEncapsulation, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
    selector: 'app-page-header',
    templateUrl: './app-page-header.component.html',
})
export class PageHeaderComponent {

    @Input()
    title:string = "Page Title" ;
    @Input()
    isAddButton:boolean =false ;
    @Input()
    isCloseButton:boolean =false ;
    @Input()
    isSearchBox:boolean =false;
    @Input()
    isSaveButton:boolean =false;
    @Input()
    isSaveButton2:boolean =false;
    @Input()
    isCustomButton:boolean =false;
    @Input()
    returnUrl:string ="";
    
    @Output() OnAddItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnSaveItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnSaveCustom : EventEmitter<any> = new EventEmitter(); 
    @Output() OnClose : EventEmitter<any> = new EventEmitter(); 
    @Output() OnTextFilter : EventEmitter<any> = new EventEmitter(); 
    
    isLoading:boolean=false;
    constructor( private router:Router) {         //, public dialogRef: MatDialogRef<any>
    }

    OnAdd(){
        this.OnAddItem.next();
    }

    OnSave(){
        this.OnSaveItem.next();
    }

    OnCustomSave(){
        this.OnSaveCustom.next();
    }

    gotoUrl(){
        this.router.navigateByUrl(this.returnUrl);

    }

    closeModal(){
        this.OnClose.next(); 
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.OnTextFilter.emit(filterValue);
    }
}

