const API_URL = "https://exp.host/--/api/v2/push/send";

type MessageT = {
  sound: string;
  title: string;
  body: string;
};

const sendNotification = async (token: string, options: MessageT) => {
  try {
    const message = { to: token, ...options };

  await fetch(API_URL, {
    method: "POST",
    headers: {
      host: "exp.host",
      accept: "application/json",
      "accept-encoding": "gzip, default",
      "content-type": "application/json",
    },
    body: JSON.stringify(message),
  });
  } catch (error) {
    console.log(error)
  } 
};

export default sendNotification
