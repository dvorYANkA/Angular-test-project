export interface Student {
    id: number;
    name: string;
    form: number;
    paymentCategory: string;
    price: number;
    isLastTicketDone: boolean;
  }
  
  export const students = [
    {
        id: 1,
        name: 'Sonya',
        form: 7,
        paymentCategory: 'Free',
        price: 0,
        isLastTicketDone: false,
    },
    {
        id: 2,
        name: 'Illia',
        form: 7,
        paymentCategory: 'Standard',
        price: 200,
        isLastTicketDone: true,
    },
    {
        id: 3,
        name: 'Maxim',
        form: 10,
        paymentCategory: "Standard",
        price: 200,
        isLastTicketDone: false,
    }
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */