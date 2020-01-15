import uuid from 'uuid/v1';

export default [
  {
    id: uuid(),
    ref: '#2001539',
    amount: 30.5,
    customer: {
      name: 'Ekaterina Tankova'
    },
    createdAt: 1555016400000,
    status: 'gelen'
  },
  {
    id: uuid(),
    ref: '#22301239',
    amount: 25.1,
    customer: {
      name: 'Cao Yu'
    },
    createdAt: 1555016400000,
    status: 'giden'
  },
  {
    id: uuid(),
    ref: '#2551139',
    amount: 10.99,
    customer: {
      name: 'Alexa Richardson'
    },
    createdAt: 1554930000000,
    status: 'onaylanan'
  },
  {
    id: uuid(),
    ref: '#2110169',
    amount: 96.43,
    customer: {
      name: 'Anje Keizer'
    },
    createdAt: 1554757200000,
    status: 'gelen'
  },
  {
    id: uuid(),
    ref: '#3421539',
    amount: 32.54,
    customer: {
      name: 'Clarke Gillebert'
    },
    createdAt: 1554670800000,
    status: 'giden'
  },
  {
    id: uuid(),
    ref: '#2550039',
    amount: 16.76,
    customer: {
      name: 'Adam Denisov'
    },
    createdAt: 1554670800000,
    status: 'giden'
  }
];
