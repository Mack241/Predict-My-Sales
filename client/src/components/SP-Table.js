import styled from "styled-components";

const SingleAgentTable = () => {
    return (
        <Container>
            <CardBody>
                    
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
`;

export default SingleAgentTable