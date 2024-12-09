import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  const goToProduct = () => navigate("/product/productId") 

  const handleLogout = () => {
    navigate("/login")
  }

  return (
    <div>
            <h2>Hello user welcome to your Homepage</h2>
            <h3>This page is protected</h3><br />
            <button onClick={goToProduct}>Products</button>
            <br />
            <br />
            <button onClick={handleLogout}>
                Logout
            </button>
        </div>
  )
}
export default Home