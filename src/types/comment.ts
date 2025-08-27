export interface CommentProps {
    documentId: string;
    reader: Reader;
    content: string;
}

export interface CommentInputProps {
    comment: string;
    setComment: (value: string) => void;
    handleSubmit: () => void;
}

interface Reader {
    Fullname: string;
    avatar: Avatar;
}

interface Avatar {
    url: string;
}