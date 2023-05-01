export interface InputI {
  id: number;
  name: string;
  type: string;
  placeholder: string;
  pattern?: string;
  errorMessage: string;
  label: string;
  required: boolean;
}

export type User = {
  email: string;
  purchases: string[];
  wishlist: WishItem[];
};

export type WishItem = {
  image: string;
  text: string;
  tickets: Number;
  eventId: string;
  userId: string;
};
