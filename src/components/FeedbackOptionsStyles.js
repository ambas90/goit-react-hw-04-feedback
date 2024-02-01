import styled from 'styled-components';

export const FeedbackOptionsUi = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const FeedbackButton = styled.button`
  height: 30px;
  width: 100px;
  border-radius: 6px;
  border-width: 0px;
  background-color: #ff6200;
  color: white;
  font-size: 15px;

  &:hover {
    background-color: #ff8800;
  }

  &:active {
    background-color: #ff9900;
  }
`;
