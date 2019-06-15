interface Validator {
  [key: string]: (value: string) => boolean;
}
export const validator: Validator = {
  // https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript
  mail: (email: string) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  },
  password: (password: string) => (password ? true : false)
};
