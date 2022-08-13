export class CustomerDto   {
    constructor(
        public Id?:number,
        public Firstname?: string,
        public Lastname?: string,
        public DateOfBirth?: any,
        public PhoneNumber?: string,
        public Email?: string,
        public BankAccountNumber?: string,
    ){        
    }
}