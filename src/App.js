import logo from './logo.svg';
import './App.css';
import ReserveVehicle from './components/Reservation/ReserveVehicle';
import Cars from './components/carDetails/Cars';
import AddOns from './components/VehicleAdds/AddOns';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import VhicleAdd from './components/VehicleAdds/VhicleAdd';
import AddOnsDetails from './components/VehicleAdds/AddOnsDetails';
import CarBill from './components/FinalForm/CarBill';
import DriverDetails from './components/FinalForm/DriverDetails';
import FinalForm from './components/FinalForm/FinalForm';

function App() {
  
  return (
    <div style={styles.app}>
      <Router>
        <Routes>
          <Route path="/" element={<ReserveVehicle />} />
          <Route path="/VhicleAdd" element={<VhicleAdd />} />
          <Route path="/AddOns" element={<AddOns />} />
          <Route path="/AddOnsDetails" element={<AddOnsDetails />} />
          <Route path="/Cars" element={<Cars />} />
          <Route path="/CarBill" element={<CarBill />} />
          <Route path="/DriverDetails" element={<DriverDetails />} />
          <Route path="/FinalForm" element={<FinalForm />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

const styles = {
  app: {
    padding: 50,
  },
};
