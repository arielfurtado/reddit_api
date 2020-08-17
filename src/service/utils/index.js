const getDate = (Timestamp) => {
 const datePost = new Date(Timestamp * 1000);
 const todayDate = new Date();
 const diferenceInYears = todayDate.getFullYear() - datePost.getFullYear();
 const diferenceInMonth = todayDate.getMonth() - datePost.getMonth();
 const diferenceInDays = parseInt((todayDate.getTime() - datePost.getTime()) / (1000 * 3600 * 24));
 const diferenceInHours = parseInt(Math.abs(datePost.getTime() - todayDate.getTime()) / 3600000);
 const diferenceInMinutes = parseInt(Math.abs(datePost.getTime() - todayDate.getTime()) / 360000);
 const diferenceInSeconds = parseInt(Math.abs(datePost.getTime() - todayDate.getTime()) / 36000);

 switch (true) {
  case diferenceInYears > 0:
   return diferenceInYears === 1 ? `${diferenceInYears} ano` : `${diferenceInYears} anos`;
  case diferenceInMonth > 0:
   return diferenceInMonth === 1 ? `${diferenceInMonth} mês` : `${diferenceInMonth} mêses`;
  case diferenceInDays > 0:
   return diferenceInDays === 1 ? `${diferenceInDays} dia` : `${diferenceInDays} dias`;
  case diferenceInHours > 0:
   return diferenceInHours === 1 ? `${diferenceInHours} hora` : `${diferenceInHours} horas`;
  case diferenceInMinutes > 0:
   return diferenceInMinutes === 1 ? `${diferenceInMinutes} Minuto` : `${diferenceInMinutes} Minutos`;
  default:
   return diferenceInSeconds === 1 ? `${diferenceInSeconds} segundos` : `${diferenceInSeconds} segundos`;
 }
};

export default {
 getDate,
};
