import React from 'react';

const Section = styled.div`
  height: 100vh;
  scroll-snap-align:center;
  display:flex;
  justify-content:center;
  position:relative;
  color:black;
  font-size:14px;
  font-weight:300;
`;

const Container = styled.div`
width:1400px;
display:flex;
justify-content:space-between;

@media only screen and (max-width: 768px) {
  width: 100%;
  flex-direction: column;
}
`

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (max-width: 768px) {
    font-size: 24px;
    color: white;
    -webkit-text-stroke: 0px;
  }
  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const Experience = () => {
    return (
        <Section>
          <Container>
            
             <List>
                  <ListItem>
                  </ListItem>
             
              </List>
    
             
          </Container>
        </Section>
      );
}


export default Experience;