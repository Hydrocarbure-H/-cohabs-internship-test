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

    const handleSend = () =>
    {
        if (message.trim())
        {
            onSend(message);
            setMessage("");
        }
    };

    return (
        <div className="flex p-4 border-t">
            <input
                type="text"
                className="flex-grow p-2 border rounded-lg"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message..."
            />
            <button onClick={handleSend} className="p-2 ml-2 bg-blue-500 rounded-lg text-white">
                Envoyer
            </button>
        </div>
    );
}

export default InputBox;
