import styled  from "styled-components";
import { Link } from "react-router-dom";
import React, { useState } from 'react';
import axios from 'axios'

const BulkUploadPredict = () => {
    const [file, setFile] = useState('')
    const [fileName, setFileName] = useState('Browse')
    const [uploadedFile, setUploadedFile] = useState({})

const onChange = e => {
    setFile(e.target.files[0])
    setFileName(e.target.files[0].name)
}

const onSubmit = async e => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('file', file)

    try{
        const res = await axios.post('/file', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })

        const { fileName, filePath } = res.data

        setUploadedFile({ fileName, filePath })
    } catch(err) {
        if(err.response.status === 500) {
            console.log('Problem with server', err)
        }else {
            console.log(err.response.data.msg)
        }
    }
}

    return (
        <Container>
            <p>Bulk Upload Data and Predict</p>
            <Section>
              <span id="title">Upload File</span>
              <form onSubmit={onSubmit}>
                    <input type= "file" id="customFile" style={{ display: 'none' }} onChange={onChange}/>
                    <div id="file-label">
                        <label htmlFor="customFile" id="label">{fileName.substring(0,6)}</label>
                        <i className="fa fa-upload" ></i>
                    </div>
                   
                    <input type = "submit" value="Upload" id="upload"/>
              </form>
              <span id="title">Upload Status <span style={{color: '#14f736', marginLeft: '10px'}}>Successful</span></span>
              <span id="title">Upload Date <span style={{color: 'gray', marginLeft: '10px'}}>mm/dd/yyyy</span></span>
              <span id="title">Prediction <span style={{color: '#e8d827', marginLeft: '10px'}}>Pending</span></span>
              <Link to="">
                  <button>Predict Data</button>
              </Link>
            </Section>
            <Table></Table>
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
`;

export default BulkUploadPredict