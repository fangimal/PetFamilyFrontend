import {
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	Heading,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import { Pet } from "../pages/Pets";

type Props = {
	pet: Pet;
};

const PetCard = ({ pet }: Props) => {
	return (
		<Card maxW="sm">
			<CardBody>
				<Image
					src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Cat_August_2010-4.jpg/1200px-Cat_August_2010-4.jpg"
					alt="Green double couch with wooden legs"
					borderRadius="lg"
				/>
				<Stack mt="6" spacing="3">
					<Heading size="md">{pet.nickName}</Heading>
					<Text>{pet.description}</Text>
					<Text color="blue.600" fontSize="2xl">
						{pet.contactPhoneNumber}
					</Text>
				</Stack>
			</CardBody>
			<Divider />
			<CardFooter>
				<ButtonGroup spacing="2">
					<Button variant="solid" colorScheme="blue">
						Приютить
					</Button>
					<Button variant="ghost" colorScheme="blue">
						Следить
					</Button>
				</ButtonGroup>
			</CardFooter>
		</Card>
	);
};

export { PetCard };
 