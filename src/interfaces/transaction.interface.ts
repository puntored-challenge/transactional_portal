export interface Supplier {
  id: string;
  name: string
}

export interface Recharge {
  supplierId: string;
  cellPhone:  string;
  value:      number;
}


export interface RechargeResponse {
  message: string;
  transactionalID: string;
  cellPhone: string;
  value: number;
}
export interface RechargeWithUsername {
  id: string;
  supplierId: string;
  cellPhone: string;
  value: number;
  createdAt: string; 
  status: 'SUCCESS';
  transactionalId: string;
  fullName: string;
}
