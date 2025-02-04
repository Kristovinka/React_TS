// Компонент Message.tsx должен отображать сообщение из стейта,

import { useContext } from "react";
import { MainCardContext } from "../BlogManagement/BlogManagement";
import { MessageComponent } from "./styles";

//  которое вы кладете при клике на кнопку "Post"
function Message() {
    const userContentData = useContext(MainCardContext);
  return <MessageComponent>{userContentData}</MessageComponent>;
}
export default Message;
