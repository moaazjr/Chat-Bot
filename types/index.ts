export type Message = {
  role: "assistant" | "user";
  content: string;
  createdAt: Date;
  updatedAt: Date;
  _id: string;
};
