import React from "react";
import MiniDrawer from "../../components/backend/drawer";
import NewsBackend from "../../components/backend/news";

function BackendNewsPage() {
  return (
    <MiniDrawer>
      <NewsBackend />
    </MiniDrawer>
  );
}

export default BackendNewsPage;
