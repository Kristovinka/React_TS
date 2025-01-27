import React, { useState } from "react";
import { MainFeedback, Button_wrapper, Button_reset, Info } from "./styles";
import Button from "../Button/Button";

function Feedback() {
  const [likes, setLikes] = useState<number>(0);
  const [dislikes, setDislikes] = useState<number>(0);

  const handleLike = (): void => {
    setLikes((countLike) => countLike + 1);
  };

  const handleDislike = (): void => {
    setDislikes((countDislike) => countDislike + 1);
  };

  const handleReset = (): void => {
    setLikes(0);
    setDislikes(0);
  };

  return (
    <MainFeedback>
      <Button_wrapper>
        <Button name="Like" type="button" onClick={handleLike}></Button>{" "}
        <div className="info">{likes}</div>
      </Button_wrapper>
      <Button_wrapper>
        <Button name="Dislike" type="button" onClick={handleDislike}></Button>{" "}
        <Info>{dislikes}</Info>
      </Button_wrapper>
      <Button_reset>
        <Button
          name="Reset Results"
          type="button"
          onClick={handleReset}
        ></Button>
      </Button_reset>
    </MainFeedback>
  );
}

export default Feedback;
