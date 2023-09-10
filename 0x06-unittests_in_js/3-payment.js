const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  sum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is ${sum}`);
};