export function sendEmail(email, subject, body) {
  return new Promise((resolve, reject) => {
    if (email === undefined || email.length === 0) {
      reject(new Error("Error email is missing"));
    }

    if (subject === undefined || subject.length === 0) {
      reject(new Error("Error subject is missing"));
    }

    if (body === undefined || body.length === 0) {
      reject(new Error("Error body is missing"));
    }

    setTimeout(() => {
      resolve({ email, subject, body });
    }, 2000);
  });
}
