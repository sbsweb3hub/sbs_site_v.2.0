export interface INonce {
  nonce: number;
}
export interface ILogin {
  message: string;
}
export interface IFavorite {
  _id: string;
  title: string;
  start_date: string;
  end_date: string;
  image: string;
}
export interface ISession {
  _id: string;
  address: string;
  achievements: unknown[];
  nonce: number;
  favorites: IFavorite[];
  name: string;
  avatar: string;
  endedPuzzleCount: string;
  isAdmin?: boolean;
}
export interface IPuzzleRequirement {
  chain: string;
  tokenAmount: number;
  tokenContract: string;
}
export interface IReward {
  _id: string;
  amount: string;
  place: string;
}

export interface IReward {
  place: string;
  amount: string;
}
export interface IPuzzle {
  id: string;
  title: string;
  downDescription: string;
  topDescription: string;
  mainDescription: string;
  start_date: string;
  end_date: string;
  image: string;
  steps: number;
  rule: string;
  requirements: IPuzzleRequirement;
  rewards: IReward[];
  isProd: boolean;
}

export interface IStats {
  _id: string;
  name: string;
  address: string;
  avatar: string;
  userId: string;
  rewardSum: string;
  puzzleId: string;
  status: string;
  start_date: string;
  end_date: string | null;
  stepCounter: number;
  answerCounter: number;
  message: string;
  isApproved: true;
}

export type RiddleType =
  | "text"
  | "picture"
  | "video"
  | "audio"
  | "richText"
  | "iFrame";

export interface IRiddle {
  _id: string;
  question: string;
  stepNumber: number;
  puzzleId: string;
  riddleType: RiddleType;
  media: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  message?: string;
  correctAnswer?: string;
}

export interface IAnswerForm {
  answer: string;
}

export interface ILeaderboardResults {
  userId: string;
  isApproved: boolean;
  end_date: string;
  answerCounter: number;
  elapsedTime: number;
  userName: string;
  userAddress: string;
  userAvatar: string;
  message: string;
}

export interface ICheckAnswer {
  message: string;
  nextRiddle?: IRiddle;
}
export interface IRiddleTypes {
  _id: string;
  riddleType: RiddleType;
}
export interface IAnswer {
  answer: string;
  createdAt: string;
  isCorrect: boolean;
}
interface IUser {
  address: string;
  avatar: string;
  name: string;
}
export interface IStatsForAdmin {
  answers: IAnswer[];
  end_date: string | null;
  isApproved: boolean;
  start_date: string;
  user: IUser;
  place: number;
  _id: string;
}

export interface IStatsForAdminResponse {
  data: IStatsForAdmin[];
  page: number;
  limit: number;
  totalPages: number;
  totalRecords: number;
}
