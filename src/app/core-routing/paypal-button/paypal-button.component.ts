import { Component } from '@angular/core';
import { OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-paypal-button',
  template: `<div id="paypal-button-container"></div>`,
  styleUrl: './paypal-button.component.css'
})
export class PaypalButtonComponent implements OnInit {
  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderPayPalButton();
  }

  renderPayPalButton() {
    const script = this.renderer.createElement('script');
    script.src = 'https://www.paypal.com/sdk/js?client-id=YOUR_CLIENT_ID';  // Replace with your PayPal client ID
    script.onload = () => {
      window.paypal.Buttons({
        createOrder: (data: any, actions: {
            order: {
              create: (arg0: {
                purchase_units: {
                  amount: {
                    value: string; // Set the payment amount
                  };
                }[];
              }) => any;
            };
          }) => {
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: '10.00'  // Set the payment amount
              }
            }]
          });
        },
        onApprove: (data: any, actions: { order: { capture: () => Promise<any>; }; }) => {
          return actions.order.capture().then((details: { payer: { name: { given_name: string; }; }; }) => {
            alert('Transaction completed by ' + details.payer.name.given_name);
          });
        },
        onError: (err: any) => {
          console.error(err);
        }
      }).render('#paypal-button-container');
    };
    this.renderer.appendChild(document.body, script);
  }
}