import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import PublicRoute from "./components/PublicRoute";
import { useSelector } from "react-redux";
import Spinner from "./components/Spinner";
import CreateEditPlaylist from "./pages/CreateEditPlaylist";
import AdminHome from "./pages/Admin/AdminHome";
import AddEditSong from "./pages/Admin/AddEditSong";

// import {Toaster} from '/react-hot-toast';

function App() {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <div className="App">
      {loading && <Spinner />}
      {/* <Toaster position="top-center" reverseOrder={false} /> */}

      {/* <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
       
      </Routes>
      </BrowserRouter> */}
    

      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="/create-edit-playlist"
            element={
              <ProtectedRoute>
                <CreateEditPlaylist/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminHome/>
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin/add-edit-song"
            element={
              <ProtectedRoute>
                <AddEditSong/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
