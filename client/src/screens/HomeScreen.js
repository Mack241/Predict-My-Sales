import React, {useEffect} from 'react'
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import LeftCard from '../components/LeftCard';
import RightCard from '../components/RightCard';
import LeftAction from '../components/LeftAction';
import MainAction from '../components/MainAction';
import SecondLeftAction from '../components/SecondLeftAction';
import SecondRightAction from '../components/SecondRightAction';
import { Link } from 'react-router-dom';

const HomeScreen = () => {

    const userLogin =  useSelector (async(state) => await state.userLogin)
    const { loading, error, userInfo } = userLogin

    useEffect(() => {

    },[])
    
    return  (
        <Container>
          <Layout>
            <LeftCard />
            <RightCard />
          </Layout>
          <Section>
              {loading && userInfo.Role ?  <p>{userInfo.Role}</p> : <div></div>}      
          </Section>
          <Section>
              <p>Manager Actions</p>
          </Section>
              <Actions>
                <Link to='/bulkuploadpredict' style={{ textDecoration: 'none' }}>
                   <LeftAction />
                </Link>
                 <MainAction />
              </Actions>
          <Section>
              <p>Data Analysis</p>
          </Section>
          <Actions>
            <Link to='/general_analysis' style={{ textDecoration: 'none' }}>
                 <SecondLeftAction />
            </Link>
                 <SecondRightAction />
              </Actions>
        </Container>
    )
} 

const Container = styled.div`
    max-width: 100%;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside rightside";
    grid-template-columns: auto auto;
    column-gap: 25px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 100px 25px 0 25px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 9 5px;
    }
`;

const Section = styled.section`
    margin-top: 30px;
    p{
        text-align: start;
        font-weight: bold;
        color: #3d3d3d;
    }
    margin-left: 30px;

    @media(max-width: 768px) {
        margin-left: 35%;
    }
`;

const Actions = styled.div`
    display: grid;
    grid-template-areas: "leftside main rightside";
    grid-template-columns: minmax(0, 5fr) minmax(0, 12fr) minmax(250px, 900px);;
    column-gap: 460px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 30px 25px 0 25px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 9 5px;
        /* margin: 20px auto 0 0; */
        margin-left: 110px;
    }
`;

export default HomeScreen;