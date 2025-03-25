import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #86ba8a;
  border-radius: 8px;
  color: #3d3d3d;
  padding: 15px 50px;
  font-size: 24pt;
  width: 300px;
`;

const Button = ({ buttonText }) => {
  return <StyledButton>{buttonText}</StyledButton>;
};

export default Button;



// Define your styled components outside of the functional component unless you absolutely need them to be dynamic (e.g., styled based on props passed to the component).