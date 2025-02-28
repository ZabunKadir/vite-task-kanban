export const buildResponse = (data, message, status = 200) => {
  return { data: data, message: message, status: status };
};
