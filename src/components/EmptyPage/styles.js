import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
  margin-top:100px;
  background: url('/assets/home-teacher.svg') no-repeat center;
  background-size: cover;
  height: 60vh;
  width: 50vh;
`;

export const TextIntro = styled.div`
  margin-top: 100px;
  max-width: 500px;
  font-weight: bold;
  color: #999797;
  font-family: sans-serif;

  h1 {
  font-size: 36px;
    
  }

  p {
  font-size: 48px;

  }
`;