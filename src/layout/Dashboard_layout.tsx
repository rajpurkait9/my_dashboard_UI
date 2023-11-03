import MySidebar from "./Sidebar";
import MenuAppBar from "./AppBar";

function Dashboard_layout() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: "#f5f5f5",
      }}
    >
      <MenuAppBar />
      <MySidebar />
    </div>
  );
}

export default Dashboard_layout;
