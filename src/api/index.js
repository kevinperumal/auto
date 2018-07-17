export const getVehicleData = searchParams => {
  return fetch(
    `https://qa878qmgjk.execute-api.us-east-1.amazonaws.com/dev?page=${
      searchParams.page
    }&price_min=${searchParams.min}&price_max=${searchParams.max}`,
    {
      headers: {
        "x-api-key": "cPvW4cvlX73o7WeloOBzeWfvrb4Kl12uw0olDp90"
      }
    }
  )
    .then(res => res.json())
    .catch(err => err);
};

export const updateViewCount = vin => {
  return fetch(`api/vehicles/view/${vin}`, {
    headers: ({
      "Content-Type": "application/json; charset=utf-8"
    }),
    method: "POST"
  }).then(res => res.json());
};

export const getVehicleDataVins = vins => {
  return fetch(`api/vehicles/views?vin=${vins}`)
    .then(res => res.json())
    .catch(err => err);
};
