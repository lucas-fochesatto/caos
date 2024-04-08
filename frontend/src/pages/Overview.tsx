import '../wallet-button.css'
import { useEffect } from "react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { SDKState } from '@metamask/sdk-react-ui';
import OverviewTable from '../components/OverviewTable';
import { Chart as chartjs, LinearScale } from 'chart.js/auto';
import { Bar, Line, Doughnut } from 'react-chartjs-2';


export default function Home({account} : {account:SDKState}) {
    const navigate = useNavigate()
    
    // Check if user is logged in:
    useEffect(() => {
        if(!account.connected) {
            navigate('/login')
        }
    }, [account.connected])
    
    const [selectedMonth, setSelectedMonth] = useState('January');

    {var revenue = 1000;
     var btms = 50;
     var elevator = 7;
     var sauna = 100;
     var apt = 105
     var status = true;
     var nmt = 120;
    }

    const PersonalExpensesData = {
        January: {
            Rent: 250,
            Maintenance: 300,
            Total: 550,
        },
        February: {
            Rent: 270,
            Maintenance: 320,
            Total: 590,
        },
        March: {
            Rent: 280,
            Maintenance: 330,
            Total: 610,
        },
        April: {
            Rent: 260,
            Maintenance: 310,
            Total: 570,
        },
        May: {
            Rent: 290,
            Maintenance: 340,
            Total: 630,
        },
        July: {
            Rent: 300,
            Maintenance: 350,
            Total: 650,
        }
    };
    const cascadeBarChartOptions = {
        resposive: true,
        scales: {
            x: {
                stacked: true,
            },
            y: {
                stacked: true,
                suggestedMin: 0,
            },
        },
    };

    
    return (
        <>
            <div className="p-12 items-left flex justify-left flex-row gap-8">
                <div>      
                    <OverviewTable/>
                </div>
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

                
                <div className="mb-4 w-full">
                <h1 className="text-3xl text-white text-center">Personal Expenses for {selectedMonth}</h1> {/* Centered text */}
                    <Bar 
                        data={{
                            labels: ['Rent', 'Maintenance', 'Total'],
                            datasets: [
                                {
                                    label: 'Original Rent',
                                    data: [0, PersonalExpensesData[selectedMonth].Rent, 0], // Original Rent value and 0 for Maintenance
                                    backgroundColor: 'rgba(255, 99, 132, 0)',
                                    borderColor: 'rgba(255, 99, 132, 0)',
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Maintenance',
                                    data: [0, PersonalExpensesData[selectedMonth].Maintenance, 0], // 0 for Original Rent and Maintenance value
                                    backgroundColor: 'rgba(54, 162, 235, 0.2)',
                                    borderColor: 'rgba(54, 162, 235, 1)',
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Total',
                                    data: [0, 0, PersonalExpensesData[selectedMonth].Total], // Original Rent value and 0 for Maintenance
                                    backgroundColor: 'rgba(89, 255, 132, 0.2)',
                                    borderColor: 'rgba(89, 255, 132, 1)',
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Additional Rent Copy 1',
                                    data: [PersonalExpensesData[selectedMonth].Rent, 0, 0], // First copy of Rent value and 0 for Maintenance
                                    backgroundColor: 'rgba(255, 99, 132, 0.2)', // Adjust transparency or color as needed
                                    borderColor: 'rgba(255, 99, 132, 1)',
                                    borderWidth: 1,
                                },
                                {
                                    label: 'Additional Rent Copy 2',
                                    data: [PersonalExpensesData[selectedMonth].Rent, 0, 0], // Second copy of Rent value and 0 for Maintenance
                                    backgroundColor: 'rgba(255, 99, 132, 0)', // Adjust transparency or color as needed
                                    borderColor: 'rgba(255, 99, 132, 0)',
                                    borderWidth: 1,
                                }
                            ]
                        }}
                        options={cascadeBarChartOptions} 
                    />
                </div>  
            </div>
        </>
    )
}