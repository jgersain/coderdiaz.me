import { IShot } from "../interfaces";

export const getDribbbleShots = () => new Promise<IShot[]>((resolve, reject) => {
  fetch(`https://api.dribbble.com/v2/user/shots?per_page=5`, {
    headers: {
      Authorization: `Bearer c45be162c0dae8c4c3ea96a4ee734d910149c29b3f3c16abe8ed3595dc118e54`,
    },
  }).then(response => response.json())
    .then(data => resolve(data))
    .catch(err => reject(err));
});
