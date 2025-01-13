import { IotaClient } from "@iota/iota-sdk/client";
import { formDataType, OpenFormState } from "../type";
import { burnTicket } from "./burn";
import { resellTicket } from "./resell";
import { tranferTicket } from "./transfer";
import { NavigateFunction } from "react-router-dom";

export default (
  e: any,
  openForm: OpenFormState["openForm"],
  formData: formDataType,
  resetNftFormData: () => void,
  packageId: any,
  signAndExecuteTransaction: any,
  client: IotaClient,
  navigate: NavigateFunction,
  setLoading: any,
) => {
  e.preventDefault();
  switch (openForm) {
    case "Burn":
      burnTicket(
        formData,
        resetNftFormData,
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
        resetNftFormData,
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
        resetNftFormData,
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
