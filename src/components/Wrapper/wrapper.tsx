import styled from 'styled-components';

const Wrapper = (props: any) => {

  return (
    <StyledWrapper>
      {props.children}
    </StyledWrapper>
  )
};
export default Wrapper;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;