import { Button, Wrapper } from "@/components";
import useRouter from "@/lib/hooks/useRouter";

const Root = () => {
  const { push } = useRouter();
  const handleClick = () => push("/about");

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

