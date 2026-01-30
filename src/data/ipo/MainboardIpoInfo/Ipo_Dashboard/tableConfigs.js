export const TABLE_CONFIGS = {
  mainboard: [
    {
      id: "ipos",
      title: "Mainboard IPOs & FPOs 2026",
      subtitle: "Current mainboard IPOs at BSE and NSE.",
      showStatusLegend: true,
      statusKey: "status",
      columns: [
        { key: "company", label: "Company", link: true },
        { key: "issueDate", label: "Issue Date", align: "center" },
        {
          key: "pdfnames",
          label: "Download",
          align: "right",
          type: "external-link",
          linkKey: "pdfurls",
        },
      ],
      moreLink: "/report/mainboard-ipo-list-in-india-bse-nse/83/",
    },
    {
      id: "reviews",
      title: "IPO Reviews",
      subtitle: "Latest IPO reviews of mainboard IPOs at BSE and NSE.",
      columns: [
        { key: "company", label: "Company", link: true },
        { key: "apply", label: "Apply", align: "center" },
        { key: "mayApply", label: "May Apply", align: "center" },
        { key: "neutral", label: "Neutral", align: "center" },
        { key: "avoid", label: "Avoid", align: "center" },
        { key: "notRated", label: "Not Rated", align: "center" },
      ],
      moreLink: "/report/ipo-review/102/mainline/",
    },
    {
      id: "subscription",
      title: "IPO Subscription (Live)",
      subtitle:
        "Live IPO Subscription from BSE/NSE. Above 1x = oversubscribed.",
      columns: [
        { key: "company", label: "Company", link: true },
        { key: "lastUpdated", label: "Last Updated" },
        { key: "subscription", label: "Subscription", align: "right" },
      ],
      moreLink: "/keyword/ipo-subscription/23",
    },
    {
      id: "performance",
      title: "IPO Performance Tracker",
      subtitle:
        "Track daily IPO performance of recent and past mainboard IPOs.",
      columns: [
        { key: "company", label: "Company", link: true },
        { key: "issuePrice", label: "Issue Price", align: "center" },
        { key: "currentPrice", label: "Current Price", align: "center" },
        { key: "gainLoss", label: "Gain/Loss", align: "right" },
      ],
      moreLink: "/report/ipo-performance/84/",
    },
    {
      id: "basisOfAllotment",
      title: "IPO Basis of Allotment",
      subtitle:
        "View the Basis of Allotment to see total applications and allotment distribution among QIB, NII, and RII investors.",
      columns: [{ key: "company", label: "Basis of Allotments", link: true }],
    },
    {
      id: "eventCalendar",
      title: "Mainboard IPO Event Calendar",
      subtitle:
        "The upcoming IPO calendar shows opening and closing dates so you can plan your applications.",
      columns: [
        { key: "date", label: "Date" },
        { key: "event", label: "Event", link: true },
      ],
    },
  ],

  sme: [
    {
      id: "ipos",
      title: "SME IPOs 2026",
      subtitle: "Current SME IPOs at BSE SME and NSE Emerge.",
      showStatusLegend: true,
      statusKey: "status",
      columns: [
        {
          key: "company",
          label: "Company",
          link: true,
        },
        {
          key: "issueDate",
          label: "Issue Date",
          align: "right",
        },
      ],
      moreLink: "/report/sme-ipo-list-in-india/84/",
    },

    {
      id: "reviews",
      title: "SME IPO Reviews",
      subtitle: "SME IPO reviews of BSE SME and NSE Emerge IPO.",
      columns: [
        {
          key: "company",
          label: "Company",
          link: true,
        },
        {
          key: "apply",
          label: "Apply",
          align: "center",
        },
        {
          key: "mayApply",
          label: "May Apply",
          align: "center",
        },
        {
          key: "neutral",
          label: "Neutral",
          align: "center",
        },
        {
          key: "avoid",
          label: "Avoid",
          align: "center",
        },
        {
          key: "notRated",
          label: "Not Rated",
          align: "center",
        },
      ],
      moreLink: "/report/ipo-review/102/sme/",
    },

    {
      id: "subscription",
      title: "SME IPO Subscription (Live)",
      subtitle:
        "Live IPO Subscription from BSE/NSE. Above 1x = oversubscribed. Check status below or click a company for detailed bids.",
      columns: [
        {
          key: "company",
          label: "Company",
          link: true,
        },
        {
          key: "lastUpdated",
          label: "Last Updated",
        },
        {
          key: "subscription",
          label: "Subscription",
          align: "right",
        },
      ],
      moreLink: "/keyword/ipo-subscription/23",
    },

    {
      id: "performance",
      title: "SME IPO Performance Tracker",
      subtitle: "Track daily IPO performance of recent and past SME IPOs.",
      columns: [
        {
          key: "company",
          label: "Company",
          link: true,
        },
        {
          key: "issuePrice",
          label: "Issue Price",
          align: "center",
        },
        {
          key: "currentPrice",
          label: "Current Price",
          align: "center",
        },
        {
          key: "gainLoss",
          label: "Gain/Loss",
          align: "right",
        },
      ],
      moreLink: "/report/sme-ipo-performance/86/",
    },
    {
      id: "basisOfAllotment",
      title: "SME IPO Basis of Allotment",
      subtitle:
        "View the Basis of Allotment to see total applications and allotment distribution among QIB, NII, and RII investors.",
      columns: [{ key: "company", label: "Basis of Allotments", link: true }],
    },
    {
      id: "eventCalendar",
      title: "SME IPO Event Calendar",
      subtitle:
        "The upcoming IPO calendar shows opening and closing dates so you can plan your applications.",
      columns: [
        { key: "date", label: "Date" },
        { key: "event", label: "Event", link: true },
      ],
    },
  ],
};
