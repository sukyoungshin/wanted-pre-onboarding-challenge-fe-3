import styled from 'styled-components';

const Wrapper = ({ children }: React.PropsWithChildren) => {

  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
};
export default Wrapper;

const StyledWrapper = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;