export const getChatTime = date => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return `${hour}:${minutes} ${hour >= 12 ? 'PM' : 'AM'}`;
};

export const setDateChat = oldDate => {
  const year = oldDate.getFullYear();
  const month = oldDate.getMonth() + 1; //standar javascript dimulai dari 0, sehingga ditambah 1 agar januari = 1
  const date = oldDate.getDate();

  return `${year}-${month}-${date}`;
};
