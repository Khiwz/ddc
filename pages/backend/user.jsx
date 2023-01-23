import React from "react";
import MiniDrawer from "../../components/backend/drawer";
import BackendUserTabs from "../../components/backend/user";
import { auth } from "../../config/firebase";

function BackendUserPage() {
  return (
    <MiniDrawer>
      <BackendUserTabs />
    </MiniDrawer>
  );
}

export default BackendUserPage;
