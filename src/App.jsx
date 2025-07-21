import Profile from "./components/Profile"
import UserContext from "./context/UserContext"
import UserContextProvider from "./context/UserContextProvider"
import { useContext } from "react";

function App() {

  const {user, setUser}=useContext(UserContext);

  function loginHandler()
  {
        setUser({name : "Vikas Pal", email : "Vikas@gmail.com", img:"https://media.istockphoto.com/id/2214732541/photo/photo-of-activist-fist-up-screaming-megaphone-man-workaholic-need-his-salary-boss-ignore-his.jpg?s=612x612&w=0&k=20&c=-9LAlWJBO8G7f2NbdiuX7JhyaANNRIj1ewy5srNyGjo="})
  }


  return (
    <>
          <div className="border-b py-3 ">
            <div className="flex max-w-4xl mx-auto justify-between">
              <h3 className="text-2xl">Context API's</h3>
              <div className="">
                <button className="cursor-pointer text-2xl" onClick={loginHandler}>Login</button>
              </div>
            </div>
          </div>

          <div className="mt-44 max-w-4xl mx-auto">
            <Profile/>
          </div>
    </>
  )
}

export default App
