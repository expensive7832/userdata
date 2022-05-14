import React, { useEffect, useState } from 'react';
import BarChart from './Barchart';

const datas = [
    [10, 30, 40, 20],
    [10, 40, 30, 20, 50, 10],
    [60, 30, 40, 20, 30],
    [0, 20, 80, 20, 20],
    [30, 30, 40, 40, 30],
]
var i = 0;

const Chart = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        changeData();
    }, data);

    const changeData = () => {
        setData(datas[i++]);
        if(i === datas.length) i = 0;
    }


    return (
        <div className="chart">
            <h2 className='chart__heading'>CHART DATA</h2>
            <BarChart width={800} height={400} data={data} />
            <button className='chart__heading--btn' onClick={changeData}>Change Data</button>
        </div>
    );
}

export default Chart;