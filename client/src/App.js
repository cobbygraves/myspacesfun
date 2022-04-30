import React, { useEffect } from "react";
import "./app.css";
import "./global.css";
import Alert from "./components/alert/alert";
import * as ActionCreators from "./redux/actionCreators";
import { bindActionCreators } from "redux";
import { useSelector, useDispatch } from "react-redux";
import { CSSTransition } from "react-transition-group";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import PostItems from "./components/admin/postItems/postItems";
import CreatePost from "./components/admin/createPost/createPost";
import SinglePost from "./components/singlePost/singlePost";
import Videos from "./components/videos/videos";
import Gallery from "./components/gallery/gallery";
import Contact from "./components/contact/contact";

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
            <Route path="/vlog" element={<Videos />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/login" element={<Login />} />
            <Route path="/contact" element={<Contact />} />
            {userAuthenticated && (
              <Route path="/admin/manage" element={<PostItems />} />
            )}
            <Route path="/admin/create" element={<CreatePost />} />
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
