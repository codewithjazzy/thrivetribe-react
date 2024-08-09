import "./App.css";
import '@mantine/core/styles.css'
import { MantineProvider } from "@mantine/core";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import About from "./pages/About";
import Blog from "./pages/Blog";
import CreateAccount from "./pages/CreateAccount";
import EditAccount from "./pages/EditAccount"
import Home from "./pages/Home";
import Login from "./pages/Login";
import Account from "./pages/Account";
import Portal from "./pages/Portal"
import Profile from "./pages/Profile";
import Providers from "./pages/Providers";
import Quiz from "./pages/Quiz";
import SignUp from "./pages/SignUp"
import Starter from "./pages/Starter";
import Types from "./pages/Types";
import Layout from "./Layout";




export default function App() {
  return (
    <MantineProvider>
      <Router>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/createAccount" element={<CreateAccount/>}/>
            <Route path="/editAccount" element={<EditAccount/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/account" element={<Account/>}/>
            <Route path="/portal" element={<Portal/>}/>
            <Route path="/profile/:id" element={<Profile/>}/>
            <Route path="/providers" element={<Providers/>}/>
            <Route path="/quiz" element={<Quiz/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/therapy101" element={<Starter/>}/>
            <Route path="/types" element={<Types/>}/>
          </Route>
        </Routes>
      </Router>
    </MantineProvider>
  );
}
