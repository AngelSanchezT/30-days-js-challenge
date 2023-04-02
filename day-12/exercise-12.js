export function validateForm(formData, registeredUsers) {

  const props = ["name", "lastname", "email", "password"];

  const missingProps = [];

  for (let prop of props) {
    if (!formData[prop]) {
      missingProps.push(prop);
    }
  }
    
  if (missingProps.length > 0) {
    throw new Error(`Faltan los siguientes campos: ${missingProps.join(", ")}`);
  }

  const isExist = (user) => user.email === formData.email;

  if (registeredUsers.find(isExist)) {
    throw new Error("El usuario ya existe");
  }

  delete formData.password;
  registeredUsers.push(formData);

  let { name, lastname } = formData;
  return `Tu registro fue exitoso ${name} ${lastname}`;
}
