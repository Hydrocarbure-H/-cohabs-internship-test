// src/components/ChatMessage.js
import React from 'react';

function Message({message, isUser})
{
    return (
        <div className={`p-2 my-2 rounded-lg ${isUser ? 'bg-blue-500 text-white self-end' : 'bg-gray-200'}`}>
            {message}
        </div>
    );
}

export default Message;
