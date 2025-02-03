import { Link } from "react-router-dom"
import { Title, ClientsPage } from "./styles"

function Clients() {


  return (
    <ClientsPage>
      <Title>Select company</Title>
      <Link to='facebook'>Go to Facebook</Link>
      <Link to='telegram'>Go to Telegram</Link>
      <Link to='google'>Go to Google</Link>
    </ClientsPage>
  )
}

export default Clients 