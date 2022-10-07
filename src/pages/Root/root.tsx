import { Button, Wrapper } from "@/components";

const Root = () => {

  const handleClick = () => {
    console.log('go to about');
  };

  return (
    <Wrapper>
      <h1>root</h1>
      <Button onClick={handleClick}>
        about
      </Button>
    </Wrapper>
  );
}

export default Root;

