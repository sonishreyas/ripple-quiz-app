export type AvatarDataType = {
  _id: string;
  avatarURL: string;
}

export type ProfileCtxType = {
  profileActiveTab: string;
  setProfileActiveTab: Function;
  avatarsData:  Array<AvatarDataType> | [];
}