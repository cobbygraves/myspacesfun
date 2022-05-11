import React, { useEffect } from "react";
import "./App.css";
import "./global.css";
import Alert from "./components/Alert/Alert";
import * as ActionCreators from "./redux/ActionCreators";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./components/Homepage/Homepage";
import Login from "./components/Login/Login";
import PostItems from "./components/Admin/PostItems/PostItems";
import CreatePost from "./components/Admin/CreatePost/CreatePost";
import SinglePost from "./components/SinglePost/SinglePost";
import Gallery from "./components/Gallery/Gallery";
import Contact from "./components/Contact/Contact";
import ManageMedia from "./components/Admin/ManageMedia/ManageMedia";
import MediaUpload from "./components/MediaUpload/MediaUpload";

function App() {
  const { alert, userAuthenticated } = useSelector((state) => state);
  const dispatch = useDispatch();
  const { showAlert } = bindActionCreators(ActionCreators, dispatch);

  useEffect(() => {
    if (alert.show) {
      setTimeout(() => {
        showAlert(false, alert.color, alert.title, alert.message);
      }, [5000]);
    }
  }, [alert, showAlert]);

  return (
    <div className="App-Root">
      <BrowserRouter>
        <main>
          <Header />
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            {userAuthenticated && (
              <>
                <Route path="/admin/manage" element={<PostItems />} />
                <Route path="/admin/create" element={<CreatePost />} />
                <Route path="/admin/media/manage" element={<ManageMedia />} />
                <Route path="/admin/media/add" element={<MediaUpload />} />
              </>
            )}

            <Route path="/post/:id" element={<SinglePost />} />
          </Routes>
          <Footer />
        </main>
      </BrowserRouter>
      <CSSTransition
        in={alert.show}
        mountOnEnter
        unmountOnExit
        timeout={300}
        classNames="App-Toast"
      >
        <Alert
          title={alert.title}
          color={alert.color}
          message={alert.message}
          closeAlert={() =>
            showAlert(false, alert.color, alert.title, alert.message)
          }
        />
      </CSSTransition>
    </div>
  );
}

export default App;
