import { Component, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { MatCard } from '@angular/material/card'; // Import MatCard directly
import ChartDataLabels from 'chartjs-plugin-datalabels';
Chart.register(...registerables, ChartDataLabels); // ✅ Register plugins
@Component({
  selector: 'app-charts',
  imports: [MatCard],
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements AfterViewInit {
  private transactions = [
    {
      "transDate": "2025-01-13T05:29:37",
      "sourceNo": "AFX US-DEAL-5329651",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-13T00:00:00",
      "amount": 8.64,
      "currencyName": "USD",
      "agingDays": -51
    },
    {
      "transDate": "2025-01-13T05:31:34",
      "sourceNo": "AFX US-DEAL-5329652",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-13T00:00:00",
      "amount": 73.47,
      "currencyName": "USD",
      "agingDays": -51
    },
    {
      "transDate": "2025-01-13T05:49:00",
      "sourceNo": "AFX US-DEAL-5329653",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-13T00:00:00",
      "amount": 86.4,
      "currencyName": "USD",
      "agingDays": -51
    },
    {
      "transDate": "2025-01-15T01:49:25",
      "sourceNo": "AFX US-DEAL-5329656",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-15T00:00:00",
      "amount": 11,
      "currencyName": "USD",
      "agingDays": -49
    },
    {
      "transDate": "2025-01-15T07:21:36",
      "sourceNo": "AFX US-DEAL-5329657",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-15T00:00:00",
      "amount": 18.11,
      "currencyName": "USD",
      "agingDays": -49
    },
    {
      "transDate": "2025-01-16T07:05:39",
      "sourceNo": "AFX US-DEAL-5329658",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-16T00:00:00",
      "amount": 12.83,
      "currencyName": "USD",
      "agingDays": -48
    },
    {
      "transDate": "2025-01-16T07:08:10",
      "sourceNo": "AFX US-DEAL-5329659",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-16T00:00:00",
      "amount": 11,
      "currencyName": "USD",
      "agingDays": -48
    },
    {
      "transDate": "2025-01-17T01:49:06",
      "sourceNo": "AFX US-DEAL-5329660",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 11,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T05:59:39",
      "sourceNo": "AFX US-DEAL-5329661",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.94,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T06:21:35",
      "sourceNo": "AFX US-DEAL-5329662",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 22,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T06:27:36",
      "sourceNo": "AFX US-DEAL-5329663",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.94,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T06:32:38",
      "sourceNo": "AFX US-DEAL-5329664",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 12,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T06:46:35",
      "sourceNo": "AFX US-DEAL-5329665",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.93,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T07:20:36",
      "sourceNo": "AFX US-DEAL-5329666",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 21.41,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T07:56:37",
      "sourceNo": "AFX US-DEAL-5329667",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 12.84,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T07:57:24",
      "sourceNo": "AFX US-DEAL-5329668",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 11,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T08:00:56",
      "sourceNo": "AFX US-DEAL-5329669",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.92,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T08:09:04",
      "sourceNo": "AFX US-DEAL-5329670",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.92,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-17T08:10:36",
      "sourceNo": "AFX US-DEAL-5329671",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-17T00:00:00",
      "amount": 7.92,
      "currencyName": "USD",
      "agingDays": -47
    },
    {
      "transDate": "2025-01-20T01:41:42",
      "sourceNo": "AFX US-DEAL-5329672",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 11,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-20T06:08:37",
      "sourceNo": "AFX US-DEAL-5329673",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 11.8,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-20T06:27:15",
      "sourceNo": "AFX US-DEAL-5329674",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 12,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-20T07:34:57",
      "sourceNo": "AFX US-DEAL-5329675",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 11.8,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-20T07:44:36",
      "sourceNo": "AFX US-DEAL-5329676",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 12.88,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-20T07:55:58",
      "sourceNo": "AFX US-DEAL-5329677",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-20T00:00:00",
      "amount": 12,
      "currencyName": "USD",
      "agingDays": -44
    },
    {
      "transDate": "2025-01-21T05:48:59",
      "sourceNo": "AFX US-DEAL-5329679",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-21T00:00:00",
      "amount": 7.2,
      "currencyName": "USD",
      "agingDays": -43
    },
    {
      "transDate": "2025-01-21T06:09:55",
      "sourceNo": "AFX US-DEAL-5329680",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-21T00:00:00",
      "amount": 71.99,
      "currencyName": "USD",
      "agingDays": -43
    },
    {
      "transDate": "2025-01-21T06:17:01",
      "sourceNo": "AFX US-DEAL-5329681",
      "name": "First Federal Lakewood",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-21T00:00:00",
      "amount": 17.93,
      "currencyName": "USD",
      "agingDays": -43
    },
    {
      "transDate": "2025-01-21T06:20:46",
      "sourceNo": "AFX US-DEAL-5329682",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-21T00:00:00",
      "amount": 11.83,
      "currencyName": "USD",
      "agingDays": -43
    },
    {
      "transDate": "2025-01-23T01:35:10",
      "sourceNo": "AFX US-DEAL-5329685",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-23T00:00:00",
      "amount": 12.98,
      "currencyName": "USD",
      "agingDays": -41
    },
    {
      "transDate": "2025-01-23T01:59:47",
      "sourceNo": "AFX US-DEAL-5329686",
      "name": "H and A Financing and Services Corp",
      "paymentTerm": null,
      "period": " Range 1 (Current)",
      "dueDate": "2025-01-23T00:00:00",
      "amount": 12.98,
      "currencyName": "USD",
      "agingDays": -41
    }
  ]

  ngAfterViewInit() {
    this.createBarChart();
    this.createPieChart();
    this.createLineChart();

  }

  createBarChart() {
    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: this.transactions.map(tx => tx.sourceNo),
        datasets: [{
          label: 'Transaction Amount',
          data: this.transactions.map(tx => tx.amount),
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true }
        }
      }
    });
  }
  createPieChart() {
    const ctx = document.getElementById('pieChart') as HTMLCanvasElement;
  
    // Generate 31 unique colors dynamically
    const generateColors = (count: number) => {
      return Array.from({ length: count }, (_, i) => `hsl(${(i * 360) / count}, 70%, 50%)`);
    };
  
    const uniqueColors = generateColors(this.transactions.length); // Generate unique colors
  
    new Chart(ctx, {
      type: 'pie',
      data: {
        labels: this.transactions.map(tx => tx.sourceNo), // Using sourceNo instead of name
        datasets: [{
          label: 'Total Amount',
          data: this.transactions.map(tx => tx.amount),
          backgroundColor: uniqueColors, // Assign unique colors
        }]
      },
      options: { 
        responsive: true,
        plugins: {
          legend: {
            position: "right",
            align: "center",  
            labels: {
              boxWidth: 12,  
              padding: 10    
            }
          },
          title: {
            display: true,
            text: "Transaction Pie Chart (Legend on Right)"
          },
          // **Enable Data Labels to Show Total Amounts**
          datalabels: {
            color: '#fff', // White text for better visibility
            anchor: 'end', // Position at the edge
            align: 'start', // Align text properly
            font: {
              weight: 'bold', // Make text bold
              size: 12 // Set text size
            },
            formatter: (value, ctx) => {
              return `$${value.toFixed(2)}`; // Show amount with 2 decimal places
            }
          }
        }
      },
      plugins: [ChartDataLabels] // Register the DataLabels plugin
    });
  }
  
    createLineChart() {
      const ctx = document.getElementById('lineChart') as HTMLCanvasElement;
      new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.transactions.map(tx => tx.sourceNo),
          datasets: [{
            label: 'Transaction Amount Over Time',
            data: this.transactions.map(tx => tx.amount),
            borderColor: '#007bff',
            backgroundColor: 'rgba(0, 123, 255, 0.2)',
            borderWidth: 2,
            pointRadius: 5,
            pointHoverRadius: 7,
            pointBackgroundColor: '#ff4757',
            fill: true,
            tension: 0.4  // Makes the line smooth
          }]
        },
        options: {
          responsive: true,
          plugins: {
            legend: {
              display: true,
              position: 'top',
              labels: {
                font: { size: 14 },
                color: '#333'
              }
            }
          },
          scales: {
            x: {
              ticks: { 
                maxRotation: 45, // Adjusts the rotation
                minRotation: 0,
                font: { size: 12 },
                color: '#555'
              }
            },
            y: {
              beginAtZero: true,
              ticks: { font: { size: 14 }, color: '#555' }
            }
          }
        }
      });
    }
  }    