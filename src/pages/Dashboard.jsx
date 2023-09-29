import DashboardRoutes from "../routes/DashboardRoutes"

function Dashboard({role}) {
  return (
   <>
    <DashboardRoutes role={role}/>
   </>
  );
}

export default Dashboard;