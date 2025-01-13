import { OperationType } from "./type";

export const operations: OperationType[] = [
  {
    name: "Burn",
    description: "Burn",
  },
  {
    name: "BuyResell",
    description: "Buy Resell ticket",
  },
  {
    name: "BuyTicket",
    description: "Buy Ticket",
  },
  {
    name: "EnableTicketToBuy",
    description: "Sell Ticket",
  },
  {
    name: "Resell",
    description: "Resell Ticket",
  },
  {
    name: "Transfer",
    description: "Transfer Ticket",
  },
  {
    name: "WhiteListBuyer",
    description: "WhiteList Buyer",
  },
];

export const nftOperations: OperationType[] = [
  {
    name: "Burn",
    description: "Burn",
    path:"burnTicket",
  },
  {
      name: "Resell",
      description: "Resell Ticket",
      path:"resellTicket",
    },
  {
      name: "Transfer",
      description: "Transfer Ticket",
      path:"transferTicket",
    },
]