// Grade Distribution Chart
const gradeCtx = document.getElementById('gradeChart').getContext('2d');
new Chart(gradeCtx, {
    type: 'doughnut',
    data: {
        labels: ['Endterm', 'Insem', 'Lab'],
        datasets: [{
            data: [60, 30, 10],
            backgroundColor: ['#667eea', '#764ba2', '#f093fb']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'bottom'
            }
        }
    }
});

// Course Performance Chart
const perfCtx = document.getElementById('performanceChart').getContext('2d');
new Chart(perfCtx, {
    type: 'bar',
    data: {
        labels: ['DSBDA', 'CNS', 'WAD', 'CC', 'Internship'],
        datasets: [{
            label: 'Score',
            data: [92, 88, 85, 90, 87],
            backgroundColor: ['#667eea', '#764ba2', '#f093fb', '#4facfe', '#00f2fe']
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
            y: {
                beginAtZero: true,
                max: 100
            }
        },
        plugins: {
            legend: {
                display: false
            }
        }
    }
});