import axios from "axios";
import { useState } from "react";

export const ApiKitsu = axios.create({
    baseURL: `https://kitsu.io/api/edge`
})
export const headers = {
    'Accept': "application/vnd.api+json",
    'Content-Type': "application/vnd.api+json"
} 
export const Aventura = axios.create ({
    adventureUrl: `${ApiKitsu}/anime?page[10]=5&page[15]=0`
})

export const GetAnime = async () => {
    axios
    .get(Aventura)
    .then((resp) => {
      (resp.data);
      console.log(resp);
    })
    .catch((err) => console.log(err));
    
    // const dados = await axios.get(`${ApiKitsu}`);
    // return dados
}
