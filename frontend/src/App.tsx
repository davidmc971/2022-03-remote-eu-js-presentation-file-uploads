import React from "react";

function App() {
  return (
    <form
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
      action="http://localhost:8000/multer"
      method="post"
      encType="multipart/form-data"
    >
      <input type="file" name="file" id="file" />
      <input type="submit" style={{ marginTop: "2rem" }} />
    </form>
  );
}

export default App;
