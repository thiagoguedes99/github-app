import styled from 'styled-components';

// export const Header = styled.header`
//   /* font-size: 1.5em; */
//   /* text-align: center; */
//   color: palevioletred;
// `;

export const Header = styled.header.attrs(props => ({
  // className: 'btn btn-primary'
  // className: `${props => props.className || 'nada'}`
  // className: props => props.className || 'nada'
  className: props.className ? props.className : 'nada'
}))`
  /* font-size: 1.5em; */
  /* text-align: center; */
  color: palevioletred;

  /* color: ${props => props.primary ? "white" : "palevioletred"}; */
`;
