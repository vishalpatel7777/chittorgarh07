import { mainboardIpos, smeIpos } from "@data/ipo/MainboardIpoInfo/Ipo_Dashboard/index.js";

export default  function getIpoListData() {
  return {
    mainboard: mainboardIpos.map(ipo => ({
      name: ipo.company || ipo.companyName,
      date: `${ipo.openDate} - ${ipo.closeDate}`,
      status: ipo.status
    })),
    sme: smeIpos.map(ipo => ({
      name: ipo.company || ipo.companyName,
      date: `${ipo.openDate} - ${ipo.closeDate}`,
      status: ipo.status
    }))
  };
}
