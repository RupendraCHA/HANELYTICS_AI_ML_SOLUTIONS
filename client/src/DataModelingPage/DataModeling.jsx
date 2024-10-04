import React, { useEffect, useState } from 'react'
import "./DataModeling.css"
import { FaRegCircleUser } from "react-icons/fa6";
import DatasetItem from "./../DatasetsItem/DatasetsItem.jsx"
import BarChart from "./../BarChartPage/BarChart.jsx"
import PieChart from "./../PieChartPage/PieChart.jsx"
import Table from "./../DataTable/Table.jsx"
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import { Dropdown } from "antd"
import { equipmentData } from './EquipmentData.jsx'
import Navbar from '../Navbar/Navbar.jsx';
import { toast } from 'react-toastify';


const DataModeling = () => {

    const inventory_model_datasets = [
        'Order History Data',
        'Order History with Demand Levels',
        'Product Information Data',
        'Inventory Levels Data',
        'Past Demand Information',
        'Stock Movement in Warehouse',
        'Warehouses Data',
        'Daily Weather Forecast',
        'Historical Weather Forecast'
    ]

    const revenue_model_datasets = ['Product Sales Data', 'Product Suppliers', 'Shipping Data', 'Manufacturing Costs Data']

    const equipment_model_datasets = ['Sensor Data', 'Failure Data', 'Maintenance Data', 'Operational Data', 'Test Data of Equipment Failure']



    const datasetsNames = ["Order History", "Product Information", "Warehouse Information", "Past Demand", "Stock Movement", "Weather Data"]
    const [data, setData] = useState([])
    const [hideShow, setHideShow] = useState(true)
    const [inventoryData, setInventoryData] = useState(true)
    const [revenueData, setRevenueData] = useState(true)
    const [equipmentData1, setEquipmentData] = useState(true)
    const navigate = useNavigate()
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


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
        // alert("Do you want to Log out!!")
        axios.get("http://localhost:3001/logout")
            .then(result => {
                console.log(result.data)
                if (result.data === "Logout Successful!") {
                    toast.success(result.data)
                    navigate("/login")
                }
            })
    }

    const getInventoryDataFromMongoDB = async () => {
        await axios.get("http://localhost:3001/getInventoryData")
            .then(result => {
                const Array = result.data
                // const largeArray = Array.from({ length: 634 }, (_, i) => i);
                setData(Array)
                console.log(Array)
                setInventoryData(false)
                setRevenueData(true)
                setEquipmentData(true)
                setHideShow(false)
                handleTabClick("tab1")
            }).catch(err => console.log(err))
    }

    const getRevenueDataFromMongoDB = async () => {
        await axios.get("http://localhost:3001/getRevenueData")
            .then(result => {
                const Array = result.data
                // const largeArray = Array.from({ length: 634 }, (_, i) => i);
                setData(Array)
                console.log(Array)
                setRevenueData(false)
                setHideShow(false)
                setInventoryData(true)
                setEquipmentData(true)
                handleTabClick("tab1")
            }).catch(err => console.log(err))
    }

    const getEquipmentDataFromMongoDB = () => {
        setInventoryData(true)
        setRevenueData(true)
        setHideShow(false)
        setEquipmentData(false)
        handleTabClick("tab1")
        setData(equipmentData)
    }

    const handleResultsData = () => {
        setInventoryData(true)
        setRevenueData(true)
        setHideShow(true)
        setEquipmentData(true)
    }

    const items = [
        {
            key: 1,
            label: (
                <a id='modeling-drop-option1' href="/home">
                    Go to Home
                </a>
            )
        },

        {
            key: 2,
            label: (
                <a id='inventory' onClick={getInventoryDataFromMongoDB}>
                    Inventory Prediction
                </a>
            )
        },
        {
            key: 3,
            label: (
                <a id='revenue' onClick={getRevenueDataFromMongoDB}>
                    Revenue Demand/Sensing
                </a>
            )
        },
        {
            key: 4,
            label: (
                <a id='e-failure' onClick={getEquipmentDataFromMongoDB}>
                    Equipment Failure
                </a>
            )
        },
        {
            key: 5,
            label: (
                <a id='modeling-drop-option2' onClick={handleLogout}>
                    Logout
                </a>
            )
        }
    ]

    return (<>
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
                    <h1 className='use-case-heading' onClick={handleResultsData}>Use Cases</h1>
                    <div className='data-model-types'>
                        <h2 className={inventoryData === true ? 'model-name' : "active"} onClick={getInventoryDataFromMongoDB}>
                            Predicting Inventory Reorder Point & Safety Stock
                        </h2>
                        <h2 className={revenueData === true ? 'model-name' : "active"} onClick={getRevenueDataFromMongoDB}>
                            Revenue/Demand Sensing
                        </h2>
                        <h2 className={equipmentData1 === true ? 'model-name' : "active"} onClick={getEquipmentDataFromMongoDB}>
                            Equipment Failure Prediction
                        </h2>
                    </div>
                </section>
                {/* <ul className='datasets-section'>
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
                </ul>  */}
                {
                    hideShow && (
                        <div className='charts-section select-model-name empty-bg-image'>
                            <h2 className='select-text'>Select the Use Case to view the results</h2>
                        </div>
                    )
                }
                {!inventoryData && (

                    <div className='charts-section'>
                        {/* Tab buttons */}
                        <div className="tab-buttons">
                            <button
                                className={`tab ${activeTab === 'tab1' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Datasets
                            </button>
                            <button
                                className={`tab ${activeTab === 'tab2' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Data Model Results
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className="tab-content">
                            {activeTab === 'tab1' && (
                                <div id="tab1" className="content active">
                                    {inventory_model_datasets.map((eachDataset, index) => {
                                        return (
                                            <li key={index} className='model-dataset'>{eachDataset}</li>
                                        )
                                    })}
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div id="tab2" className="content">
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
                                        <Table data={data} inventoryData={inventoryData} revenueData={revenueData} equipmentData1={equipmentData1} />
                                    </div>
                                    <div className="button">
                                        <button className='text-right btn btn-primary' onClick={handleResultsData}>
                                            Back
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>
                )}
                {!revenueData && (
                    <div className='charts-section'>
                        {/* Tab buttons */}
                        <div className="tab-buttons">
                            <button
                                className={`tab ${activeTab === 'tab1' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Datasets
                            </button>
                            <button
                                className={`tab ${activeTab === 'tab2' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Data Model Results
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className="tab-content">
                            {activeTab === 'tab1' && (
                                <div id="tab1" className="content active">
                                    {revenue_model_datasets.map((eachDataset, index) => {
                                        return (
                                            <li key={index} className='model-dataset'>{eachDataset}</li>
                                        )
                                    })}
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div id="tab2" className="content">
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
                                        <Table data={data} inventoryData={inventoryData} revenueData={revenueData} equipmentData1={equipmentData1} />
                                    </div>
                                    <div className="button">
                                        <button className='text-right btn btn-primary' onClick={handleResultsData}>
                                            Back
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                )}
                {!equipmentData1 && (
                    <div className='charts-section'>
                        {/* Tab buttons */}
                        <div className="tab-buttons">
                            <button
                                className={`tab ${activeTab === 'tab1' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab1')}
                            >
                                Datasets
                            </button>
                            <button
                                className={`tab ${activeTab === 'tab2' ? 'activeTab' : ''}`}
                                onClick={() => handleTabClick('tab2')}
                            >
                                Data Model Results
                            </button>
                        </div>

                        {/* Tab content */}
                        <div className="tab-content">
                            {activeTab === 'tab1' && (
                                <div id="tab1" className="content active">
                                    {equipment_model_datasets.map((eachDataset, index) => {
                                        return (
                                            <li key={index} className='model-dataset'>{eachDataset}</li>
                                        )
                                    })}
                                </div>
                            )}
                            {activeTab === 'tab2' && (
                                <div id="tab2" className="content">
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
                                        <Table data={data} inventoryData={inventoryData} revenueData={revenueData} equipmentData1={equipmentData1} />
                                    </div>
                                    <div className="button">
                                        <button className='text-right btn btn-primary' onClick={handleResultsData}>
                                            Back
                                        </button>
                                    </div>
                                </div>
                            )}

                        </div>
                    </div>

                )}
            </div>
        </div>
    </>
    );
}

export default DataModeling