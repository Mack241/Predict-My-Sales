import styled from 'styled-components'

const LeftCard = () => {
    return (
        <Container>
            <CardBody>
                <div>
                    <span id="title">Designation</span>
                    <span id="text">Manager</span>
                </div>
                <div>
                    <span id="title">Territory</span>
                    <span id="text">T1</span>
                </div>
                <div>
                    <span id="title">Office</span>
                    <span id="text">Washington(WA)</span>
                </div>
            </CardBody>
        </Container>
    )
}

const Container = styled.div`
   grid-area: leftside;
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
    justify-content: space-between;
    padding: 20px;
    text-align: left;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    
    #title{
        color: #0a66c2;
        font-weight: bold;
        font-size: 13px;
        display: flex;
        margin-bottom: 5px;
    }

    #text{
        font-weight: 600;
        line-height: 2.2;
        color: #707070;
    }
`;

export default LeftCard;