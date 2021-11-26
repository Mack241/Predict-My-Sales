import styled from "styled-components";
import LeftChart from "../components/LeftChart";
import RightChart from "../components/RightChart";

const GeneralAnalysisScreen = () => {
    return (
        <Container>
                <Section>
                    <p>General Analysis</p>
                </Section>
            <Layout>
                <LeftChart />
                <RightChart />
            </Layout>
        </Container>
    )
}

const Container = styled.div`
    max-width: 100%;
    max-height: 90%;;
    margin-top: 100px;
`;

const Layout = styled.div`
    display: grid;
    grid-template-areas: "leftside rightside";
    grid-template-columns: auto auto;
    column-gap: 1px;
    row-gap: 25px;
    grid-template-rows: auto;
    margin: 50px 25px 0 25px;

    @media(max-width: 768px) {
        display: flex;
        flex-direction: column;
        padding: 9 5px;
    }
`;

const Section = styled.section`
    p{
        text-align: start;
        font-weight: bold;
        color: #3d3d3d;
        margin-top: 110px;
    }
    margin-left: 30px;

    @media(max-width: 768px) {
        margin-left: 35%;
    }
`;

export default GeneralAnalysisScreen