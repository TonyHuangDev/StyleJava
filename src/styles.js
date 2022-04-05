import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 500px;
`;

export const Head = styled.header`
    width: 100%;
    height: 70px;
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: center;

a{
    font-size: 45px;
    color: ${props => `#${props.cor}`};
}

`;

/*
.container{
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
}

.header{
  width: 100%;
  height: 70px;
  background-color: brown;
  justify-content: center;
  align-items: center;
  display: flex;
}

.titulo {
  font-size: 35px;
  color: #FFF;
}
*/