export type SelfIntroResponse = {
  nickname: string;
  gender: boolean;
  birth: string;
  height: number;
  bodyType: BodyType;
  keywords: string;
  mbti: string;
};

export type AddressResponse = {
  id: number;
  roadAddress: string;
  sido: string;
  sigungu: string;
  bname: string;
  zonecode: number;
};

export type ImageResponse = {
  id: string;
  name: string;
  path: string;
};

export type ValueResponse = {
  id: number;
  type: '인생' | '일' | '사랑';
  question: string;
  response: string;
};

export type ValueRequest = Omit<ValueResponse, 'question' | 'type'>;

export type SelfIntroRequest = SelfIntroResponse & {
  address: Omit<AddressResponse, 'id'>;
};
