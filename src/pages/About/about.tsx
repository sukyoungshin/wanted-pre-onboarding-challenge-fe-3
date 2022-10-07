import { Button, Wrapper } from "@/components";

const About = () => {

  const handleClick = () => {
    console.log('go to main');
  };

  return (
    <Wrapper>
      <h1>about</h1>
      <Button onClick={handleClick}>
        Root
      </Button>
    </Wrapper>
  );
}

export default About;