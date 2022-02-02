export default function Validate (email, password, addToast) {
  const emailRegexp = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/; // eslint-disable-line no-useless-escape

  if (!emailRegexp.test(email) && password.length < 1) {
    addToast("Please submit a valid email address and password.", {
      appearance: "error",
      autoDismiss: true,
    });
    return false
  } else if (!emailRegexp.test(email)) {
    addToast("Please submit a valid email address.", {
      appearance: "error",
      autoDismiss: true,
    });
    return false
  } else if (password.length < 1) {
    addToast("Passwords must be at least one character in length.", {
      appearance: "error",
      autoDismiss: true,
    });
    return false
  } else {
    return true;
  }
};