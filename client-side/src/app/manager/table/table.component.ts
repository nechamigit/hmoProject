import {SelectionModel} from '@angular/cdk/collections';
import {Component,OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatTableModule} from '@angular/material/table';
import { ManagerService } from '../manager.service';
import { Users } from 'src/app/model/Users';
import { Route, Router, ActivatedRoute } from '@angular/router';
import { element } from 'protractor';
export interface PeriodicElement {
  name: string;
  position: number;
  mail: number;
  symbol: string;
}


// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', mail: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', mail: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', mail: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', mail: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', mail: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', mail: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', mail: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', mail: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', mail: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', mail: 20.1797, symbol: 'Ne'},
// ];
/**
 * @title Table with selection
 */
@Component({
   selector: 'app-table',
   templateUrl: './table.component.html',
   styleUrls: ['./table.component.less']
 })
 export class tableComponent  implements OnInit {

   displayedColumns: string[] = ['isConfirm', 'telephone', 'mail', 'adress','userName'];

  dataSource;
  selection; 
 
  users:Users[]
constructor(private service:ManagerService,private router:Router, private route:ActivatedRoute)
{
  route.params.subscribe(val => {
    this.service.getClerck().subscribe((res)=>{
      this.users=res;
      this.dataSource = new MatTableDataSource<Users>(this.users);

    })
   this.selection== new SelectionModel<Users>(true, []);
  });
}

  ngOnInit(){
    this.service.getClerck().subscribe((res)=>{
      this.users=res;
      this.dataSource = new MatTableDataSource<Users>(this.users);

    })
   this.selection== new SelectionModel<Users>(true, []);
  }
  /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected() {

    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }
  editUser(user:Users){
this.router.navigate(['edit-clerk',user.userId]);
  }
  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.position + 1}`;
  }
}
