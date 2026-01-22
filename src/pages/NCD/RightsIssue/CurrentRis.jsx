
import IpoHeader from '@components/ipo/MainboardIpoInfo/currentIpos/IPOHeader'
import FAQLayout from '@components/common/faq/FAQLayout'
import CurrentRisCard from '@components/NCD/RightsIssue/currentRis/CurrentRisCard'
import CurrentRisTableCard from '@components/NCD/RightsIssue/CurrentRis/CurrentRisTableCard'
import {currentRisData} from '@data/NCD/CurrentRisData'
const CurrentRis = () => {
  return (
    <div className="space-y-6 p-10 m-4">
       <IpoHeader />
       <h1 className="font-bold text-xl">Rights Issues 2026</h1>
      <CurrentRisCard />
        <div className="rounded-xl bg-white p-4 shadow-sm">
      
     <CurrentRisTableCard data={currentRisData} />
      </div>
       <FAQLayout />


    </div>
  );
};

export default CurrentRis;
