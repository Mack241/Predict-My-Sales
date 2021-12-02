import { Link } from 'react-router-dom';
import styled from 'styled-components'
import Form from '../components/SP-Form';
import SingleAgentTable from '../components/SP-Table';


const SinglePredictScreen = () => {
    return (
        <Container>
            <p>Single Agent Predict</p>
            <Section>
              <span id="title">
                 Predict Date: 
              </span>
              <span id="title">Prediction: <span style={{color: '#e8d827', marginLeft: '10px'}}>Pending</span></span>
              <span id="title" >
                  Export to Excel: 
                  <button id="button">Yes</button>
                  <button id="button-no">No</button>
              </span>
            </Section>
            <Layout>
              <Form />
              <SingleAgentTable />
            </Layout>
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

    #button {
        border-radius: 5px;
        padding: 5px;
        margin-left: 10px;
        background: transparent;
        border: 1px solid #04cc0e;
        cursor: pointer;

        &:hover {
            background-color: #04cc0e;
            color: #fff;
            transition: ease-in-out .2s;
        }
    }

    #button-no {
        border-radius: 5px;
        padding: 5px;
        margin-left: 10px;
        background: transparent;
        border: 1px solid #f21000;
        cursor: pointer;

        &:hover {
            background-color: #f21000;
            color: #fff;
            transition: ease-in-out .2s;
        }
    }
    

    #title{
        font-weight: bold;
        color: #0a66c2;
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

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside rightside";
    grid-template-columns: auto auto;
    column-gap: 5px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 100px 25px 0 25px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 9 5px;
    }
`;

export default SinglePredictScreen