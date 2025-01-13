import { useEffect, useState } from "react";
import {
  useAccounts,
  useSignAndExecuteTransaction,
  useIotaClient,
} from "@iota/dapp-kit";

import { formDataType, NftFormDataType } from "../type";
import { useNetworkVariable } from "../networkConfig";

export const useCreateForm = () => {
  const packageId = useNetworkVariable("packageId");
  const total_seats_object = useNetworkVariable("total_seats_object");
  const creator_object = useNetworkVariable("creator_object");
  const AvailableTickets_to_buy_object = useNetworkVariable(
    "AvailableTickets_to_buy_object",
  );
  const [address] = useAccounts();
  useEffect(() => console.log("Address = ", address), [address]);
  const { mutate: signAndExecuteTransaction } = useSignAndExecuteTransaction();
  const client = useIotaClient();

  const [formData, setFormData] = useState<formDataType>({
    coin: "",
    eventId: "",
    eventdate: "",
    royaltyPercentage: "",
    packageCreator: "",
    totalSeat: "",
    price: "",
    nft: "",
    recipient: "",
    initiatedResell: "",
    seatNumber: "",
    buyableTickets: "",
  });

  const [nftFormData, setNftFormData] = useState<NftFormDataType>({
    price: "",
    nft: "",
    recipient: "",
  });

  const updateFormData = (key: keyof formDataType, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const updateNftFormData = (key: keyof NftFormDataType, value: string) => {
    setNftFormData((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetFormData = () => {
    setFormData({
      coin: "",
      eventId: "",
      eventdate: "",
      royaltyPercentage: "",
      packageCreator: "",
      totalSeat: "",
      price: "",
      nft: "",
      recipient: "",
      initiatedResell: "",
    });
  };

  const resetNftFormData = () => {
    setNftFormData({
      price: "",
      nft: "",
      recipient: "",
    });
  };

  return {
    packageId,
    address,
    signAndExecuteTransaction,
    client,
    formData,
    updateFormData,
    resetFormData,
    total_seats_object,
    creator_object,
    AvailableTickets_to_buy_object,
    nftFormData,
    updateNftFormData,
    resetNftFormData,
  };
};
