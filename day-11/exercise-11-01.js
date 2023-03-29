export function sendEmail(email, subject, body) {
  // Tu código aquí 👈
  
  if(email === undefined || email.length === 0) {
    throw new Error("Error email is missing");
    
  }

  return { email, subject, body};
}
