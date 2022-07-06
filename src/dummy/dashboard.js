let chartData = [{
        id: 1,
        userId: '123',
        project: 'A',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1654498730
    },
    {
        id: 2,
        userId: '123',
        project: 'A',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1654844330
    },
    {
        id: 3,
        userId: '123',
        project: 'A',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1655276330
    },
    {
        id: 4,
        userId: '123',
        project: 'A',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1655708330
    },
    {
        id: 5,
        userId: '123',
        project: 'B',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1654498730
    },
    {
        id: 6,
        userId: '123',
        project: 'B',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1654844330
    },
    {
        id: 7,
        userId: '123',
        project: 'B',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1655276330
    },
    {
        id: 8,
        userId: '123',
        project: 'B',
        ph: 8,
        tds: 150,
        temp: 30,
        date: 1655708330
    }
]

const chartData2 = [{
        group: "Dataset 2",
        date: "1654498730",
        value: 100,
    },
    {
        group: "Dataset 2",
        date: "1654844330",
        value: 120,
    },
    {
        group: "Dataset 1",
        date: "1655276330",
        value: 200,
    },
    {
        group: "Dataset 1",
        date: "1655708330",
        value: 100,
    },
    {
        group: "Dataset 1",
        date: "1655881130",
        value: 60,
    },
    {
        group: "Dataset 1",
        date: "1656140330",
        value: 85,
    },
    {
        group: "Dataset 1",
        date: "1656399530",
        value: 35,
    },
    {
        group: "Dataset 1",
        date: "1656572330",
        value: 30,
    },
    {
        group: "Dataset 1",
        date: "1656658730",
        value: 50,
    },
    {
        group: "Dataset 1",
        date: "1656831530",
        value: 70,
    },
    {
        group: "Dataset 1",
        date: "1657004330",
        value: 25,
    },
];

const chartOptions = {
    title: "Temp",
    legend: {
        enabled: true,
    },
    axes: {
        bottom: {
            mapsTo: "date",
            scaleType: "time",
        },
        left: {
            mapsTo: "value",
            scaleType: "linear",
        },
    },
    curve: "curveNatural",
    height: "17rem",
    width: "95%",
};
export {
    chartData,
    chartData2,
    chartOptions
}