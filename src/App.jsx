import { Outlet } from "react-router-dom";
import Footer from '@components/layout/Footer/Footer'
import Navbar from "@components/layout/Navbar/Navbar";
import IpoCalendarMainboardContent from "@components/ipo/MainboardIpoInfo/IpoCalendar/IpoCalendarMainboardContent";
import  IpoSubscription from "@pages/ipo/LiveIpoInfo/IpoSubscription";


const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* <Navbar  /> */}
      {/* <IpoCalendarMainboardContent /> */}
      <div className=" box-border w-[calc(100%-48px)] px-6 mx-auto grow bg-partition text-secondary leading-base">
        <Outlet />
        {/* <IpoSubscription /> */}
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
