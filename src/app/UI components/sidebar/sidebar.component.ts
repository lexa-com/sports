import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';
import { NotificationsComponent } from '../notifications/notifications.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{

  dialogConfig: MatDialogConfig<any> | undefined;

  constructor(private router: Router,
    private shared : SharedServiceService,
    private dialog: MatDialog,
   ){


  }
  ngOnInit(): void {
    this.dialogConfig = new MatDialogConfig();
  }

  navigatePremiumFive(){
    this.checkAuthStatus()
  }

  checkAuthStatus(){
    const message = 'Kindly log in to view premium games'
    this.shared.currentAuthStatus.subscribe((res)=>{
    if (res[0] == 'authenticated'){
    this.router.navigate(['/premium/five'])
  } else{
    this.openDialog(message)
  }
  
})

  }

  openDialog(message:string){
    
    const dialogRef = this.dialog.open(NotificationsComponent, {
      width: '440px',
      data:message
  
    });
  }

}
