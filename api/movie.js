import fetch from "node-fetch";

const { APIKEY } = process.env;

export default async function handler(request, reponse) {
  const { title, page, id } = JSON.parse(request.body);
  const url = id
    ? `https://omdbapi.com?apikey=${APIKEY}&i=${id}&plot=full`
    : `https://omdbapi.com?apikey=${APIKEY}&s=${title}&page=${page}`;
  const res = await fetch(url);
  const json = await res.json();
  reponse.status(200).json(json);
}
