import styled from "styled-components"
import { device } from "../../static/Resolution";
import { ListGroup } from "react-bootstrap";

const MainContiner = styled.div`
border-radius: 2px;
box-shadow: 0 2px 6px 0 rgba(0,0,0,0.1);
display: flex;
flex-direction: column;
justify-content: center;
align-items:center;
background-color: white;
width: 100%;
border-radius: 10%;
font-family: cursive;
max-width: 1000px;
margin-top: 18px;
padding: 5%;
margin-bottom: 20px;
@media ${device.tablet} {
    max-width: 600px;
}
@media ${device.tabletL} {
    max-width: 800px;
}
@media ${device.laptop} {
    max-width: 1000px;
}
@media ${device.laptopM} {
    max-width: 1200px;
}
`;

const NameTextStyle = styled.h1`
align-self: start;
color: blue;
`;

const GenderTextStyle = styled.h3`
align-self: start;
color:red;
`;

const CultureTextStyle = styled.h3`
align-self: start;
color:red;
`;

const BornTextStyle = styled.h3`
align-self: start;
color:red;
`;

const TitleTextStyle = styled.h5`
align-self: start;
color:red;
`;

const PlayedByText = styled.h1`
align-self: start;
color:blue;
`;


const RenderCharacter = ({ name, aliases, gender, culture, born, titles, playedBy, tvSeries }) => {
  return (
    <MainContiner>
      <NameTextStyle>Name : {name}</NameTextStyle>
      <PlayedByText>Played By : {playedBy}</PlayedByText>
      <GenderTextStyle>Gender : {gender}</GenderTextStyle>
      <CultureTextStyle>Culture : {culture}</CultureTextStyle>
      <BornTextStyle>Born : {born}</BornTextStyle>
      <TitleTextStyle>Title : {titles}</TitleTextStyle>
      {aliases.length && (
        <div>
          <h3>Aliases</h3>
          {aliases.map((a) => (
            <>
              <ListGroup style={{ color: "red" }}>
                <ListGroup.Item key={a}>{a}</ListGroup.Item>
              </ListGroup>
            </>
          ))}
        </div>
      )}
      {tvSeries.length && (
        <div>
          <h3 style={{ textAlign: "left" }}>TV series Apperances </h3>
          {tvSeries.map((a) => (
            <>
              <ListGroup style={{ color: "red" }}>
                <ListGroup.Item key={a}>{a}</ListGroup.Item>
              </ListGroup>
            </>
          ))}
        </div>
      )}
    </MainContiner>
  );
};

export default RenderCharacter;