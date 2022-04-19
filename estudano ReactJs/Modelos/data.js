let invoices = [
    {
      name: "Software Engineer",
      number: 1,
      amount: "$15,800",
      due: "12/05/1995",
    },
    {
      name: "Software Developer",
      number: 2,
      amount: "$10,000",
      due: "10/31/2000",
    },
    {
      name: "BackEnd Developer",
      number: 3,
      amount: "$9,500",
      due: "07/22/2003",
    },
    {
      name: "FullStack Remote",
      number: 4,
      amount: "$2,500",
      due: "09/01/1997",
    },
    {
      name: "Big Data Remote",
      number: 5,
      amount: "$4,600",
      due: "01/27/1998",
    },
  ];
  
  export function getInvoices() {
    return invoices;
  }
  export function findById(id){
    return invoices.find((data)=>data.number===id)
  }