
import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="min-h-screen bg-white text-slate-800">

            {/* Navbar */}
            <nav className="w-full border-b shadow-sm">
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

                    <h1 className="text-2xl font-bold">
                        CodeRwanda <span className="text-pink-700">Tech</span>
                    </h1>

                    <div className="flex items-center gap-3">
                        <Link
                            to="/login"
                            className="px-5 py-2 font-semibold hover:text-blue-600"
                        >
                            Login
                        </Link>

                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white px-5 py-2 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Sign Up
                        </Link>
                    </div>

                </div>
            </nav>


            <section className="bg-blue-100">
                <div className="max-w-6xl mx-auto px-6 py-24 text-center">


                    <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
                        Empowering People Through
                        <span className="text-blue-600"> Technology</span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed mb-8">
                        We are BTECH class and we are learning abaout CI/CD and how to implement it in our application. This is a simple application that we have built to demonstrate the concept of CI/CD.
                    </p>

                    <div className="flex justify-center gap-4 flex-wrap">
                        <Link
                            to="/signup"
                            className="bg-blue-600 text-white px-7 py-3 rounded-lg font-semibold hover:bg-blue-700"
                        >
                            Get Started
                        </Link>

                        <a
                            href="home"
                            className="border border-slate-300 px-7 py-3 rounded-lg font-semibold hover:bg-white"
                        >
                            Explore Services
                        </a>
                    </div>

                </div>
            </section>

            {/* About Section */}
            <section className="max-w-6xl mx-auto px-6 py-16 text-center">

                <h2 className="text-3xl font-bold mb-5">Who We Are</h2>

                <p className="max-w-3xl mx-auto text-slate-600 leading-relaxed">
                    CodeRwanda Tech is a technology-focused company committed
                    to providing innovative digital solutions and practical
                    technology education. Our goal is to connect people with
                    opportunities through technology.
                </p>

            </section>

            <section id="services" className="bg-slate-50 py-16">

                <div className="max-w-6xl mx-auto px-6">

                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-3">Our Services</h2>
                        <p className="text-slate-600">
                            Discover what we offer.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6">

                        <div className="bg-white p-7 rounded-xl border">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">
                                Technology Solutions
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Website development, software solutions and
                                digital services for individuals and businesses.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-xl border">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">
                                Professional Training
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Practical technology training to develop
                                professional and digital skills.
                            </p>
                        </div>

                        <div className="bg-white p-7 rounded-xl border">
                            <h3 className="text-xl font-bold mb-3 text-blue-600">
                                Internship Programs
                            </h3>
                            <p className="text-slate-600 leading-relaxed">
                                Practical experience and learning opportunities
                                to prepare students for the job market.
                            </p>
                        </div>

                    </div>
                </div>

            </section>

            {/* Footer */}
            <footer className="bg-slate-900 text-white py-7">

                <div className="max-w-6xl mx-auto px-6 text-center">

                    <h2 className="text-xl font-bold mb-2">
                        CodeRwanda <span className="text-pink-500">Tech</span>
                    </h2>

                    <p className="text-slate-400 text-sm">
                        Empowering People Through Technology.
                    </p>

                    <p className="text-slate-500 text-xs mt-5">
                        © {new Date().getFullYear()} CodeRwanda Tech. All rights reserved.
                    </p>

                </div>

            </footer>

        </div>
    );
}

export default Home;
