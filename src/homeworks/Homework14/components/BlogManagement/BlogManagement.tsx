import Button from "components/Button/Button";
import Input from "components/Input/Input";
import { BlogManagementWrapper, ResultBlock } from "./styles";
import { ChangeEvent, createContext, useState } from "react";
import Card from "../Card/Card";

export const MainCardContext = createContext<string | undefined>(undefined);

function BlogManagement() {
  const [postValue, setPost] = useState<string>("");
  const [sentPost, setSendPost] = useState<string | undefined>(undefined);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPost(event.target.value);
  };

  const onClick = () => {
    setSendPost(postValue);
  };

  return (
    <MainCardContext.Provider value={sentPost}>
      <BlogManagementWrapper>
        <Input
          name="post"
          placeholder="Your Post"
          label="Post"
          value={postValue}
          onChange={onChange}
        ></Input>
        <Button name="Post" type="submit" onClick={onClick}></Button>
        {sentPost && <ResultBlock>{sentPost}</ResultBlock>}
        <Card />
      </BlogManagementWrapper>
    </MainCardContext.Provider>
  );
}
export default BlogManagement;
