import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;

  > div {
    margin-bottom: 20px;
  }

  h2 {
    margin-top: 20px;
  }

  h4 {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--lightBlue);
    margin: 10px 0;
    font-weight: 600;
  }
`;
 