import { Component, enableProdMode, Input, OnInit, Output,EventEmitter, ViewEncapsulation, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
    selector: 'grid-header',
    templateUrl: './grid-header.component.html',
})
export class GridHeaderComponent {

    @Input()
    title:string ;
    @Input()
    isAddButton:boolean =false ;
    @Input()
    isSearchBox:boolean =false;
    @Input()
    isCloseButton:boolean =false ;

    @Output() OnAddItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnTextFilter : EventEmitter<any> = new EventEmitter(); 
    
    isLoading:boolean=false;
    constructor( public dialogRef: MatDialog ) {         
    }

    OnAdd(){
        this.OnAddItem.next();
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.OnTextFilter.emit(filterValue);
    }
}

