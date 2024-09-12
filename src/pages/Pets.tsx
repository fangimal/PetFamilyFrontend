import { useEffect, useState } from "react";
import { getPets } from "../services/petsService";
import { PetCard } from "../components/PetCard";

export type Pet = {
	id: string,
	nickName: string,
	description: string,
	city: string,
	street: string,
	building: string,
	index: string,
	contactPhoneNumber: string,
	createDate: Date
  }

  const Pets = () => {
	const [pets, setPets] = useState<Pet[] | null>([]);

	useEffect(() => {
		const fetch = async () => {
			const petsResponse = await getPets();

			setPets(petsResponse);
		};

		fetch();
	}, []);

	return (
		<section className="w-full pt-7 grid gap-8 grid-cols-3">
			{pets?.map((p) => (
				<PetCard key={p.id} pet={p} />
			))}
		</section>
	);
};

export { Pets };
