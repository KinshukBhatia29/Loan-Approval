// Function to handle credit score calculation (example functionality)
function calculateCreditScore() {
    alert("Credit Score Calculator is not yet implemented.");
}

// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Loan Repayment Chart
    var ctx = document.getElementById('repaymentChart').getContext('2d');
    var repaymentChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [{
                label: 'Loan Repayment Amount',
                data: [1200, 1500, 1800, 1600, 1400, 2000, 2200],
                fill: true,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
                backgroundColor: 'rgb(0,0,0)',
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Previous Loan Repayments'
                }
            }
        }
    });

    // Income Chart
    var incomeCtx = document.getElementById('incomeChart').getContext('2d');
    var incomeChart = new Chart(incomeCtx, {
        type: 'bar',
        data: {
            labels: ['2019', '2020', '2021', '2022', '2023'],
            datasets: [{
                label: 'Annual Income',
                data: [30000, 35000, 40000, 42000, 45000], // Sample data
                backgroundColor: 'rgb(54, 162, 235)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: true,
                    text: 'Annual Income Over the Last 5 Years'
                }
            }
        }
    });
});
