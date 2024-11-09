import React from 'react';
import Window from './components/Window';

function App()
{
    return (
        <div className="flex justify-center h-screen bg-cohabbeige">
            <div className="w-full max-w-lg">
                <h1 className="text-2xl font-bold text-center my-4">Cohabot/FAQ</h1>
                <Window/>
            </div>
        </div>
    );
}

export default App;
