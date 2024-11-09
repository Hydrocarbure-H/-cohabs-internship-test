import React, {useEffect, useRef, useState} from 'react';
import Message from './Message';
import InputBox from './InputBox';
import axios from 'axios';

function Window()
{
    // State to store messages
    const [messages, setMessages] = useState([]);
    // Display an indicator that the bot is typing
    const [isLoading, setIsLoading] = useState(false);
    // Reference to the last message
    const messagesEndRef = useRef(null);

    /**
     * Handle sending a message
     * This function will add the message to the list and send it to the backend
     * on /api/chat/new. The response will be added to the list, even if there is an error.
     * @param userMessage
     * @returns {Promise<void>}
     */
    const handleSendMessage = async (userMessage) =>
    {
        // Add user message to the list
        const newMessages = [...messages, {text: userMessage, isUser: true}];
        setMessages(newMessages);

        // Display the loading indicator
        setIsLoading(true);

        // Send the message to the backend on /api/chat/new
        try
        {
            const response = await axios.post('http://localhost:3001/api/chat/new', {message: userMessage});
            setMessages([...newMessages, {text: response.data.response, isUser: false}]);
        }
        catch (error)
        {
            setMessages([...newMessages, {text: "Error : Unable to get a response", isUser: false}]);
        }
        finally
        {
            setIsLoading(false);
        }
    };

    /**
     * Reference to the last message to scroll to it
     */
    useEffect(() =>
    {
        if (messagesEndRef.current)
        {
            messagesEndRef.current.scrollIntoView({behavior: "smooth"});
        }
    }, [messages]);

    return (
        <div
            className="flex flex-col  h-[calc(100vh-6rem)] p-4 border-0 rounded-2xl bg-white">
            <div className="flex flex-col flex-grow overflow-y-auto">
                {messages.map((msg, index) => (
                    <Message key={index} message={msg.text} isUser={msg.isUser}/>
                ))}
                {isLoading && (
                    <div className="text-gray-500 text-md italic mt-2">Cohabot is writing...</div>
                )}
                <div ref={messagesEndRef}/>
            </div>
            <InputBox onSend={handleSendMessage}/>
        </div>
    );
}

export default Window;
