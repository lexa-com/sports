import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { AppbarComponent } from './UI components/appbar/appbar.component';
import { SidebarComponent } from './UI components/sidebar/sidebar.component';
import { FooterComponent } from './UI components/footer/footer.component';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LandingPageComponent } from './UI components/landing-page/landing-page.component';
import { HomeComponent } from './UI components/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { OverUnderComponent } from './UI components/gamesViews/over-under/over-under.component';
import { ComboPicksComponent } from './UI components/gamesViews/combo-picks/combo-picks.component';
import { MarketsBetsComponent } from './Services/markets-bets/markets-bets.component';
import { SignUpComponent } from './Services/sign-up/sign-up.component';
import { TipstersViewComponent } from './UI components/gamesViews/tipsters-view/tipsters-view.component';
import { TipsterDetailsComponent } from './UI components/gamesViews/tipsters-view/tipster-details/tipster-details.component';
import{AngularFireModule} from '@angular/fire/compat'
//import{} from '@angular/fire/compat'
import { environment } from '../environment/environment';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PremiumHomeComponent } from './UI components/premium-home/premium-home.component';
import { PayWallComponent } from './UI components/pay-wall/pay-wall.component';
import { PaypalButtonComponent } from './core-routing/paypal-button/paypal-button.component';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NotificationsComponent } from './UI components/notifications/notifications.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { PremiumFivePlusComponent } from './UI components/gamesViews/premium-five-plus/premium-five-plus.component';
import { TipsterPaywallComponent } from './UI components/pay-wall/tipster-paywall/tipster-paywall.component';
import { PremiumTenComponent } from './UI components/gamesViews/premium-ten/premium-ten.component';
import { PremiumTwentyComponent } from './UI components/gamesViews/premium-twenty/premium-twenty.component';
import { PremiumVvipComponent } from './UI components/gamesViews/premium-vvip/premium-vvip.component';


@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    SidebarComponent,
    FooterComponent,
    LandingPageComponent,
    HomeComponent,
    OverUnderComponent,
    ComboPicksComponent,
    MarketsBetsComponent,
    SignUpComponent,
    TipstersViewComponent,
    TipsterDetailsComponent,
    PremiumHomeComponent,
    PayWallComponent,
    PaypalButtonComponent,
    NotificationsComponent,
    PremiumFivePlusComponent,
    TipsterPaywallComponent,
    PremiumTenComponent,
    PremiumTwentyComponent,
    PremiumVvipComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatExpansionModule,
    MatToolbarModule,
    MatButtonModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FirestoreModule,
    AngularFirestoreModule,
    MatDialogModule,
    MatCardModule
    
    
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
