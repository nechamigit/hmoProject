import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ManagerService } from '../manager.service';
import { MatTableDataSource } from '@angular/material';
import { SelectionModel } from '@angular/cdk/collections';
import { Users } from 'src/app/model/Users';
import { Categories } from 'src/app/model/categories';
import { Requests } from 'src/app/model/request';

export interface PeriodicElement {
  name: string;
  position: number;
  mail: number;
  symbol: string;
}
@Component({
  selector: 'app-request-table',
  templateUrl: './request-table.component.html',
  styleUrls: ['./request-table.component.less']
})
 export class RequestTableComponent  implements OnInit {

  displayedColumns: string[] = ['requestStatus','requestKind','categoryName'];
  dataSource;
  selection; 
 
  requests:Requests[]
constructor(private service:ManagerService,private router:Router)
{
}
  ngOnInit(){
    this.service.getRequest().subscribe((res)=>{
      this.requests=res;
      this.dataSource = new MatTableDataSource<Requests>(this.requests);

    })
   this.selection== new SelectionModel<Categories>(true, []);
  }
    isAllSelected() {

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  editRequest(request:Requests){
    console.log(request.requestId);
   this.router.navigate(['edit-request',request.requestId]);
 }
  
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }
  
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}