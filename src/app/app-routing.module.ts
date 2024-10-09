import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './UI components/landing-page/landing-page.component';
import { ComboPicksComponent } from './UI components/gamesViews/combo-picks/combo-picks.component';
import { OverUnderComponent } from './UI components/gamesViews/over-under/over-under.component';
import { HomeComponent } from './UI components/home/home.component';
import { MarketsBetsComponent } from './Services/markets-bets/markets-bets.component';
import { SignUpComponent } from './Services/sign-up/sign-up.component';
import { TipstersViewComponent } from './UI components/gamesViews/tipsters-view/tipsters-view.component';
import { TipsterDetailsComponent } from './UI components/gamesViews/tipsters-view/tipster-details/tipster-details.component';
import { PremiumHomeComponent } from './UI components/premium-home/premium-home.component';
import { PayWallComponent } from './UI components/pay-wall/pay-wall.component';
import { PremiumFivePlusComponent } from './UI components/gamesViews/premium-five-plus/premium-five-plus.component';
import { PremiumTenComponent } from './UI components/gamesViews/premium-ten/premium-ten.component';
import { PremiumTwentyComponent } from './UI components/gamesViews/premium-twenty/premium-twenty.component';
import { PremiumVvipComponent } from './UI components/gamesViews/premium-vvip/premium-vvip.component';

const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
    children: [
      {
        path: '',
        component: OverUnderComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'over',
        component: OverUnderComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'combo',
        component: ComboPicksComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'markets',
        component: MarketsBetsComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'auth',
        component: SignUpComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'tipsters',
        component: TipstersViewComponent,
        pathMatch: 'full',
       
      },
      {
        path: 'tipsters/details',
        component: TipsterDetailsComponent,
        pathMatch: 'full',
      },
      {
        path: 'premium/home',
        component: PremiumHomeComponent,
        pathMatch: 'full',
      },
      {
        path: 'premium/five',
        component: PremiumFivePlusComponent,
        pathMatch: 'full',
      },
      {
        path: 'premium/ten',
        component: PremiumTenComponent,
        pathMatch: 'full',
      },
      {
        path: 'premium/twenty',
        component: PremiumTwentyComponent,
        pathMatch: 'full',
      },
      {
        path: 'premium/vvip',
        component: PremiumVvipComponent,
        pathMatch: 'full',
      },

    ]
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
