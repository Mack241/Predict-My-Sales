import styled from 'styled-components'

const RightCard = () => {
    return (
        <Container>
            <CardBody>
                    <div>
                        <span id="title">Data last uploaded on <span id="text">mm/dd/yyyy</span></span>
                    </div>
                    <div>
                        <span id="title">Model last trained on  <span id="text">mm/dd/yyy</span></span>
                    </div>
                    <div>
                    <button>Train Data</button>
                    <button>View Data</button>
                </div>
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
    
    /* #info {
        display: flex;
        flex-direction: colum;
    } */

    #title{
        color: #0a66c2;
        font-weight: bold;
        font-size: 13px;
        display: flex;
        margin-bottom: 12px;
    }

    #text{
        font-weight: 600;
        color: gray;
        margin-left: 10px;
        margin-top: 15px;
    }

    span{
        display: flex;
        flex-direction: column;
    }

    button {
        cursor: pointer;
        /* border: none; */
        border-style: none;
        background: transparent;
        background-color: #fff;
        margin-right: 20px;
        border-radius: 30px;
        padding: 8px;
        color: #3269a8;
        font-weight: bold;
        border-color: #3269a8;
        width: 100px;

        &:hover {
            background-color: #3269a8;
            color: #fff;
            transition-duration: .3s;
        }
    }

    @media(max-width: 768px) {
        display: flex;
        flex-direction: row;
        padding: 10px;

        div{
            display: flex;
            flex-direction: row;
            margin-right: 20px;
            word-wrap: break-word;        
        }

        button{
            width: 100px;
          
        }
    }
`;

export default RightCard;