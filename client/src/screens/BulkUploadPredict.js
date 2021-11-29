import styled  from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { deleteData, fetchData, upload } from "../actions/bulkUploadActions";
import Loader from "../components/Loader";
import { useEffect } from "react";


const BulkUploadPredict = () => {
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('Browse')
    const [uploadedFile, setUploadedFile] = useState({})

    const dispatch = useDispatch()

    const bulkData = useSelector( (state) =>  state.bulkData)
    const { loading, data, prediction, uploadStat } = bulkData

    const onChange = e => {
        setFile(e.target.files[0])
        setFileName(e.target.files[0].name)
    }

    const onSubmit =  e => {
        e.preventDefault();
        dispatch(upload(file, setUploadedFile))
    }
    if(uploadStat === true){
        dispatch(fetchData())
   }

    const deleteHandler = () => {
        dispatch(deleteData())
        setFileName('Browse')  
    }

    useEffect(() => {
        dispatch(fetchData())
    },[dispatch])

    return (
        <Container>
            <p>Bulk Upload Data and Predict</p>
            <Section>
              <span id="title">Upload File</span>
              <form onSubmit={onSubmit}>
                    <input type= "file" id="customFile" style={{ display: 'none' }} onChange={onChange}/>
                    <div id="file-label">
                        <label htmlFor="customFile" id="label">{fileName.substring(0,6)}</label>
                        <i className="fas fa-cloud-upload-alt"></i>
                    </div>
                   
                    <input type = "submit" value="Upload" id="upload"/>
              </form>
              <span id="title">
                  Upload Status: 
                  { data && data.length !== 0  ? 
                    <span style={{color: '#14f736', marginLeft: '10px'}}>Successful</span> :
                    <span style={{color: '#0a66c2', marginLeft: '10px'}}>NA</span> }</span>
              <span id="title">Upload Date: <span style={{color: 'gray', marginLeft: '10px'}}>mm/dd/yyyy</span></span>
              {
                  prediction 
              }
              <span id="title">Prediction: <span style={{color: '#e8d827', marginLeft: '10px'}}>Pending</span></span>
              <Link to="/predict_data">
                  <button>Predict Data</button>
              </Link>
            </Section>
            <Table>
                {  data && data.length !== 0 ? 
                 <Buttons>
                 <i className="fas fa-edit"></i>
                 <i className="fas fa-trash" onClick={deleteHandler}></i>
                </Buttons> :
                 <div></div> 
                 }
                {loading ? 
                 <Loader /> :
                 <div id="table-div">
                   <table id="table">
                       <thead>
                         {data && data.length !== 0 ? 
                            <tr>
                                <td id="table-head">WrittenPremium</td>
                                <td id="table-head">PolicyAnnualFee</td>
                                <td id="table-head">CommissionAmount</td>
                                <td id="table-head">PerformanceCredit</td> 
                            </tr>  
                           :
                           <tr></tr> 
                          }
                       </thead>
                       <tbody>
                            { data && data.length === 0 && uploadStat === false ?
                             <div id="no-data">No Data</div> :
                                  data.map((d) => (
                                    <tr id="table-row" key={Math.random() * (10-1) + 1}>
                                        <td id="table-data" key={Math.random() * (10-1) + 1}>
                                           {d.WrittenPremium}
                                        </td>
                                        <td id="table-data" key={Math.random() * (10-1) + 1}>
                                           {d.PolicyAnnualFee}
                                        </td>
                                        <td id="table-data" key={Math.random() * (10-1) + 1}>
                                           {d.CommissionAmount}
                                        </td>
                                        <td id="table-data" key={Math.random() * (10-1) + 1}>
                                           {d.PerformanceCredit}
                                        </td>
                                    </tr>
                              ))
                            }
                       </tbody>
                   </table>
                </div>
                }
            </Table>
        </Container>
    )
}

const Container = styled.div`
    max-width: 95%;
    margin-left: 35px;
    p {
        margin-top: 80px;
        display: flex;
        text-align: start;
        font-weight: 700;
    }
`;

const Section = styled.section`
    text-align: center;
    overflow: hidden;
    margin-top: 15px;
    margin-bottom: 8px;
    background-color: #fff;
    border-radius: 5px;
    max-width: 100%;
    transition: box-shadow 83ms;
    position: relative;
    border: none;
    box-shadow: 0 0 0 1px rgb(0 0 0 / 15%), 0 0 0 rgb(0 0 0 / 20%);
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    padding: 20px;
    text-align: left;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    height: 20px;

   #file-label {
       border: 1px solid black;
       border-radius: 8px;
       padding: 4px;
       cursor: pointer;
       display: inline-flex;
       margin-top: -8px;
       margin-left: -40px;
       height: 20px;
       justify-content: center;
       max-width: 90px;
   }

   #label{
       margin-top: -4px;
       margin-left: -10px;
       word-break: break-word;
   }

   #upload {
    cursor: pointer;
        background: transparent;
        border-radius: 10px;
        color: #0a66c2;
        background-color: #fff;
        padding: 8px;
        border: 1px solid #0a66c2;
        margin-top: -5px;
        margin-left: 10px;

        &:hover {
            background-color: #0a66c2;
            color: #fff;
            transition:  ease-in-out .2s;
        }
   }

   #label {
       cursor: pointer;
       padding: 5px;
       display: flex;
       justify-content: center;
       margin-left: 4px;
    }

    #title{
        font-weight: bold;
        color: #0a66c2;
    }

    button{
        cursor: pointer;
        background: transparent;
        border-radius: 10px;
        color: #0a66c2;
        background-color: #fff;
        padding: 8px;
        border: 1px solid #0a66c2;
        margin-top: -5px;

        &:hover {
            background-color: #0a66c2;
            color: #fff;
            transition:  ease-in-out .2s;
        }
    }

    @media(max-width: 768px){
        display: flex;
        flex-direction: row;
        height: 100px;
        text-align: start;
        
        span{
            line-height: 1.2;
        }
    }

`;

const Table = styled(Section)`
    margin-top: 50px;
    height: 350px;
    justify-content: unset;
    flex-direction: column;

    #table{
        border-collapse: separate;
        border-spacing: 0 1em;
        margin-bottom: 20px;
    }

    #no-data {
        margin-left: 250px;
        margin-top: 50px;
        font-weight: 600;
        color: #0a66c2;
    }
    
    #table-div{
        margin-top: 20px;
        max-width: 1200px;
        margin-left: 300px;
        overflow-y: scroll;
        font-weight: 500;

        tr:nth-child(even) {
            background-color: #cae3e8;
        }

    }
    
    #table-head {
        padding-left: 30px;
        overflow: hidden;
        z-index: 1;
        color: #0a66c2;
        font-weight: 600;
    }

    /* #table-row{
        border-colla
    } */

    #table-data{
        /* padding-left: 30px; */
        text-align: center;
        padding: 12px;
    }
`;

const Buttons = styled.div`
    margin-left: 1090px;

    i{
        margin-right: 20px;
        cursor: pointer;

        &:hover {
            color: #0a66c2;
        }
    }
`;

export default BulkUploadPredict