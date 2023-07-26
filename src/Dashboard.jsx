import React, { useState } from "react";
import "./Dashboard.css";
import DataTable from "react-data-table-component";
// import { event } from "jquery";
import { Bar, Pie} from "react-chartjs-2";
import "chart.js/auto";
import Spinner from 'react-bootstrap/Spinner';

export const Dashboard = () => {
    const ExpandedComponent = ({ data }) => (
        <pre>{JSON.stringify(data, null, 2)}</pre>
    )
    const columns = [
        {
            name: "Session",
            selector: (row) => row.session,
            sortable: true,
        },
        {
            name: "Total KPI sets",
            selector: (row) => row.sets,
        },
        {
            name: "Total EOPs Added",
            selector: (row) => row.added,
        },
        {
            name: "One on One Sessions",
            selector: (row) => row.sessions,
        },
        {
            name: "Appraisal Status",
            selector: 'appraisal',
            cell: row => row.appraisal === 'on-going'
            ? <div><Spinner animation="border" size="sm" /> on-going</div>
            : row.appraisal,
          sortable: true,
        },
    ]


    const customStyles = {

        headRow:{
            style:{
                fontSize: '17px',
                fontWeight: '600',
                color: "#515151"

            }
        },
        cells: {
            style: {
                    fontSize: '14px',
                    fontWeight: '600',
                    color: "#515151"
            }
        }
    }

    const data = [
        {
            session: "Performance 2023 Session",
            sets: "15",
            added: "10",
            sessions: "9",
            appraisal: <button className="btn-sm" style={{backgroundColor: '#029db8', color:'white'}}>
                 <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>Ongoing
            </button>
        },
        {
            session: "Performance 2022 Session",
            sets: "15",
            added: "10",
            sessions: "9",
            appraisal:  <button className="btn-sm" style={{backgroundColor: '#029db8', color:'white'}}>
            <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>Ongoing
       </button>
        },
        {
            session: "Staffs strategies",
            sets: "15",
            added: "10",
            sessions: "9",
            appraisal:  <button className="btn-sm" style={{backgroundColor: '#029db8', color:'white'}}>
            <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>Ongoing
       </button>
        },
        {
            session: "Investment 2022 Session",
            sets: "15",
            added: "10",
            sessions: "9",
            appraisal:  <button className="btn-sm" style={{backgroundColor: '#029db8', color:'white'}}>
            <span class="spinner-border spinner-border-sm text-white" role="status" aria-hidden="true"></span>Ongoing
       </button> 
        },

    ]

    const conditionalRowStyles = [
        {
            when: (row) => (row.added = 10),
            style: {
                backgroundColor: "#e7eff6",
                color: "#100d1e",
                "&:hover": {
                    backgroundColor: "green",
                    cursor: "pointer",
                },
            },
        },
    ]


    const chartData =({
        labels: ['Lilian Ivortim', 'Aisha Suleiman', 'Bashir Nom Gadzama', 'Hassan Ali'],
        datasets: [
            {
                label: 'Statistics of KPIs',
                data: [5, 0, 6, 4],
                backgroundColor: ['#666666','','#893d66','#190073'],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },

        ]
    });
    
    const chartOptions =({
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
    });



    const PieData =({
        labels: ['GMDs office', 'Investments', 'Strategy', 'Rei', 'FIC', 'GERC', 'IT','Audit','F&T','Compliance', 'HR','GCS','Legal','Admin','Marketing', 'Subsidiary'],
        datasets: [
            {
                label: 'Organization Staff strength',
                data: [0, 0, 0, 0,0,5,5,0,0,0,0,0,0,0,0,0],
                backgroundColor: ['#207214','#5a368d','#6a6a69','#676767','#a22c7a','#147316','#5c0102','#35979c','#027352','#5f5f5f','#5f5e5e','#036489','#5c5c5c','#018366','#8e5111','#088977'],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
              },

        ]
    });


    const [filteredData, setFilteredData] = useState(data)

    const handlefilter = (event) => {
        const searchValue = event.target.value.toLowerCase()
        const filteredTableData = data.filter((row) => {
            return row.session.toLowerCase().includes(searchValue)
        })
        setFilteredData(filteredTableData)
    }

    return (
        <div className="dashboard-root">
            <div className="sidebar">
                <div className="box d-flex flex-column">
                    <div className="homeboard d-flex justify-content-center align-items-center rounded-top">
                        <i class="fa-solid fa-house"></i>
                        <p className="fs-6">Home | Dashboard</p>
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <div className="mt-2 mb-2 homeboard d-flex justify-content-center align-items-center rounded mx-2">
                        <i class="fa-solid fa-minus"></i>
                        <p className="fs-6">Custom Dashboard </p>
                    </div>
                </div>

                <div className="mt-3 d-flex align-items-center justify-content-between mx-2 ">
                    <i class="fa-regular fa-square-full"></i>
                    <p className="fw-semibold mt-2">Organizational Profile</p>
                    <p className="fw-bold fs-4 mt-1">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mx-2">
                    <i class="fa-regular fa-square-full"></i>
                    <p className="fw-semibold mt-2">Employee Profile</p>
                    <p className="fw-bold fs-4 mt-1">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mx-2">
                    <i class="fa-regular fa-square-full"></i>
                    <p className="fw-semibold mt-2">Sessions</p>
                    <p className="fw-bold fs-4 mt-1">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mx-2">
                    <i class="fa-regular fa-square-full"></i>
                    <p className="fw-semibold mt-2">Goals (KPIs)</p>
                    <p className="fw-bold fs-4 mt-1">+</p>
                </div>
                <div className="d-flex align-items-center justify-content-between mx-2">
                    <i class="fa-regular fa-square-full"></i>
                    <p className="fw-semibold mt-2">Report Center</p>
                    <p className="fw-bold fs-4 mt-1">+</p>
                </div>
            </div>
            <div className="main-content">
                <h4 className="mt-3 fw-semibold">Dashboard</h4>

                <div className="mt-3 d-flex align-items-center justify-content-between">
                    <div className="border-color shadow w-75 d-flex align-items-center rounded-3 mb-3">
                        <p className="px-3 py-3 m-0">Employees</p>
                        <div className="icon-box rounded mx-3">
                            <i
                                className="fa-solid fa-user-group fa-lg mt-3 ms-4"
                                style={{ color: "#06e9d2 " }}
                            ></i>
                            <p className="text-white fs-4 mt-2">4</p>
                        </div>
                    </div>

                    <div className="border-color shadow w-75 d-flex align-items-center rounded-3 mb-3 mx-4">
                        <p className="px-3 py-3 m-0">Jobs</p>
                        <div className="icon-box rounded mx-3">
                            <i
                                className="fa-solid fa-briefcase fa-lg mt-3"
                                style={{ color: "#ff4750" }}
                            ></i>
                            <p className="text-white fs-4 mt-2">5</p>
                        </div>
                    </div>

                    <div className="border-color shadow w-75 d-flex align-items-center rounded-3 mb-3">
                        <p className="px-3 py-3 m-0">Department</p>
                        <div className="icon-box rounded mx-3">
                            <i className="fa-solid fa-landmark fa-lg text-white mt-3"></i>
                            <p className="text-white fs-4 mt-2">16</p>
                        </div>
                    </div>

                    <div className="border-color shadow w-75 d-flex align-items-center rounded-3 mb-3 mx-4">
                        <p className="px-3 py-3 m-0">Units</p>
                        <div className="icon-box rounded mx-3">
                            <i
                                className="fa-solid fa-bars-progress fa-lg mt-3"
                                style={{ color: "#13c22f" }}
                            ></i>
                            <p className="text-white fs-4 mt-2">8</p>
                        </div>
                    </div>
                </div>

                <div className="table-format mt-4 ms-3 me-3">
                    <div className="format d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center ms-2">
                            <p className="m-0 pr-2">Show</p>
                            <div class="input-group input-group-sm d-inline-flex size mx-2">
                                <input
                                    type="number"
                                    class="form-control size"
                                    value="10"
                                    aria-label="Show entries"
                                />
                            </div>
                            <p class="m-0 ">entries</p>
                        </div>

                        <div className="search-bar me-5">
                            <form class="d-flex" role="search">
                                <p class="mt-3 pr-2 me-2">Search:</p>
                                <input
                                    class="form-control me-2 align-self-center"
                                    onChange={handlefilter}
                                    type="search"
                                    placeholder=""
                                    aria-label="Search"
                                />
                            </form>
                        </div>
                    </div>

                    <div className="border-bottom mt-2"></div>

                    <DataTable
                        columns={columns}
                        data={filteredData}
                        pagination
                        conditionalRowStyles={conditionalRowStyles}
                        customStyles={customStyles}
                        expandableRows
                        expandableRowsComponent={ExpandedComponent}
                    />
                    
                    <div className="d-flex align-items-center justify-content-between">
                    <div className="border shadow d-flex align-items-center rounded-3 mb-3" style={{width: 600}}>

                    <Bar data={chartData} options={chartOptions} />
                    </div>

                    <div className="border shadow d-flex align-items-center rounded-3" style={{width: 500}}>
                        <Pie data={PieData} options={chartOptions} />
                    </div>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
