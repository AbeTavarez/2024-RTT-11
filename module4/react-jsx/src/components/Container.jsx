import styled from 'styled-components';


export const Container = styled.div`
    width: 80%;
    margin: auto;
    text-align: center;
`;

export const Title = styled.h1`
    font-size: 3em;
    font-family: monospace;
`;



function MainContainer() {
    return (
        <Container>
            <Title>Hello Styled Components</Title>
        </Container>
    )
}


export default MainContainer;