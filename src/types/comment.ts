export type CommentProps = {
  documentId: string;
  reader: Reader;
  content: string;
};

export type CommentInputProps = {
  comment: string;
  setComment: (value: string) => void;
  handleSubmit: () => void;
};

type Reader = {
  Fullname: string;
  avatar: Avatar;
};

type Avatar = {
  url: string;
};
