import { Component, enableProdMode, Input, OnInit, Output,EventEmitter, ViewEncapsulation, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { fuseAnimations } from '@fuse/animations';

@Component({
    selector: 'app-grid-header',
    templateUrl: './app-grid-header.component.html',
    styleUrls:[ './app-grid-header.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations     : fuseAnimations,
})
export class AppGridHeaderComponent {

    model:any;   

    @Input()
    titleGrid:string ;

    _datasource: any[] ;
    get datasource(): any[] {
        return this._datasource;
    }

    @Input() set datasource(value: any[]) {
        if(value !=undefined && value.length >0){
            this.isLoading =false;
        }
        let that = this;
        setTimeout(()=>{ that.isLoading=false; },10000)
        this._datasource = value;
        this.dataSource = new MatTableDataSource(this._datasource);
        this.dataSource.sort = this.tableSort;
        this.dataSource.paginator = this.paginator;   
    }

    _columns: any[] ;
    get columns(): any[] {
        return this._columns;
    }
    @Input() set columns(value: any[]) {
        this._columns = value;
        this.displayedColumns = this.columns.filter(f=>f.dataField != undefined && f.dataField != 'Id').map(function(a) { return a.dataField});
        debugger;
    }

    @Output() OnAddItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnEditItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnDeleteItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnDetailItem : EventEmitter<any> = new EventEmitter(); 
    @Output() OnDetailItem2 : EventEmitter<any> = new EventEmitter(); 
    
    displayedColumns: string[] = [];// ['position', 'name', 'weight', 'symbol'];    
    
    dataSource:any;
    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild('tableSort') tableSort = new MatSort();
    

    isLoading:boolean =true;
    searchInputControl: FormControl = new FormControl();
    constructor( ) {         
        window.console.log(this.datasource)      
    }

    applyFilter(event: Event) {
        const filterValue = (event.target as HTMLInputElement).value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    }

    OnAdd(){
        this.OnAddItem.next();
    }

    OnEdit(value:any){
        if(value != null){
            this.model = value;
        }         
        this.OnEditItem.next(this.model);
    }

    OnDelete(item:any){
         
        this.model = item;
        let id = this.model.Id;
        this.OnDeleteItem.next(id);

    }

    OnDetail(item:any){
        this.OnDetailItem.next(item);
    }

    OnDetail2(item:any){
        this.OnDetailItem2.next(item);
    }
}

