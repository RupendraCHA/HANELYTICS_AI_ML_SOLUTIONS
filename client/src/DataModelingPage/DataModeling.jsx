import React, { useEffect } from 'react'
import "./DataModeling.css"
import { FaRegCircleUser } from "react-icons/fa6";
import DatasetItem from "./../DatasetsItem/DatasetsItem.jsx"
import BarChart from "./../BarChartPage/BarChart.jsx"
import PieChart from "./../PieChartPage/PieChart.jsx"
import Table from "./../DataTable/Table.jsx"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from "antd"

const DataModeling = () => {

    const datasetsNames = ["Order History", "Product Information", "Warehouse Information", "Past Demand", "Stock Movement", "Weather Data"]

    const navigate = useNavigate()

    axios.defaults.withCredentials = true;

    useEffect(() => {
        axios.get("http://localhost:3001/home")
            .then(result => {
                console.log(result)
                if (result.data !== "Successful") {
                    navigate("/login")
                } else {
                    navigate("/dataModeling")
                }

            })
            .catch(err => console.log(err))
    }, [])

    const handleLogout = () => {
        alert("Do you want to Log out!!")
        axios.get("http://localhost:3001/logout")
            .then(result => {
                console.log(result.data)
                if (result.data === "Logged Out") {
                    navigate("/login")
                }
            })
    }
    const items = [
        {
            key: 1,
            label: (
                <a id='modeling-drop-option1' href="/home">
                    Home
                </a>
            )
        },
        {
            key: 2,
            label: (
                <a id='modeling-drop-option2' onClick={handleLogout}>
                    Logout
                </a>
            )
        }
    ]

    return (
        <div className='data-modeling-container'>
            <header className='container website-header'>
                <div className='header-container'>
                    <Link to="/home" className='website-heading'>
                        <h1 >
                            HANELYTICS
                        </h1>
                    </Link>
                    <Dropdown menu={{ items }} trigger={['hover']}>
                        <FaRegCircleUser className='user-icon' />
                    </Dropdown>
                </div>
            </header>
            <div className='container data-models-section-container'>
                <section className='workflows-section'>
                    <h1 className='use-case-heading'>Use Cases</h1>
                    <div className='data-model-types'>
                        <h2 className='model-name'>
                            Predicting Inventory Reorder Point & Safety Stock
                        </h2>
                        <h2 className='model-name'>
                            Revenue/Demand Sensing
                        </h2>
                        <h2 className='model-name'>
                            Equipment Failure Prediction
                        </h2>
                    </div>
                </section>
                <ul className='datasets-section'>
                    <div style={{ marginTop: "20px" }}>
                        {datasetsNames.map((dataset) => {
                            return <DatasetItem dataset={dataset} />
                        })}
                    </div>
                    <div>
                        <button className='compute-results'>
                            Compute Results
                        </button>
                    </div>
                </ul>
                <div className='charts-section'>
                    <div className='charts-container'>
                        <div className='pie-chart'>
                            <PieChart />
                        </div>
                        <div className='bar-chart'>
                            <BarChart />
                        </div>
                    </div>
                    <h1 className='results-heading'>Results:</h1>
                    <div className='table-container'>

                        <Table />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default DataModeling
