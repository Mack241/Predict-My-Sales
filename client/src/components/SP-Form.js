import styled from "styled-components";

const Form = () => {
   return (
       <Container>
           <CardBody>
             <form>
                 <label htmlFor="quarter">Quarter:</label>
                 <select id="quarter">
                     <option value="Q01">Q01</option>
                     <option value="Q02">Q02</option>
                     <option value="Q03">Q03</option>
                     <option value="Q04">Q04</option>
                 </select>
                 <label htmlFor="product">Product:</label>
                 <select id="product">
                     <option value="TRADITIONAL LIFE">TRADITIONAL LIFE</option>
                     <option value="SINGLE PREMIUM ANNUITY">SINGLE PREMIUM ANNUITY</option>
                     <option value="FLXIBLE PREMIUM ANNUITY">FLXIBLE PREMIUM ANNUITY</option>
                     <option value="UNIVERSAL LIFE">UNIVERSAL LIFE</option>
                     <option value="TERM LIFE">TERM LIFE</option>
                     <option value="OTHER LIFE">OTHER LIFE</option>
                 </select>
                 <label htmlFor="role">AgentRole:</label>
                 <select id="role">
                     <option value="AGT">AGT</option>
                     <option value="BSM">BSM</option>
                     <option value="RD">RD</option>
                     <option value="UFT">UFT</option>
                     <option value="USM">USM</option>
                     <option value="USV">USV</option>
                 </select>
                 <label htmlFor="year">Year:</label>
                 <select id="year">
                     <option value="2017">2017</option>
                     <option value="2018">2018</option>
                     <option value="2019">2019</option>
                     <option value="2020">2020</option>
                     <option value="2021">2021</option>
                 </select>
                 <label htmlFor="payeelos">PayeeLOS:</label>
                 <input type="text" id="payeelos" placeholder="PayeeLOS"></input>
                 <button>Predict</button>
             </form>
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
    flex-direction: column;
    padding: 20px;
    text-align: left;
    box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -webkit-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    -moz-box-shadow: 10px 10px 5px -4px rgba(174,206,229,0.75);
    max-width: 300px;
    height: 300px;

    form{
        display: flex;
        flex-direction: column;
        max-width: 200px;
        margin: auto;
        line-height: 30px;

        button {
            margin-top: 10px;
            padding: 3px;
            border-radius: 5px;
            border: 1px solid #04cc0e;
            cursor: pointer;
            background: transparent;

            &:hover {
                background-color: #04cc0e;
                color: #fff;
                transition:  ease-in-out .2s
            }
        }
    }

    
`;

export default Form;