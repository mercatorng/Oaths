export class Payment{
    id: number;
    institutionID: number;
    method: string;
    reference: string;
    payerName: string;
    accountID: number;
    amount: number;
    datePaid: string;
    userID: number
    paymentCodeID: number;
    paymentCode: {
      id: number;
      institutionID: number;
      documentID: number;
      documentType: number;
      documentRef: string;
      payerName: number;
      dateGenerated: string;
      isPaid: boolean;
    }
  }