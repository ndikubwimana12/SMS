
import { Link } from "react-router-dom";
import {
    Code2,
    Laptop,
    Users,
    ShieldCheck,
    ArrowRight,
    CheckCircle2,

} from "lucide-react";

function Home() {
    return (
        <div className="min-h-screen bg-slate-50 text-slate-800">

            {/* Navbar */}
            <nav className="bg-white border-b border-slate-200 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

                    <Link to="/" className="flex items-center gap-2">
                        <div className="bg-blue-600 text-white p-2 rounded-xl">
                            <Code2 size={27} />
                        </div>
                        <h1 className="text-2xl font-extrabold">
                            CodeRwanda <span className="text-pink-700">Tech</span>
                        </h1>
                    </Link>

                    <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                        <a href="#home" className="hover:text-blue-600">Home</a>
                        <a href="#about" className="hover:text-blue-600">About</a>
                        <a href="#services" className="hover:text-blue-600">Services</a>
                        <a href="#contact" className="hover:text-blue-600">Contact</a>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/"
                            className="hidden sm:block px-5 py-2 font-semibold hover:text-blue-600"
                        >
                            Login
                        </Link>
                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white px-5 py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </nav>

            {/* Hero Section */}
            <section id="home" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
                <div className="grid md:grid-cols-2 gap-12 items-center">

                    <div>
                        <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                            Welcome to CodeRwanda Tech
                        </span>

                        <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
                            Building Digital
                            <span className="text-blue-600"> Solutions</span>
                            for a Better Future.
                        </h2>

                        <p className="text-lg text-slate-600 leading-relaxed mb-8">
                            We empower individuals and businesses through innovative
                            technology, professional training, and practical digital
                            solutions that create opportunities.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <Link
                                to="/signup"
                                className="bg-blue-600 text-white px-7 py-3.5 rounded-lg font-bold hover:bg-blue-700 flex items-center gap-2"
                            >
                                Get Started <ArrowRight size={19} />
                            </Link>

                            <a
                                href="#about"
                                className="border border-slate-300 px-7 py-3.5 rounded-lg font-bold hover:bg-slate-100"
                            >
                                Learn More
                            </a>
                        </div>

                        <div className="flex gap-6 mt-10">
                            <div>
                                <h3 className="text-2xl font-extrabold text-blue-600">100+</h3>
                                <p className="text-sm text-slate-500">People Reached</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-blue-600">10+</h3>
                                <p className="text-sm text-slate-500">Projects</p>
                            </div>
                            <div>
                                <h3 className="text-2xl font-extrabold text-blue-600">2+</h3>
                                <p className="text-sm text-slate-500">Years Experience</p>
                            </div>
                        </div>
                    </div>

                    {/* Hero Visual */}
                    <div className="relative">
                        <div className="bg-blue-100 rounded-3xl p-8 md:p-12">
                            <div className="bg-white rounded-2xl shadow-xl p-8">
                                <div className="flex justify-between items-center mb-8">
                                    <div>
                                        <p className="text-sm text-slate-500">Technology for everyone</p>
                                        <h3 className="text-2xl font-bold">Our Digital World</h3>
                                    </div>
                                    <Code2 size={40} className="text-blue-600" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="bg-blue-50 p-5 rounded-xl">
                                        <Laptop size={35} className="text-blue-600 mb-3" />
                                        <h4 className="font-bold">Technology</h4>
                                        <p className="text-sm text-slate-500 mt-1">Smart digital solutions</p>
                                    </div>

                                    <div className="bg-pink-50 p-5 rounded-xl">
                                        <Users size={35} className="text-pink-700 mb-3" />
                                        <h4 className="font-bold">Training</h4>
                                        <p className="text-sm text-slate-500 mt-1">Skills and knowledge</p>
                                    </div>

                                    <div className="bg-green-50 p-5 rounded-xl">
                                        <ShieldCheck size={35} className="text-green-600 mb-3" />
                                        <h4 className="font-bold">Innovation</h4>
                                        <p className="text-sm text-slate-500 mt-1">Solutions for tomorrow</p>
                                    </div>

                                    <div className="bg-amber-50 p-5 rounded-xl">
                                        <Code2 size={35} className="text-amber-600 mb-3" />
                                        <h4 className="font-bold">Development</h4>
                                        <p className="text-sm text-slate-500 mt-1">Building the future</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* About */}
            <section id="about" className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                        Who We Are
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-5">
                        Technology That Creates Opportunities
                    </h2>
                    <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                        CodeRwanda Tech is committed to bridging the gap between
                        technology and opportunity. We help individuals and
                        organizations grow through digital innovation, practical
                        training, and reliable technology services.
                    </p>
                </div>
            </section>

            {/* Services */}
            <section id="services" className="max-w-7xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <p className="text-blue-600 font-bold uppercase tracking-widest text-sm">
                        What We Do
                    </p>
                    <h2 className="text-3xl md:text-4xl font-extrabold mt-3">
                        Our Services
                    </h2>
                    <p className="text-slate-500 mt-3">
                        Helping people and businesses succeed through technology.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {[
                        {
                            title: "Technology Solutions",
                            desc: "Modern websites, software development and digital solutions for businesses.",
                        },
                        {
                            title: "Professional Training",
                            desc: "Practical technology training designed to build professional skills.",
                        },
                        {
                            title: "Internship Programs",
                            desc: "Practical learning opportunities that prepare students for the job market.",
                        },
                    ].map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition">
                            <CheckCircle2 className="text-blue-600 mb-5" size={32} />
                            <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                            <p className="text-slate-600 leading-relaxed">{service.desc}</p>
                        </div>
                    ))}

                </div>
            </section>

            {/* Call to Action */}
            <section id="contact" className="bg-blue-700 py-16">
                <div className="max-w-5xl mx-auto px-6 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-5">
                        Ready to Grow With Technology?
                    </h2>
                    <p className="text-blue-100 mb-8 text-lg">
                        Join CodeRwanda Tech and become part of the digital future.
                    </p>
                    <Link
                        to="/signup"
                        className="inline-flex items-center gap-2 bg-white text-blue-700 px-8 py-3 rounded-lg font-bold hover:bg-slate-100"
                    >
                        Join Us <ArrowRight size={19} />
                    </Link>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-300 py-8">
                <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <h3 className="text-xl font-bold text-white">
                        CodeRwanda <span className="text-pink-500">Tech</span>
                    </h3>
                    <p className="text-sm text-slate-400">
                        © {new Date().getFullYear()} CodeRwanda Tech. All rights reserved.
                    </p>
                </div>
            </footer>

        </div>
    );
}

export default Home;
