import { WrapperContainer } from "../../../App-styled";
import { DashboardWrapper } from "./styled-index";


function Dashboard() {
  if (!window.localStorage.getItem("authToken")) {
    window.location = "/admin";
  }
  return (
    <WrapperContainer>
      <DashboardWrapper>
      </DashboardWrapper>
    </WrapperContainer>
  );
}
export default Dashboard;