import React from "react";
import NavBar from "./Nav";
import styles from "../styles";

function MainPage() {
  return (
    <div>
      <NavBar />
      <div style={styles.MainPagePhotoDiv}>
        <img src={"/static/MainPhoto.png"} style={styles.MainPagePhotoImg} />
      </div>
    </div>
  );
}

export default MainPage;
