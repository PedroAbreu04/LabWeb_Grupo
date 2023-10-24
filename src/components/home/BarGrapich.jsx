import ApexChart from 'react-apexcharts'

function BarGrapich({ data, wGrapich, hGrapich }) {

    const series = [
        {
            data: [
                data.products.created_this_month,
                data.carts.created_this_month,
                data.sales.created_this_month,
                data.customers.created_this_month
            ]
        }
    ];

    const options = {
        chart: {
            type: 'donut',
            background: 'transparent'
        },
        plotOptions: {
            bar: {
                columnWidth: '45%',
                distributed: true,
            }
        },
        dataLabels: {
            enabled: false
        },
        legend: {
            show: false
        },
        xaxis: {
            categories: [
                'Produtos',
                'Carrinhos',
                'Vendas',
                'Customers'
            ],
            labels: {
                style: {
                    colors: 'white',
                    fontSize: '12px'
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette3', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        }
    }

    return (
        <ApexChart
            options={options}
            series={series}
            type="bar"
            width={wGrapich}
            height={hGrapich}
        />
    )
}

export default BarGrapich;