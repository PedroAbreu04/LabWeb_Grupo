import ApexChart from 'react-apexcharts'

function BarGrapich({ wGrapich, dataGrapich }) {

    const options = {
        chart: {
            background: 'transparent',
        },
        theme: {
            palette: 'palette10',
            mode: 'dark',
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        },
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
        colors: ['#FF6701'],
        dataLabels: {},
        legend: {
            show: true,
            showForSingleSeries: true,
            customLegendItems: ['Atual', 'Expectativa'],
            markers: {
                fillColors: ['rgb(255, 103, 1, 0.9)', 'rgb(255,255,255,0.9)']
            }
        }
    }

    const series = [{
        name: 'Atual',
        data: dataGrapich == null ?
            []
            :
            dataGrapich.map((data) => ({
                x: data.date,
                y: data.value,
                goals: [
                    {
                        name: 'Expectativa',
                        value: 3,
                        strokeWidth: data.value > 3 ? 10 : 3,
                        strokeHeight: data.value > 3 ? 0 : 10,
                        strokeColor: '#FFF',
                        strokeLineCap: data.value > 3 ? 'round' : ''
                    }
                ]
            }))
    }]



    return (
        <ApexChart
            options={options}
            series={series}
            type="bar"
            width={wGrapich}
        />
    )
}

export default BarGrapich; 