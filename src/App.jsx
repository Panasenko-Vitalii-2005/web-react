import Header from "./components/Header.jsx";
import Sidenav from "./components/Sidenav.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Contacts from "./pages/Contacts.jsx";
import About from "./pages/About.jsx";
import { useState } from "react";

function App() {
    const [page, setPage] = useState('home');

    return (
        <div className="layout bg-white dark:bg-gray-900 text-black dark:text-white min-h-screen">
            <Header onNavigate={setPage} />
            <Sidenav />
            <main className="main p-6">
                {page === "home" && <Home />}
                {page === "about" && <About />}
                {page === "contacts" && <Contacts/>}
            </main>
            <Footer />
        </div>
    )
}

export default App;
