import axios from "axios";

const SEOUL_API_URL = `http://openapi.seoul.go.kr:8088/${process.env.REACT_APP_SEOUL_API_KEY}/json/InfoHappycard/1/999`;
const NAVER_GEOCODE_API_URL = `https://naveropenapi.apigw.ntruss.com/map-geocode/v2/geocode`;
export const requestSeoulApi = async () => {
  const res = await axios.get("data.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });

  return res.data.DATA;
};

export const requestGeocodeApi = async (query: string) => {
  const res = await axios.get(`/map-geocode/v2/geocode`, {
    params: {
      query,
    },
    headers: {
      "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_CLIENT_ID,
      "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_CLIENT_SECRET,
    },
  });

  const addresses = res.data.addresses;
  let latitude = 0;
  let longitude = 0;
  if (addresses) {
    const address = addresses[0];
    latitude = Number(address.x);
    longitude = Number(address.y);
    console.log(`address ${JSON.stringify(address)}`);
  }

  return { latitude, longitude };

  // axios
  //   .get(`/map-geocode/v2/geocode`, {
  //     params: {
  //       query,
  //     },
  //     headers: {
  //       "X-NCP-APIGW-API-KEY-ID": process.env.REACT_APP_NAVER_CLIENT_ID,
  //       "X-NCP-APIGW-API-KEY": process.env.REACT_APP_NAVER_CLIENT_SECRET,
  //     },
  //   })
  //   .then((res) => {
  //     const addresses = res.data.addresses;
  //     if (addresses) {
  //       const address = addresses[0];
  //       const latitude = Number(address.x);
  //       const longitude = Number(address.y);
  //     }
  //   });
};
