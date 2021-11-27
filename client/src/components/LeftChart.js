import styled from "styled-components";
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BarChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, Bar } from 'recharts'
import { useEffect } from "react";
import { getData } from "../actions/chartAction";

const LeftChart = () => {

  const dispatch = useDispatch()

  const chartFetchData = useSelector((state) => state.chartData)
  const { chartData } = chartFetchData

  console.log(chartData)

  useEffect(() => {
    dispatch(getData())
  }, [dispatch]) 

    return (
        <div>
          <CardBody>
            <BarChart width={550} height={350} data={chartData}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis />
              <Tooltip />
              <Bar dataKey="pv" fill="#8884d8" />
              <Bar dataKey="uv" fill="#82ca9d" />
            </BarChart>
          </CardBody>
        </div>
    )
}

const Container = styled.div`
    grid-area: leftside;
    
    border: none;
    background: transparent;
    background-color: #fff;
    position: relative;
    cursor: pointer;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    padding: 20px;
    display: flex;
    flex-direction: column;
    width: 600px;
    height: 360px;
    left: 0;
    border-radius: 5px;
    transition: all .7s;
    
`;

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