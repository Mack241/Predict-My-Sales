import styled from "styled-components";
import { useSelector } from 'react-redux'

const SingleAgentTable = () => {

    const singleAgentData = useSelector((state) => state.singleAgent)
    const { azureLoad,  predictData } = singleAgentData

    if(predictData) {
        console.log(predictData.Quarter)
    }

    return (
        <Container>
            <CardBody>
                    { !azureLoad && predictData ? 
                        <div id="display">
                            <span id="cations">Quarter: {predictData.Quarter}</span>
                            <span id="cations">Product: {predictData.ProductCategory}</span>    
                            <span id="cations">Agent Role: {predictData.AgentRole}</span>    
                            <span id="cations">Year: {predictData.Year}</span>    
                            <span id="cations">PayeeLOS: {predictData.PayeeLOS}</span>   

                            <div style={{ marginTop: '30px', fontWeight: '600' }}>Predicted Sales: $ {predictData[ 'Predicted Sales' ]}</div>
                        </div>
                        :
                        <div>No Data</div>
                }
            </CardBody>
        </Container>
    )
}

const Container = styled.div`
   grid-area: rightside;
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
    margin-left: -270px;


    @media(max-width: 768px) {
        display: flex;
        flex-direction: row;
        padding: 10px;
    }

    #display {
        display: flex;
        flex-direction: column;
        line-height: 30px;
    }

    #captions{
        font-weight: 600;
    }
`;

export default SingleAgentTable