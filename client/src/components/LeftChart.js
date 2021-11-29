import styled from "styled-components";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Bar } from 'recharts'
import { useEffect } from "react";
import { getData } from "../actions/chartAction";

const LeftChart = () => {

  const dispatch = useDispatch()

  const chartFetchData = useSelector((state) => state.chartData)
  const { chartData } = chartFetchData

  // console.log(chartData)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]) 

    return (
        <div>
          <CardBody>
              <BarChart width={550} height={350} data={chartData}>
              <CartesianGrid strokeDasharray="2 2"/>
              <XAxis />
              <YAxis  dataKey="CommissionablePremium"  />
              <Tooltip />
              <Bar dataKey="AVG(WrittenPremium)" fill="#ad4703" />
              <Bar dataKey="AVG(PerformanceCredit)" fill="#ad4703" />
              <Bar dataKey="AVG(PolicyAnnualFee)" fill="#ad4703" />
              <Bar dataKey="AVG(CommissionAmount)" fill="#ad4703" />
            </BarChart> 
          </CardBody>
        </div>
    )
}


const CardBody = styled.div`
    text-align: center;
    overflow: hidden;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    text-align: left;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    height: 360px;
    width: 550px;
    cursor: pointer;
    
`;


export default LeftChart