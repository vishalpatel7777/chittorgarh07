import { ipoReportData } from '@data/ipo/LearnAboutIpos/IpoReportData';
import IpoReportTable from '../IpoReportTable';

export const IpoReportList = () => {
  return (
    <div
      className="
        bg-white
        rounded-[0.7rem]
        shadow-sm
        px-3 py-4
        overflow-hidden
      "
    >
      <IpoReportTable data={ipoReportData} />
    </div>
  );
};

