    import { ArrowRight, Download } from '@/components/icons'
    import { profile } from '@/content/profile'
    import Link from 'next/link'
    //import Image from "next/image";
    
    export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-slate-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900" />
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-20 dark:bg-blue-900 dark:opacity-10" />
        <div className="absolute bottom-0 left-0 -z-10 w-96 h-96 bg-cyan-100 rounded-full blur-3xl opacity-20 dark:bg-cyan-900 dark:opacity-10" />
        {/*
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">

                <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                    <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                    {profile.location}
                    </span>
                </div>

                <div className="space-y-4">
                    <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                    {profile.name}
                    </p>

                    <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                    {profile.headline}
                    </h1>
                </div>

                <p className="text-xl text-slate-700 dark:text-slate-300 max-w-2xl">
                    {profile.heroSummary}
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
                    {profile.stats.map((stat) => (
                    <div key={stat.label}>
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                        {stat.value}
                        </div>
                        <p className="text-slate-600 dark:text-slate-400">
                        {stat.label}
                        </p>
                    </div>
                    ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                    <Link
                    href="/projects"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
                    >
                    View My Work <ArrowRight size={20} />
                    </Link>

                    <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
                    >
                    Get in Touch
                    </Link>

                    <Link
                    href="/resume"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
                    >
                    <Download size={20} />
                    Resume
                    </Link>
                </div>
                </div>

                <div className="flex justify-center lg:justify-end">
                <div className="relative">

                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 blur-3xl opacity-25 scale-110"></div>

                    <div className="absolute inset-0 rounded-full border-2 border-blue-500/40 animate-spin [animation-duration:20s]"></div>

                        <Image src="/profile.png"
                        alt={profile.name}
                        width={420}
                        height={420}
                        priority className="relative rounded-full object-cover border-8 border-white dark:border-slate-800 shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
        */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10 space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
            <span className="w-2 h-2 bg-blue-600 rounded-full" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                {profile.location}
            </span>
            </div>

            <div className="space-y-4">
            <p className="text-lg font-semibold text-blue-600 dark:text-blue-400">
                {profile.name}
            </p>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 dark:text-white leading-tight">
                {profile.headline}
            </h1>
            </div>

            <p className="text-xl text-slate-700 dark:text-slate-300 max-w-3xl">
            {profile.heroSummary}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-6">
            {profile.stats.map((stat) => (
                <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                    {stat.value}
                </div>
                <p className="text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
            ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
            <Link
                href="/projects"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
                View My Work <ArrowRight size={20} />
            </Link>
            <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
            >
                Get in Touch
            </Link>
            <Link
                href="/resume"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 text-slate-900 dark:text-white font-semibold rounded-lg transition-colors"
            >
                <Download size={20} /> Resume
            </Link>
            </div>
        </div>        
        </section>
    )
    }
