import styled from 'styled-components';
import slackLogo from '../assets/slack-logo.avif';
// Styled Components

const CardBody = styled.div`
    width: 200px;
    height: 300px;
    border: solid 1px black;
`;

const CardImage = styled.img`
    width: 200px;
`;

const CardTitle = styled.h3`
    font-family: 'arial';
    color: purple;
`;

const CardText = styled.p`
    padding: 10px;
`;

const CardButton = styled.button`
    padding: 5px;
    color: white;
    border: none;
    border-radius: 5%;
    background: blue;
`;



function Card() {
    return (
        <CardBody>
            <CardImage src={slackLogo} atl='slack logo'/>
            <CardTitle>Card Component</CardTitle>
             <CardText>Learn more about Styled Components</CardText>
             <CardButton>Click Here</CardButton>
        </CardBody>
    );
}

export default Card;