export interface ResisterResponse {
    payload: Payload;
    message: string;
}

export interface Payload {
    id:       number;
    username: string;
    roleKey:  string;
}
