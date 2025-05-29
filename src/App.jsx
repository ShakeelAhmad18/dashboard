import { BrowserRouter, Route, Routes } from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import Officebuget from "./pages/Officebudget"
import CreateBudget from "./pages/CreateBudget";
import Circulars from "./pages/Circulars";
import CreateCircular from "./pages/CreateCircular";
import Logistics from "./pages/Logistics";
import LogisticsRequest from "./pages/LogisticsRequest";
import LogisticsDetails from "./pages/LogisticsDetails";
import Payroll from "./pages/Payroll";
import SalaryDefination from "./pages/SalaryDefination";
import CreateTaxDefiantion from "./pages/CreateTaxDefiantion";
import CreatePaySlip from "./pages/CreatePaySlip";
import ViewPaySlip from "./pages/ViewPaySlip";
import GeneratePayRoll from "./pages/GeneratePayRoll";
import Stacks from "./pages/Stacks";
import UpdateStock from "./pages/UpdateStock";
import Maintenance from "./pages/Maintenance";
import Scheduled from "./components/Scheduled";
import CapacityBuilding from "./pages/CapacityBuilding";
import TrainingRequest from "./pages/TrainingRequest";
import TrainingDetail from "./pages/TrainingDetail";
import Notifications from "./pages/Notifications";
import NotificationDetails from "./pages/NotificationDetails";
import Memo from "./pages/Memo";
import CreateMemo from "./pages/CreateMemo";
import Staff from "./pages/Staff";
import AddStaff from "./pages/AddStaff";
import EditProfile from "./pages/EditProfile";
import PaymentVoucher from "./pages/PaymentVoucher";
import CreateVoucher from "./pages/CreateVoucher";
import Procurements from "./pages/Procurements";
import ProcurementsRequest from "./pages/ProcurementsRequest";
import TaxManagemant from "./pages/TaxManagemant";
import CreateTaxRecord from "./pages/CreateTaxRecord";
import ProjectManagement from "./pages/ProjectManagement";
import CreateProject from "./pages/CreateProject";
import ProjectDetail from "./pages/ProjectDetail";
import QualityAssurance from "./pages/QualityAssurance";
import CreateTestRecord from "./pages/CreateTestRecord";
import MeetingManagement from "./pages/MeetingManagement";
import ScheduleMeeting from "./pages/ScheduleMeeting";
import ScanModule from "./pages/ScanModule";
import InternalMessages from "./pages/InternalMessages";
import MessageDetail from "./pages/MessageDetail";
import VehicleFleetManagement from "./pages/VehicleFleetManagement";
import AddVehicle from "./pages/AddVehicle";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import TwoFactorAuth from "./pages/TwoFactorAuth";
import ForgotPassword from "./pages/ForgotPassword";
import EmailVerification from "./pages/EmailVerification";
import ResetPassword from "./pages/ResetPassword";

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password" element={<ResetPassword/>}/>
          <Route path="/signup" element={<Signup />} />
          <Route path="/email-verify" element={<EmailVerification/>}/>
          <Route path="/otp" element={<TwoFactorAuth/>}/>
          <Route path="/" element={<Dashboard />}>
            <Route path="office-budget" element={<Officebuget />} />
            <Route path="create-budget" element={<CreateBudget />} />
            <Route path="circulars" element={<Circulars />} />
            <Route
              path="logistics-details/:id"
              element={<LogisticsDetails />}
            />
            <Route path="project-management" element={<ProjectManagement />} />
            <Route path="payroll" element={<Payroll />} />
            <Route path="logistics-request" element={<LogisticsRequest />} />
            <Route
              path="create-salary-definition"
              element={<SalaryDefination />}
            />
            <Route path="meeting-management" element={<MeetingManagement />} />
            <Route path="create-test-record" element={<CreateTestRecord />} />
            <Route path="quality-asurance" element={<QualityAssurance />} />
            <Route path="project-detail/:id" element={<ProjectDetail />} />
            <Route path="create-project" element={<CreateProject />} />
            <Route path="create-tax-record" element={<CreateTaxRecord />} />
            <Route path="tax-management" element={<TaxManagemant />} />
            <Route
              path="procurements-request"
              element={<ProcurementsRequest />}
            />
            <Route path="staff" element={<Staff />} />
            <Route path="add-staff" element={<AddStaff />} />
            <Route path="memo" element={<Memo />} />
            <Route path="create-memo" element={<CreateMemo />} />
            <Route path="notifications" element={<Notifications />} />
            <Route
              path="notification-detail/:id"
              element={<NotificationDetails />}
            />
            <Route path="add-vehicle" element={<AddVehicle/>} />
            <Route
              path="vehicle-management"
              element={<VehicleFleetManagement />}
            />
            <Route path="message-detail/:id" element={<MessageDetail />} />
            <Route path={"/messages"} element={<InternalMessages />} />
            <Route path="Barcode-QR-Scanning" element={<ScanModule />} />
            <Route path="schedule-meeting" element={<ScheduleMeeting />} />
            <Route path="training-detail/:id" element={<TrainingDetail />} />
            <Route path="procurements" element={<Procurements />} />
            <Route path="capacity-building" element={<CapacityBuilding />} />
            <Route path="create-payment-voucher" element={<CreateVoucher />} />
            <Route path="training-request" element={<TrainingRequest />} />
            <Route path="scheduled" element={<Scheduled />} />
            <Route path="viewpayslip/:id" element={<ViewPaySlip />} />
            <Route path="edit-profile/:id" element={<EditProfile />} />
            <Route path="payment-voucher" element={<PaymentVoucher />} />
            <Route
              path="create-tax-defination"
              element={<CreateTaxDefiantion />}
            />
            <Route path="stocks-and-inventory" element={<Stacks />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="update-stock" element={<UpdateStock />} />
            <Route path="generate-payroll" element={<GeneratePayRoll />} />
            <Route path="create-payslip" element={<CreatePaySlip />} />
            <Route path="logistics" element={<Logistics />} />
            <Route path="create-circular" element={<CreateCircular />} />
            <Route path="*" element={<p>Page Not Found</p>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
