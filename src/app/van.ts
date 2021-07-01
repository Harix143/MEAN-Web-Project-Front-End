export class Van {
    constructor( public _id: String = "",
    public vanNumber?: String,
    public vanModel?: String,
    public sittingCapacity?: Number,
    public air_condition?: boolean ){}
   
}

export class Route {
    constructor( public _id: String = "",
    public name: String = "route1",
    public description: String = "Faizabad to Comsats" ){}
}


export class Fee {
    constructor( public _id: String = "",
    public dueAmount: String = "",
    public dueDate: String = "" ,
    public paidAmount: String = "0" ){}
}

export class Driver {
    constructor
    ( 
        public _id: String = "",
        public fullname: String = "",
        public email: String = "" ,
        public phone_no: String = "" ,
        public cnic: String = "" ,
        public password: String = "" ,
        public address: String = "" ,
        public role: String = "Driver" ,
    )
    {}
}

export class Student {
    constructor
    ( 
        public _id: String = "",
        public fullname: String = "",
        public email: String = "" ,
        public phone_no: String = "" ,
        public password: String = "" ,
        public schoolAdress: String = "" ,
        public role: String = "Student" ,
        public homeAdress: String = "" ,
        public age: String = "" ,
        public gender: String = "" ,

    )
    {}
}


export class Parent {
    constructor
    ( 
        public _id: String = "",
        public fullname: String = "",
        public email: String = "" ,
        public phone_no: String = "" ,
        public password: String = "" ,
        public role: String = "Parent" ,
        public homeAddress: String = "" ,

    )
    {}
}

export class Complaint  
{
    constructor
    ( 
        public _id: string = "",
        public title: string = "",
        public description: string= "",
        public status: string = "",
        public Feedback: string = "",
    ){}
}

export class Schedule  
{
    constructor
    ( 
        public _id: string = "",
        public schoolStartingTime: string = "",
        public schoolClosingTime: string= "",
    ){}
}





