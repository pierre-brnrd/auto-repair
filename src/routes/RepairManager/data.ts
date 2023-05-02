export interface Customer {
  firstName: string;
  lastName: string;
  year: number;
  make: string;
  model: string;
  service: Service[];
}

export interface Service {
  code: number;
  desc: string;
  date: string;
  cost: number;
}

export const customerData: Customer[] = [
  {
    firstName: "Kathy",
    lastName: "Barker",
    year: 2016,
    make: "Ford",
    model: "Focus",
    service: [
      {
        code: 1001,
        desc: "Oil change",
        date: "25/01/2019",
        cost: 20.71,
      },
      {
        code: 1001,
        desc: "Oil change",
        date: "03/04/2019",
        cost: 22.13,
      },
      {
        code: 1001,
        desc: "Oil change",
        date: "05/08/2019",
        cost: 22.13,
      },
      {
        code: 1009,
        desc: "Brake pad replacement",
        date: "05/08/2019",
        cost: 258.41,
      },
    ],
  },
  {
    firstName: "Ralph",
    lastName: "Benson",
    year: 2014,
    make: "Honda",
    model: "Civic",
    service: [
      {
        code: 1001,
        desc: " Oil change",
        date: "13/03/2019",
        cost: 36.42,
      },
      {
        code: 1003,
        desc: "A/C recharge",
        date: "13/03/2019",
        cost: 206.14,
      },
    ],
  },
  {
    firstName: "Bob",
    lastName: "Douglas",
    year: 2016,
    make: "Ford",
    model: "F-150",
    service: [
      {
        code: 1005,
        desc: "Tire patch (driver's side front)",
        date: "12/05/2020",
        cost: 0,
      },
    ],
  },
  {
    firstName: "Omar",
    lastName: "Adams",
    year: 2017,
    make: "Kia",
    model: "Sorento",
    service: [
      {
        code: 1006,
        desc: "Rough shift from 2nd to 3rd",
        date: "05/05/2020",
        cost: 223.43,
      },
    ],
  },
];
