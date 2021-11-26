import styled from "styled-components";

const GeneralAnalysisScreen = () => {
    return (
        <Container>
            <Layout>
                <Section>
                    <p>General Analysis</p>
                </Section>
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

export default GeneralAnalysisScreen