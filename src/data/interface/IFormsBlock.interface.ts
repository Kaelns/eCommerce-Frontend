export default interface IFormsBlock {
  onChangeFunction: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    checkFunction: (value: string) => string
  ) => void;
  inputsError: { [key: string]: string };
}
