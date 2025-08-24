
import Header from '../components/navigation/Header';
import Footer from '../components/navigation/Footer';
import AiChatbot from '../components/chatbot/AiChatbot';

export default function Layout({ children }) {
    return (
        <div className="min-h-screen bg-white">
            <Header />
            <main>
                {children}
            </main>
            <Footer />
            <AiChatbot />
        </div>
    )
}
