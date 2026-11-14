const expense=
document.getElementById('breakdown-chart');
const chartData={
  labels:['food','travel','shopping','bills','education','healthcare'], 
  datasets:[{
  data:[3500,1000,2500,4800,5578,6548], 
  backgroundColor:['blue','orange','purple','red','green','teal']
  }]     
}
const chartConfig={
  type:'doughnut', 
  data:'chartData'
};
new Chart(chartexpense,chartConfig);

const income=
document.getElementById('income-chart');
const incomeExpenseData={
  labels:['January','February','March','April','May','June','July','August','September','October','November','December'], 
  datasets:[{label:'Income', 
            data:[3000,4500,8562,5392,8064,4727,6050,5943,7050,3747,9695,3830],
            backgroundColor:'Green'}
            {label:'Expense', 
            data:[8946, 5343,9556,5353,5956,2315,5616,2323,9546,5353,4546,1355], 
            backgroundColor:'Red'}
}]
const incomeConfig={
  type:'bar', 
  data:'incomeExpenseData'
}
new Chart(chartincome,incomeConfig);

const spending=
document.getElementById('monthly-spendingchart')

const spending={
  labels:['January','February','March','April','May','June','July','August','September','October','November','December'], 
  datasets:[{
    label:'Monthly Expense', 
    data:[5000,4500,7000,5318,8953,2323,5548,5526,9548,5248,7215,5287], 
    backgroundColor:'#DC2626', 
    pointBorderColor:'black'
  }]
}
const spendingConfig={
  type:'line', 
  data:'spending'
}
new Chart(chartspending,spendingConfig) 
