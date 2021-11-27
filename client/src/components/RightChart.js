import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { getData } from '../actions/chartAction'
import { PieChart, Pie, Tooltip } from 'recharts'

const RightChart = () => {
    const dispatch = useDispatch()

    const chartFetchData = useSelector((state) => state.chartData)
    const { chartData } = chartFetchData

    let values = []

        if(chartData) {
            chartData.map((d) => {
               values.push({"name": 'CommissionAmount', "value": d['AVG(CommissionAmount)']})
               values.push({"name": 'WrittenPremium', "value": d['AVG(WrittenPremium)']})
               values.push({"name": 'PolicyAnnualFee', "value": d['AVG(PolicyAnnualFee)']})
               values.push({"name": 'PerformanceCredit', "value": d['AVG(PerformanceCredit)']})
            })
        }
       
    useEffect(() => {
        dispatch(getData())
    }, [dispatch]) 

    return (
        <Container>
            <CardBody>
               <PieChart width={550} height={300}>
                  <Pie 
                    dataKey="value"
                    isAnimationActive={true}
                    data={values}
                    cx="50%"
                    cy="50%"
                    outerRadius={110}
                    fill="#8884d8"
                    label
                  />
                  <Tooltip />
               </PieChart> 
               {/* {/* {Object.values(chartData)} */}
            </CardBody>
        </Container>
    )
}

const Container = styled.div`
   grid-area: rightside;
   margin-left: 50px;
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

export default RightChart;