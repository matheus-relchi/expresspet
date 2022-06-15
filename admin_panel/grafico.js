const data = {
  labels: [
    'Brinquedos',
    'Ração para Gato',
    'Ração para Cachorro',
  ],
  datasets: [{
    label: 'Percentual de vendas por categoria de produto',
    data: [20, 45, 35],
    backgroundColor: [
      'rgb(255, 0, 0)',
      'rgb(0,255,0)',
      'rgb(0, 0, 255)'
    ],
    hoverOffset: 1
  }]
};
const actions = [
  {
    name: 'Randomize',
    handler(chart) {
      chart.data.datasets.forEach(dataset => {
        dataset.data = Utils.numbers({count: chart.data.labels.length, min: 0, max: 100});
      });
      chart.update();
    }
  }
]
const config = {
  type: 'pie',
  data: data,
  options: {
    responsive: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Percentual de vendas por categoria de produto'
      }
    }
  },
};
const myChart = new Chart(
        document.getElementById('grafico'), config);
