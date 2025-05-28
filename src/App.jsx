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

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />}>
            <Route path="office-budget" element={<Officebuget />} />
            <Route path="create-budget" element={<CreateBudget />} />
            <Route path="circulars" element={<Circulars />} />
            <Route
              path="logistics-details/:id"
              element={<LogisticsDetails />}
            />
            <Route path="payroll" element={<Payroll />} />
            <Route path="logistics-request" element={<LogisticsRequest />} />
            <Route
              path="create-salary-definition"
              element={<SalaryDefination />}
            />
            <Route path="procurements-request" element={<ProcurementsRequest/>}/>
            <Route path="staff" element={<Staff />} />
            <Route path="add-staff" element={<AddStaff />} />
            <Route path="memo" element={<Memo />} />
            <Route path="create-memo" element={<CreateMemo />} />
            <Route path="notifications" element={<Notifications />} />
            <Route
              path="notification-detail/:id"
              element={<NotificationDetails />}
            />
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
