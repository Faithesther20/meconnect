import images from '@/constants/images';

export const companyData = [
    {
      id: "1",
      name: "ABCD Company",
      requests: [
        {
          id: "SR123",
          title: "SR 123",
          description: "Lorem ipsum dolor sit amet then theis  is the continuation of the file written in a very long manner lorme was a man that traveled to londom...",
          requestedDate: "01 Nov 24",
          status: "Open",
          registered:true,

        },
        {
          id: "SR124",
          title: "SR 124",
          description: "Lorem ipsum dolor sit amet...",
          requestedDate: "02 Nov 24",
          status: "Closed",
          registered:true,
        },
      ],
    },
    {
      id: "2",
      name: "EUIF Company",
      requests: [
        {
          id: "SR125",
          title: "SR 125",
          description: "Lorem ipsum dolor sit amet...",
          requestedDate: "03 Nov 24",
          status: "Open",
          registered:true,
        },
      ],
    },
  ];
  

  // export const companyMachineData = [
  //   {
  //     company: "ABCD Company",
  //     machines: [
  //       {
  //         id: "1",
  //         serial: "JV55 - V123-0029",
  //         installedDate: "01 May 2024",
  //         location: "Coimbatore, TN",
  //         status: "ACTIVE",
  //       },
  //       {
  //         id: "2",
  //         serial: "JV55 - V123-0030",
  //         installedDate: "05 May 2024",
  //         location: "Mumbai, MH",
  //         status: "ACTIVE",
  //       },
  //     ],
  //   },
  //   {
  //     company: "EUFIF Company",
  //     machines: [
  //       {
  //         id: "3",
  //         serial: "JV55 - V123-0045",
  //         installedDate: "10 June 2024",
  //         location: "Delhi, DL",
  //         status: "ACTIVE",
  //       },
  //     ],
  //   },
  //   {
  //     company: "MJWE Company",
  //     machines: [
  //       {
  //         id: "4",
  //         serial: "JV55 - V123-0050",
  //         installedDate: "15 July 2024",
  //         location: "Chennai, TN",
  //         status: "ACTIVE",
  //       },
  //     ],
  //   },
  // ];
  
  export const companyMachineData = [
    {
      company: "ABCD Company",
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
    {
      company: "EUFIF Company",
      machines: [
        {
          id: "3",
          serial: "JV55 - V123-0045",
          installedDate: "10 June 2024",
          location: "Delhi, DL",
          status: "ACTIVE",
          pending: false,
        },
      ],
    },
    {
      company: "MJWE Company",
      machines: [
        {
          id: "4",
          serial: "JV55 - V123-0050",
          installedDate: "15 July 2024",
          location: "Chennai, TN",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
  ];
  export const companyTrainingData = [
    {
      company: "April 2023",
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
    {
      company: "May 2023",
      machines: [
        {
          id: "3",
          serial: "JV55 - V123-0045",
          installedDate: "10 June 2024",
          location: "Delhi, DL",
          status: "ACTIVE",
          pending: false,
        },
      ],
    },
    {
      company: "MJWE Company",
      machines: [
        {
          id: "4",
          serial: "JV55 - V123-0050",
          installedDate: "15 July 2024",
          location: "Chennai, TN",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
  ];

  export const customersData = [
    {
      custID : "Cust1",
      customer: "ABCD Company",
      customerDetails:{
        customerName:"Amadu Bello",
        pendingApproval:true,
        starred:false,
        needSetting:true
      },
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
    {
      custID : "Cust2",
      customer: "ABCD Company",
      customerDetails:{
        customerName:"Victor Micheal",
        pendingApproval:false,
        starred:true,
        needSetting:true

      },
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
   
    {
      custID : "Cust3",
      customer: "ABCD Company",
      customerDetails:{
        customerName:"Victor Micheal",
        pendingApproval:false,
        starred:true,
        needSetting:false

      },
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
    {
      custID : "Cust4",
      customer: "EFC Group of companies",
      customerDetails:{
        customerName:"Gabriel Matthew",
        pendingApproval:true,
        starred:true,
        needSetting:true

      },
      machines: [
        {
          id: "1",
          serial: "JV55 - V123-0029",
          installedDate: "01 May 2024",
          location: "Coimbatore, TN",
          status: "ACTIVE",
          pending: false, // ✅ pending
        },
        {
          id: "2",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
        {
          id: "3",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: false, // ✅ Pending Approval
        },
        {
          id: "4",
          serial: "JV55 - V123-0030",
          installedDate: "05 May 2024",
          location: "Mumbai, MH",
          status: "ACTIVE",
          pending: true, // ✅ Pending Approval
        },
      ],
    },
   
  ];

export const promotionBannerData = [
  {
    id: 1,
    bannerImg:images.promotion_banner,
    expiryDate:"24-01-2025"
  }
]
  