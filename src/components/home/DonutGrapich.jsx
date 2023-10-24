import ApexChart from 'react-apexcharts'

function DonutGrapich({ data, wGrapich, hGrapich }) {

    const series = [];
    const labels = [];

    for (let category in data) {
        series.push(data[category]);
        labels.push(category)
    }

    const options = {
        color: 'white',
        labels: labels,
        chart: {
            type: 'donut',
            background: 'transparent'
        },
        plotOptions: {
            pie: {
                donut: {
                    labels: {
                        show: true,
                        total: {
                            show: true,
                            color: 'white'
                        },
                    }
                }
            }
        },
        theme: {
            mode: 'dark', 
            palette: 'palette2', 
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
            type="donut"
            width={wGrapich}
            height={hGrapich}
        />
    )
}

export default DonutGrapich;