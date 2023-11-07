import DashboardRoutes from "../routes/DashboardRoutes"

function Dashboard({role, userImagePath}) {
  return (
   <>
    <DashboardRoutes role={role} userImagePath={userImagePath}/>
   </>
  );
}

export default Dashboard;