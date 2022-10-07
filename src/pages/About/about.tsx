import { URLs } from "@/common/urls-utils";
import { Button, Wrapper } from "@/components";
import useRouter from "@/lib/hooks/useRouter";

const About = () => {
  const { push } = useRouter();
  const handleClick = () => push(URLs.root);

  return (
    <Wrapper>
      <h1>about</h1>
      <Button onClick={handleClick}>
        go to main
      </Button>
    </Wrapper>
  );
}

export default About;