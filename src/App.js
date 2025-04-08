import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./page/MainPage";
import About from "./page/company/About";
import Ceo from "./page/company/Ceo";
import Organization from "./page/company/Organization";
import Business1 from "./page/business/Business1";
import Business2 from "./page/business/Business2";
import Business3 from "./page/business/Business3";
import Careers from "./page/board/Careers";
import CareersView from "./page/board/CareersView";
import Bidding from "./page/board/Bidding";
import BiddingView from "./page/board/BiddingView";
import Pr from "./page/board/Pr";
import PrView from "./page/board/PrView";
import Legal from "./page/legal/Legal";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/react-for-beginners/" element={<MainPage />} />
        <Route path="/react-for-beginners/company/company" element={<About />} />
        <Route path="/react-for-beginners/company/ceo" element={<Ceo />} />
        <Route path="/react-for-beginners/company/organization" element={<Organization />} />
        <Route path="/react-for-beginners/business/business1" element={<Business1 />} />
        <Route path="/react-for-beginners/business/business2" element={<Business2 />} />
        <Route path="/react-for-beginners/business/business3" element={<Business3 />} />
        <Route path="/react-for-beginners/board/careers" element={<Careers />} />
        <Route path="/react-for-beginners/board/careersView" element={<CareersView />} />
        <Route path="/react-for-beginners/board/bidding" element={<Bidding />} />
        <Route path="/react-for-beginners/board/biddingView" element={<BiddingView />} />
        <Route path="/react-for-beginners/board/pr" element={<Pr />} />
        <Route path="/react-for-beginners/board/prView" element={<PrView />} />
        <Route path="/react-for-beginners/legal/legal" element={<Legal />} />
      </Routes>
    </Router>
  );
}

export default App;
