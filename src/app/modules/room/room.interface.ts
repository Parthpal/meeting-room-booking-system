export type TAmenities='Projector'|'Whiteboard'

export interface TRoom{
    name:string;
    roomNo?:number;
    floorNo?:number;
    capacity?:number;
    pricePerSlot?:number;
    amenities:TAmenities[];
    isDeleted:boolean;
}