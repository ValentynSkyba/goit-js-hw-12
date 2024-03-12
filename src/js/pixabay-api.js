// export function getPhotos(query, page) {
//   const API_KEY = '42801322-2062a11e10d8e6d4e2ccea576';
//   const BASE_URL = 'https://pixabay.com/';
//   const END_POINT = 'api/';
//   const params = new URLSearchParams({
//     key: API_KEY,
//     q: query,
//     page,
//     per_page: 15,
//     image_type: 'photo',
//     orientation: 'horizontal',
//     safesearch: true,
//   });

//   const url = `${BASE_URL}${END_POINT}/?${params}`;

//   return fetch(url).then(res => {
//     if (!res.ok) {
//       throw new Error(res.status);
//     }
//     return res.json();
//   });
// }

import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getPhotos(query, page, perPage) {
  const { data } = await axios.get('', {
    params: {
      key: '42801322-2062a11e10d8e6d4e2ccea576',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page,
      per_page: perPage,
    },
  });
  return data;
}
