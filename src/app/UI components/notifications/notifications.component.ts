import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrl: './notifications.component.css'
})
export class NotificationsComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<NotificationsComponent>,
    @Inject(MAT_DIALOG_DATA) public Data: any,
    private router: Router
  ) {}

  message:any

  ngOnInit(): void {
    this.message = this.Data
  }

  goBack() {
    this.dialogRef.close();
    this.router.navigate(['/auth'])
  }
  



}
