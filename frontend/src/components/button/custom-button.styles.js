import styled from 'styled-components';


export const CustomizedButton = styled.button`
  color: rgb(62, 0, 143);
  border: none;
  border-radius: 0;
  box-shadow: 30px 60px 10px 30px rgba(0,0,0,0.3);
  text-shadow: 1px 1px 2px #222222;

  &:hover {
    transform: scale(0.98);
  }

  &:focus {
    transform: scale(0.96);
  }

  &.round {
    border-radius: 10px;
  }

  &.blue {
    background-color:  rgb(70, 181, 255);
  }

  &.purple {
    background-color:  rgb(168, 137, 255);
  }

  &.soft-green {
    background-color: rgb(110, 224, 70);
  }

  &.green {
    background-color: rgb(39, 194, 39);
  }

  &.orange {
    background-color: #e27800;
  }

  &.yellow {
    background-color: #ffd900;
  }

  &.red {
    background-color: rgb(200, 55, 10);
  }
`;

CustomizedButton.displayName = 'CustomizedButton';

export const ButtonText = styled.h5`
  margin: 10px 10px 10px 10px;
  font-size: 30px;
  line-height: 110%;

  &.small{
    @media (max-width: 570px){
      margin: 0
    }
  }
`;

ButtonText.displayName = 'ButtonText'