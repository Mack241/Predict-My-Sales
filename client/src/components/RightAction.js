import styled from "styled-components";

const RightAction = () => {
    return (
        <Container>
        <button>
            <img src="/images/pie.svg" alt="" />
            <span>Data Analysis</span>
        </button>
    </Container>
    )
}

const Container = styled.div`
    grid-area: rightside;
    
    button{
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
        width: 400px;
        height: 100px;
        left: 0;
        border-radius: 5px;
        transition: all .7s;

        &:hover {
            width: 410px;
            height: 110px
        }

        img{
            height: 60px;
            width: 80px;
        }

        span{
            font-weight: 600;
            word-wrap: break-word;
            margin-left: 190px;
            margin-top: -55px;
            margin-right: 70px;
            font-size: 20px;
            text-align: left;
        }
    }
`;

export default RightAction