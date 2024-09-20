import ReactDOM from "react-dom/client";
import './index.css'
import { ChakraProvider, theme } from '@chakra-ui/react'
import { RouterProvider } from "react-router-dom";
import { router } from "./route";
import { AuthProvider } from "./providers/AuthProvider";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <ChakraProvider theme={theme}>
    	<AuthProvider>
			<RouterProvider router={router} />
		</AuthProvider>
    </ChakraProvider>
)
