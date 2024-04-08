import React, { useState } from "react";
import { Chart as chartjs, LinearScale } from 'chart.js/auto';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

chartjs.register(LinearScale);

export default function Home() {
    const [selectedChart, setSelectedChart] = useState('Monthly Analysis');
    const [selectedGroup, setSelectedGroup] = useState('General');
    const [selectedMonth, setSelectedMonth] = useState('January');

    const calculateCumulativeSum = (array) => {
        return array.reduce((acc, curr, index) => {
            if (index === 0) {
                return [curr];
            } else {
                return [...acc, acc[index - 1] + curr];
            }
        }, []);
    };

    const MonthlyExpensesData = {
        labels: ['January', 'Fevereiro', 'March', 'April', 'May', 'July'],
        datasets: [
            {
                label: 'Costs',
                data: [200,100,440,210,250,260,220,150],
                fill: true,
                backgroundColor: 'rgba(255,0,0,0.2)',
                borderColor: 'rgba(255,0,0,1)',
                borderWidth: 1,
            },
            {
                label: 'Total Stored',
                data: [300, 200, 340, 240, 370, 320],
                fill: true,
                backgroundColor: 'rgba(0,0,255,0.2)',
                borderColor: 'rgba(0,0,255,1)',
                borderWidth: 1,
                clip: false,
            },
        ],
    };

    const TotalStoredData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'July'],
        datasets: [
            {
                label: 'Total Stored',
                data: calculateCumulativeSum([300, 200, 340, 240, 370, 320]),
                fill: true,
                backgroundColor: 'rgba(0,255,0,0.2)',
                borderColor: 'rgba(0,255,0,1)',
                borderWidth: 1,
                clip: false,
            },
        ],
    };

    const PersonalExpensesData = {
        January: {
            Rent: 250,
            Maintenance: 300,
            Requests: 300
        },
        February: {
            Rent: 270,
            Maintenance: 320,
            Requests: 280
        },
        March: {
            Rent: 280,
            Maintenance: 330,
            Requests: 290
        },
        April: {
            Rent: 260,
            Maintenance: 310,
            Requests: 320
        },
        May: {
            Rent: 290,
            Maintenance: 340,
            Requests: 310
        },
        July: {
            Rent: 300,
            Maintenance: 350,
            Requests: 330
        }
    };

    const RequestsListData = {
        January: [
            { name: 'Replace Shower', value: 50 },
            { name: 'Fix Toilet', value: 125 },
            { name: 'Install Water Fountains', value: 75 },
        ],
        February: [
            { name: 'Repair Kitchen Sink', value: 60 },
            { name: 'Paint Living Room', value: 100 },
            { name: 'Replace Light Fixtures', value: 80 },
        ],
        March: [
            { name: 'Unclog Drains', value: 70 },
            { name: 'Repair Garage Door', value: 110 },
            { name: 'Install Ceiling Fans', value: 90 },
        ],
        April: [
            { name: 'Fix Leaky Faucet', value: 55 },
            { name: 'Replace Carpet', value: 135 },
            { name: 'Install Security System', value: 65 },
        ],
        May: [
            { name: 'Paint Exterior Walls', value: 45 },
            { name: 'Repair Roof Tiles', value: 120 },
            { name: 'Replace Windows', value: 85 },
        ],
        July: [
            { name: 'Repair Fence', value: 75 },
            { name: 'Install Solar Panels', value: 140 },
            { name: 'Upgrade HVAC System', value: 95 },
        ]
    };
    

    const CostsBreakdownData = {
        January: {
            Maintenance: 200,
            Utilities: 150,
            Services: 100
        },
        February: {
            Maintenance: 180,
            Utilities: 160,
            Services: 110
        },
        March: {
            Maintenance: 220,
            Utilities: 140,
            Services: 120
        },
        April: {
            Maintenance: 190,
            Utilities: 170,
            Services: 130
        },
        May: {
            Maintenance: 210,
            Utilities: 180,
            Services: 140
        },
        July: {
            Maintenance: 230,
            Utilities: 190,
            Services: 150
        }
    };
    
    

    const doughnutChartOptions = {
        plugins: {
            legend: {
                display: true,
                position: 'bottom',
            },
        },
    };

    const lineChartOptions = {
        scales: {
            y: {
                suggestedMin: 0,
            },
        },
    };

    const barChartOptions = {
        scales: {
            y: {
                suggestedMin: 0,
            },
        },
    };

    return (
        <>
        <div className="flex items-center justify-center">
            <div className="w-3/5"> {/* Added w-full class here */}
                <div>
                    <h1 className="text-3xl text-white">{selectedChart === 'Monthly Analysis' ? 'Monthly Analysis' : ''}</h1>
                    <h1 className="text-3xl text-white">{selectedChart === 'Total Stored' ? 'Total Stored' : ''}</h1>
                    <h1 className="text-3xl text-white">{selectedChart === 'Personal Expenses' ? 'Personal Expenses' : ''}</h1>
                    <h1 className="text-3xl text-white">{selectedChart === 'Requests List' ? 'Requests List' : ''}</h1>
                </div>
                <div className="text-white">
                    <div className="mb-4">
                        <button className="mr-2" onClick={() => setSelectedGroup('General')}>General</button>
                        <button className="mr-2" onClick={() => setSelectedGroup('Personal')}>Personal</button>
                    </div>
                    <div className="mb-4">
                        {selectedGroup === 'General' && (
                            <>
                                <button className="mr-2 bg-[#1155CC] border border-white" onClick={() => setSelectedChart('Monthly Analysis')}>Monthly Analysis</button>
                                <button className="mr-2 bg-[#1155CC] border border-white" onClick={() => setSelectedChart('Total Stored')}>Total Stored</button>
                                <button className="mr-2 bg-[#1155CC] border border-white" onClick={() => setSelectedChart('Costs Breakdown')}>Costs Breakdown</button>
                                {selectedChart === 'Costs Breakdown' && (
                                    <div className="mb-4">
                                        <label className="mr-2">Select Month:</label>
                                        <select className="text-black" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                            <option value="January">January</option>
                                            <option value="February">February</option>
                                            <option value="March">March</option>
                                            <option value="April">April</option>
                                            <option value="May">May</option>
                                            <option value="July">July</option>
                                        </select>
                                    </div>
                                )}
                            </>
                        )}
                        {selectedGroup === 'Personal' && (
                            <>
                                <button className="mr-2 bg-[#1155CC] border border-white" onClick={() => setSelectedChart('Personal Expenses')}>Personal Expenses</button>
                                <button className="mr-2 bg-[#1155CC] border border-white" onClick={() => setSelectedChart('Requests List')}>Requests List</button>
                                <div className="mb-4">
                                    <label className="mr-2">Select Month:</label>
                                    <select className="text-black" value={selectedMonth} onChange={(e) => setSelectedMonth(e.target.value)}>
                                        <option value="January">January</option>
                                        <option value="February">February</option>
                                        <option value="March">March</option>
                                        <option value="April">April</option>
                                        <option value="May">May</option>
                                        <option value="July">July</option>
                                    </select>
                                </div>
                            </>
                        )}
                    </div>
                    <div className="flex flex-cols w-full items-center justify-center"> {/* Updated alignment */}
                        {selectedChart === 'Monthly Analysis' && (
                            <Line 
                                data={MonthlyExpensesData}
                                options={lineChartOptions}
                            />
                        )}
                        {selectedChart === 'Total Stored' && (
                            <Line 
                                data={TotalStoredData}
                                options={lineChartOptions}
                            />
                        )}
                        {selectedChart === 'Personal Expenses' && (
                            <div className="mb-4 w-full">
                                <h1 className="text-3xl text-white text-center">Personal Expenses for {selectedMonth}</h1> {/* Centered text */}
                                <Bar 
                                    data={{
                                        labels: ['Rent', 'Maintenance', 'Requests'],
                                        datasets: [{
                                            label: `Personal Expenses for ${selectedMonth}`,
                                            data: Object.values(PersonalExpensesData[selectedMonth]),
                                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                                            borderWidth: 1,
                                        }]
                                    }}
                                    options={barChartOptions} 
                                />
                            </div>
                        )}
                        {selectedChart === 'Requests List' && (
                            <div className="mb-4 w-1/2">
                                <h1 className="text-3xl text-white text-center">Requests List for {selectedMonth}</h1> {/* Centered text */}
                                <table style={{ width: '100%' }}>
                                    <thead>
                                        <tr className="text-2xl flex justify-between bg-blue-700 mb-1">
                                            <th>Request</th>
                                            <th>Value</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {RequestsListData[selectedMonth].map((request, index) => (
                                            <tr key={index} className={`text-2xl flex justify-between border border-emerald-500 ${index % 2 === 0 ? 'bg-gray-400' : 'bg-[#6D9EEB]'}`}>
                                                <td>{request.name}</td>
                                                <td>{request.value}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        )}


                        {selectedGroup === 'General' && selectedChart === 'Costs Breakdown' && (
                            <div className="mt-4 w-full">
                                <h1 className="text-3xl text-white text-center">Costs for {selectedMonth}</h1> {/* Centered text */}
                                <Doughnut 
                                    data={{
                                        labels: Object.keys(CostsBreakdownData[selectedMonth]),
                                        datasets: [{
                                            label: `Costs Breakdown for ${selectedMonth}`,
                                            data: Object.values(CostsBreakdownData[selectedMonth]),
                                            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                                            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                                            borderWidth: 1,
                                        }]
                                    }} 
                                    options={doughnutChartOptions} 
                                />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}
