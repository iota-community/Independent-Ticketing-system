import { Transaction } from "@iota/iota-sdk/transactions";
import { formDataType } from "../type";
import { IotaClient } from "@iota/iota-sdk/client";

export const tranfer_Ticket =  (
    formData:formDataType,
    setFormData:React.Dispatch<React.SetStateAction<formDataType>>,
    packageId:any,
    signAndExecuteTransaction: any,
    client: IotaClient,

) => {
    const tx = () => {
        const tx = new Transaction();
        tx.setGasBudget(50000000)
        tx.moveCall({
            target: `${packageId}::independent_ticketing_system_nft::transfer_ticket`,
            arguments: [
                tx.object(formData.nft as string),
                tx.pure.address(formData.recipient as string)
            ],
        });
        return tx;
    }
    signAndExecuteTransaction(
        {
            transaction: tx(),
        },
        {
            onSuccess: ({ digest }:{digest:any}) => {
                client.waitForTransaction({ digest, options: { showEffects: true } }).then(() => {
                    setFormData({
                        coin:'',
                        eventId:'',
                        eventdate:'',
                        royaltyPercentage:'',
                        packageCreator:'',
                        totalSeat:'',
                        price:'',
                        nft:'',
                        recipient:'',
                        initiatedResale:''
                    })
                    alert("Transaction successfull!")
                });
            },
            onError: (error: any) => {
                console.error('Failed to execute transaction', tx, error);
            },
        },
    )
}