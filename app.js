// https://calculator.swiftutors.com/equity-ratio-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const equityRatioRadio = document.getElementById('equityRatioRadio');
const totalShareholdersEquityRadio = document.getElementById('totalShareholdersEquityRadio');
const totalAssetsRadio = document.getElementById('totalAssetsRadio');

let equityRatio;
let totalShareholdersEquity = v1;
let totalAssets = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

equityRatioRadio.addEventListener('click', function() {
  variable1.textContent = 'Total Shareholder\'s Equity';
  variable2.textContent = 'Total Assets';
  totalShareholdersEquity = v1;
  totalAssets = v2;
  result.textContent = '';
});

totalShareholdersEquityRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Ratio';
  variable2.textContent = 'Total Assets';
  equityRatio = v1;
  totalAssets = v2;
  result.textContent = '';
});

totalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Equity Ratio';
  variable2.textContent = 'Total Shareholder\'s Equity';
  equityRatio = v1;
  totalShareholdersEquity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(equityRatioRadio.checked)
    result.textContent = `Equity Ratio = ${computeEquityRatio().toFixed(2)} %`;

  else if(totalShareholdersEquityRadio.checked)
    result.textContent = `Total Shareholder's Equity = ${computeTotalShareholdersEquity().toFixed(2)}`;

  else if(totalAssetsRadio.checked)
    result.textContent = `Total Assets = ${computeTotalAssets().toFixed(2)}`;
})

// calculation

function computeEquityRatio() {
  return (Number(totalShareholdersEquity.value) / Number(totalAssets.value)) * 100;
}

function computeTotalShareholdersEquity() {
  return (Number(equityRatio.value) / 100) * Number(totalAssets.value);
}

function computeTotalAssets() {
  return Number(totalShareholdersEquity.value) / (Number(equityRatio.value) / 100);
}