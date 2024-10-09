import { Component } from '@angular/core';
import { AuthService } from './auth service/auth.service';
import { Router } from '@angular/router';
import { SharedServiceService } from '../../shared-service.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { addDoc, collection } from '@angular/fire/firestore';
import { MatSnackBar } from '@angular/material/snack-bar';


//import { AngularFirestore } from '@angular/fire/firestore';



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  isLogin: boolean = true;
  email:string    = ''
  password:string = ''
  username:string = ''

  constructor(private auth: AuthService,
    private router: Router,
    private sharedService: SharedServiceService,
    private firestore: AngularFirestore,
    private snackBar: MatSnackBar,
  ){


  }

  toggleForm(isLogin: boolean) {
    this.isLogin = isLogin;
  }

  logIn() {
    // Input validation
    if (this.email.trim() === '') {
      this.snackBar.open('Please enter your email', '', { duration: 3000 });
      return;
    }
    if (this.password.trim() === '') {
      this.snackBar.open('Please enter your password', '', { duration: 3000 });
      return;
    }
  
    // Call the auth service and handle the returned Promise
    this.auth.logIn(this.email, this.password)
      .then(() => {
        this.sendAuthStatus(['authenticated',this.email])
        this.email = '';
        this.password = '';
        this.router.navigate(['/premium/home'])
      })
      .catch(err => {
        this.snackBar.open(err, '', { duration: 3000 }); // Display error message
      });
  }
    

  async signUpUser() {
    if (this.email === '') {
      alert('Please enter an email');
      return;
    }
    if (this.password === '') {
      alert('Please enter a password');
      return;
    }
  
    try {
      // Call the signUp method but no need to rely on userCredential to save the email
      await this.auth.signUp(this.email, this.password);
  
      // Save the user's email directly to Firestore
      const userDoc = this.firestore.collection('users').doc(this.email); // Using email as the document ID
      await userDoc.set({
        email: this.email,  // Only saving the provided email
        createdAt: new Date(), // Optional: track creation time
      });
      console.log('Email saved in Firestore');
  
      // Clear the fields
      this.email = '';
      this.password = '';
    } catch (error) {
      // Handle errors (e.g., user already exists, weak password, etc.)
      //alert(error.message);
    }
  }
      

  sendAuthStatus(auth:any) {
    console.log(auth)
    this.sharedService.authCheck(auth);
  }

}
