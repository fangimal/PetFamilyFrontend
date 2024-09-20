import { createStandaloneToast } from "@chakra-ui/react";
import axios from "axios";

const { toast } = createStandaloneToast();

export const handleError = (error: any) => {
	if (axios.isAxiosError(error)) {
		const err = error.response;

		for (const errorData of err?.data?.errorInfo) {
			const code = errorData.errorCode;
			const message = errorData.errorMessage;

			toast({
				title: code,
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		}
	}
};
