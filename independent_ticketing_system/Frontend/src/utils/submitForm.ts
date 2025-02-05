import { IotaClient } from "@iota/iota-sdk/client";
import { formDataType, OpenFormState } from "../type";
import { burnTicket } from "./burn";
import { buyResellTicket } from "./buyResell";
import { mintTicket } from "./mint";
import { resellTicket } from "./resell";
import { tranferTicket } from "./transfer";
import { buyTicket } from "./buyTicket";
import { enableTicketToBuy } from "./enableTicketToBuy";
import { whiteListBuyer } from "./whiteListBuyer";
import { NavigateFunction } from "react-router-dom";

export default (
  e: any,
  openForm: OpenFormState["openForm"],
  formData: formDataType,
  resetFormData: () => void,
  packageId: any,
  eventObject: any,
  creatorCap: any,
  signAndExecuteTransaction: any,
  client: IotaClient,
  navigate: NavigateFunction,
  setLoading: any,
) => {
  e.preventDefault();
  switch (openForm) {
    case "Mint":
      mintTicket(
        formData,
        resetFormData,
        packageId,
        eventObject,
        creatorCap,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "Burn":
      burnTicket(
        formData,
        resetFormData,
        packageId,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "BuyResell":
      buyResellTicket(
        formData,
        resetFormData,
        packageId,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "Resell":
      resellTicket(
        formData,
        resetFormData,
        packageId,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "Transfer":
      tranferTicket(
        formData,
        resetFormData,
        packageId,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "BuyTicket":
      buyTicket(
        formData,
        resetFormData,
        packageId,
        eventObject,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "EnableTicketToBuy":
      enableTicketToBuy(
        formData,
        resetFormData,
        packageId,
        creatorCap,
        eventObject,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    case "WhiteListBuyer":
      whiteListBuyer(
        formData,
        resetFormData,
        packageId,
        signAndExecuteTransaction,
        client,
        navigate,
        setLoading,
      );
      break;
    default:
      break;
  }
};
