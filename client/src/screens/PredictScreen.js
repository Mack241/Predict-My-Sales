import styled from 'styled-components'

const PredictScreen = () => {

    const d = new Date()
    let currDate = d.getFullYear()

    return (
        <Container>
               <p>Bulk Upload Data and Predict
                   <span style={{marginLeft: '10px', marginRight: '10px' }}>
                      <i className="fas fa-chevron-right"></i>
                   </span>Prediction
                   </p>
            <Section>
              <span id="title">
                  Prediction Date
                  <span style={{ marginLeft: '8px', color: 'gray' }}>mm/dd/yyyy</span>
              </span>
              
              <span id="title">
                  Number of rows predicted:
                  <span style={{ marginLeft: '8px', color: 'gray' }}>NA</span> 
              </span>

              <span id="title">
                  Export to Excel: 
                  <button>Yes</button>
                  <button>No</button>
              </span>
            </Section>
            <Table>
                 <div id="table-div">
                   <table id="table">
                       <thead>
                         
                       </thead>
                       <tbody>
                            
                       </tbody>
                   </table>
                </div>
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

export default PredictScreen