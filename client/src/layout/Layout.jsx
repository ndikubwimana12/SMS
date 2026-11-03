import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Sidebar from "../components/Sidebar"
import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <div>
            <Navbar />
            <div className="flex gap-8">
            <Sidebar />
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}
