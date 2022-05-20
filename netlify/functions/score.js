const axios = require('axios');

exports.handler = async function (event, context) {
  // Retreive users from team
  const users = (await axios.get(`${process.env.CTF_API_URL}/api/v1/users?affiliation=${process.env.VITE_AFFILIATION}`))
    .data;

  if (!users.success) {
    return {
      statusCode: 500,
      body: 'Could not retreive teams',
    };
  }

  const result = await Promise.all(
    users.data.map(async (user) => {
      const solves = (await axios.get(`${process.env.CTF_API_URL}/api/v1/users/${user.id}/solves`)).data;

      if (!solves.success) {
        return {
          statusCode: 500,
          body: `Could not retreive solves for user ${user.name}`,
        };
      }

      return solves;
    })
  );

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};
