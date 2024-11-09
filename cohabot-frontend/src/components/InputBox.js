import React, {useState} from 'react';

/**
 * Input message component
 * @param onSend {function} - Callback when sending a message
 * @returns {Element}
 * @constructor
 */
function InputBox({onSend})
{
    const [message, setMessage] = useState("");

    /**
     * Handle sending the message
     */
    const handleSend = () =>
    {
        if (message.trim())
        {
            onSend(message);
            setMessage("");
        }
    };

    /**
     * Handle the Enter key to send the message
     * @param e
     */
    const handleKeyDown = (e) =>
    {
        if (e.key === 'Enter')
        {
            handleSend();
        }
    };

    return (
        <div className="flex p-4 border-t">
            <input
                type="text"
                className="flex-grow p-2 border rounded-lg md:w-auto w-3/4"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask anything..."
            />
            <button onClick={handleSend} className="p-2 ml-2 bg-cohabyellow rounded-lg text-cohabblack">
                Send
            </button>
        </div>
    );
}

export default InputBox;
