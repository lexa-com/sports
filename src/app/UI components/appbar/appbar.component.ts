import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/sign-up/auth service/auth.service';
import { SharedServiceService } from '../../shared-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-appbar',
  templateUrl: './appbar.component.html',
  styleUrl: './appbar.component.css'
})
export class AppbarComponent implements OnInit {
authenticated: any = false;
notAuthenticated: any = true;

  constructor(private auth : AuthService,
    private shared : SharedServiceService,
    private router : Router
  ){

  }
  ngOnInit(): void {
    this.checkAuth()
  }

  checkAuth(){
 this.shared.currentAuthStatus.subscribe((res)=>{
  console.log(res)
  if (res[0] == null){
    this.authenticated = false
    this.notAuthenticated = true

  } else if (res[0] == 'authenticated'){
    this.authenticated = true
    this.notAuthenticated = false

  } else if (res[0] == 'null'){
    this.authenticated = false
    this.notAuthenticated = true
  }
})

  }


  logOut(){
this.auth.logOut()
this.shared.authCheck(['null','null'])

  }

}
