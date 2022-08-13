import { Component, enableProdMode, Input, OnInit, Output,EventEmitter, ViewEncapsulation, AfterViewInit, ViewChild, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatPaginator, MatPaginatorIntl } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';


@Component({
    selector: 'app-grid',
    templateUrl: './app-grid.component.html',
    styleUrls:['./grid-grid.component.css'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppGridComponent {

    model : any;
    allPages :string = "allPages";
    checkBoxesMode :string = "checkBoxesMode";

    @Input() title:string ;
    @Input() isAdding:boolean = false;
    @Input() isCloseButton:boolean = false;
    @Input() isSearching:boolean = false;
    @Input() isHeader:boolean = false;
    @Input() useBackground:boolean=false;
    @Input() isRotateHeader:boolean=false;

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
        this.displayedColumns = this.columns.filter(f=>f.dataField != undefined && f.dataField != 'Id').map(function(a) { return a.dataField ;});
        this.isLoading =false;
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
       
    }

    applyFilter(value: any) {
        this.dataSource.filter = value.trim().toLowerCase();
    }

    getChildValue(parentObject:any, filed :string){
        if(parentObject!=undefined)
            return parentObject[filed];
        else
            return "";    
    }

    OnAdd(){
        this.OnAddItem.next();
    }

    OnEdit(value:any){
        if(value != null){
            this.model = value.row.data // value;
        }         
        this.OnEditItem.next(this.model);
    }

    OnDelete(item:any){
        this.model = item.row.data ;// item;
        let id = this.model.Id;
        this.OnDeleteItem.next(id);
    }

    OnDetail(item:any){
        this.model = item.row.data
        this.OnDetailItem.next(this.model);
    }
    
    OnDetail2(item:any){
        this.model = item.row.data
        this.OnDetailItem2.next(this.model);
    }


    OnCellPrepared(options:any){  
        if (options.rowType == 'header' ){  
          //options.cellElement.style.transform = 'rotate(-90deg)';  
          //options.cellElement.style.height = '100px';            
          //options.cellElement.style.width = "50px";     
          //options.cellElement.style.overflow = 'visible';       
          //options.cellElement.style.whiteSpace = 'nowrap';
        }  
    }

    OnRowPrepared(e) {  
        if(this.useBackground){      
            if (e.rowType !== "data")  
                return ;            
            if ((e.data.Times % 2)==1 ) {  
                e.rowElement.style.backgroundColor = "#e8472e";  
                e.rowElement.classsName = e.rowElement.className.replace("dx-row-alt", "");  
            }  
        }

        if (e.rowType == 'header' && this.isRotateHeader){  
            e.rowElement.style.height = '100px';            
        }
    }  
    
    OnContentReady(e) {         
        setTimeout(function () {  
          var scrollable = e.component.getScrollable();  
          scrollable.scrollTo(1000);  
        }, 0);  
    }

    onShowDetailData(item){
        let data = item.row.data,
            dataValue ="";

        let values = this.columns.map((val)=>{ 
            dataValue = data[val.dataField];
            if(dataValue!=undefined && dataValue !=null && dataValue !="")
                return `<tr > <td >${val.caption}: </td> <td >${dataValue} </td></tr>`;
           });
        return   `<table> ${values } </table>`  ;         
    }
}

