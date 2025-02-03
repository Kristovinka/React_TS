import { Link } from "react-router-dom"

import Button from "components/Button/Button"
import { Title, UsersPage } from "./styles"

function Users() {


  return (
    <UsersPage>
      <Title>Select user</Title>
      {/* <Link to='/users/user'>Go to User page</Link> */}
      <Link to='user'>Go to User page</Link>
      <Button name="Go to About Page" onClick={() => { }} />
    </UsersPage>
  )
}

export default Users