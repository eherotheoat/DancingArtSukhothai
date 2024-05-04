export default interface IRejectValue {
  status: {
    code: string;
    message: string;
    description: string;
  };
  data: any;
}
