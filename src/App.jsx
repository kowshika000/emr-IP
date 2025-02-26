import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import DischargeList from "./ExpectedDischargeList/DischargeList";
import BookingList from "./SurgeryBookingsList/BookingList";
import WhiteBoard from "./WhiteBoard/WhiteBoard";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    // <BrowserRouter>
      <Header />
    //   <Routes>
    //     <Route path="/" element={<Navigate to="/dischargeList" />} />
    //     <Route path="/dischargeList" element={<DischargeList />} />
    //     <Route path="/bookingList" element={<BookingList />} />
    //     <Route path="/whiteBoard" element={<WhiteBoard />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("ip-app"));
root.render(<App />);

export default App;
