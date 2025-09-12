import ClientLayout from "@/layout/ClientLayout";
import Link from "next/link";

export default function CommunityPage () {
    return (
        <ClientLayout>
            <div className="pt-24 min-h-screen">
                <div className="container mx-auto px-4 py-16">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                            Comunidad Estudiantil
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Conecta, aprende y crece junto a tu comunidad estudiantil.
                            Descubre oportunidades, comparte experiencias y forma parte de algo más grande.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {/* Blog Card */ }
                        <Link
                            href="/community/blog"
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blog</h3>
                                <p className="text-gray-600 mb-6">
                                    Descubre artículos, noticias y experiencias compartidas por la comunidad estudiantil.
                                </p>
                                <div className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                                    Explorar Blog →
                                </div>
                            </div>
                        </Link>

                        {/* Student Council Card */ }
                        <Link
                            href="/community/student-council"
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consejo Estudiantil</h3>
                                <p className="text-gray-600 mb-6">
                                    Conoce a tus representantes estudiantiles y participa en las decisiones de la universidad.
                                </p>
                                <div className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                                    Ver Consejo →
                                </div>
                            </div>
                        </Link>

                        {/* Clubs Card */ }
                        <Link
                            href="/community/clubs"
                            className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 border border-gray-100 hover:border-primary/20"
                        >
                            <div className="text-center">
                                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                                    <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={ 2 } d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                    </svg>
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-4">Clubes</h3>
                                <p className="text-gray-600 mb-6">
                                    Únete a clubes estudiantiles y desarrolla tus pasiones junto a compañeros con intereses similares.
                                </p>
                                <div className="text-primary font-semibold group-hover:text-primary/80 transition-colors">
                                    Explorar Clubes →
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </ClientLayout>
    );
}
