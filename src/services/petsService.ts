import axios from "axios";
import { Envelope } from "../types/Envelope";
import { Pet } from "../pages/Pets";


const PETS_URL = "http://localhost:5000/Pet";


export const getPets = async (): Promise<Pet[] | null> => {
	var response = await axios.get<Envelope<Pet[]>>(PETS_URL);

	return response.data.result;
};
