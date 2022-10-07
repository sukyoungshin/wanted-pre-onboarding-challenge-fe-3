import { Button, Wrapper } from "@/components";
import useRouter from "@/lib/hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  const handleClick = () => push("/");

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