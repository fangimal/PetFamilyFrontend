import { useEffect, useState } from "react";
import { getPets } from "../services/petsService";
import { PetCard } from "../components/PetCard";
import { Pet } from "../types/Pet";



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

			<PetCard 
			key={1}
			pet={{
				id: "1",
				nickName: "test",
				description: "test",
				contactPhoneNumber: "test",
			}}
			/>
						<PetCard 
			key={1}
			pet={{
				id: "1",
				nickName: "test",
				description: "test",
				contactPhoneNumber: "test",
			}}
			/>
						<PetCard 
			key={1}
			pet={{
				id: "1",
				nickName: "test",
				description: "test",
				contactPhoneNumber: "test",
			}}
			/>
		</section>
	);
};

export { Pets };
