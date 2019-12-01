import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { ClerkDetails } from './model/clerkDetails';
import { ClerkDetailsComponent } from './user/clerk-details/clerk-details.component';
@Injectable()
export class DialogService {

constructor(public dialog: MatDialog) { }


openLoginDialog() {
return this.dialog.open(ClerkDetailsComponent, {
width: '500px',
maxHeight:'200vh',
height:'800px'
});
}

// openRegisterDialog() {
// return this.dialog.open(RegisterComponent, {
// width: '40vw',
// maxHeight: '80vh'
// });
// }

// openContinueCompanyRegistrationDialog() {
// return this.dialog.open(ContinueCompanyRegistrationComponent, {
// width: '300px',
// });
// }
 }
