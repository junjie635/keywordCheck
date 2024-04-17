


import './App.css'
import { ChakraProvider } from "@chakra-ui/react"
// import Layout from '@/popup/conponents/layout'
import ChatBox from './conponents/chatBox'

function App() {

    return (
        <>
            <ChakraProvider>
                <ChatBox />
            </ChakraProvider>

        </>
    )
}

export default App
