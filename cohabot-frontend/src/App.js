import React from 'react';
import Window from './components/Window';

function App()
{
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center mb-4">Cohabot - The NextGen FAQ ChatBot</h1>
                <Window/>
            </div>
        </div>
    );
}

export default App;
