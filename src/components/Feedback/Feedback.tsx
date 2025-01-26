import React, { useState } from "react";
import "./styles.css";
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
    <div className="main-Feedback">
      <div className="button-wrapper">
        <Button name="Like" type="button" onClick={handleLike}></Button>{" "}
        <div className="info">{likes}</div>
      </div>
      <div className="button-wrapper">
        <Button name="Dislike" type="button" onClick={handleDislike}></Button>{" "}
        <div className="info">{dislikes}</div>
      </div>
      <div className="button-reset">
        <Button
          name="Reset Results"
          type="button"
          onClick={handleReset}
        ></Button>
      </div>
    </div>
  );
}

export default Feedback;
