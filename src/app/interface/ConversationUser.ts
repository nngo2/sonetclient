export interface ConversationUser {
  _id: string;
  firstName: string;
  lastName: string;
  status?: {isOnline: boolean, socketId: string};
}
