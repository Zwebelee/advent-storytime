import './App.css'
import AdventCalendar from "@/components/AdventCalendar.tsx";

function App() {

    return (
        <div className="min-h-screen w-full bg-[url('/app-bg.webp')] bg-cover bg-left">
            <div className="flex flex-col p-4 max-w-256 mx-auto">
                <AdventCalendar/>
            </div>
        </div>
    )
}

export default App

//#11074a