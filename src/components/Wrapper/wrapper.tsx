import styled from 'styled-components';

interface WrapperProps {
  children: React.ReactElement;
}

const Wrapper = ({children}: WrapperProps) => {

  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
};
export default Wrapper;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;