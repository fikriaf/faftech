import React, { useState, useMemo } from "react";
import PageWrapper from "../../components/PageWrapper";
import Card2 from "../../components/Card2";
import TrueFocus from "../../components/TrueFocus";
import "./Project.css"

const Project: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string>("all");

    const listProjects = [
        {
            title: "UIXO",
            category: "Website | AI",
            tags: ["vite", "react", "typescript", "tailwind"],
            url: "https://uixo.vercel.app",
            image: "/uixo/PreviewPC.jpg",
            logo: "/uixo/logo-nobg.png",
            source: "UIXO",
            content: [
                {
                    name: "About",
                    quote: "UIXO is an AI-powered application that transforms your component descriptions into production-ready code — supporting React TSX, HTML, JavaScript, CSS, and more.",
                    src: "/uixo/Prompt.jpg"
                },
                {
                    name: "Frontend Architecture",
                    quote: "React 18 with TypeScript using Vite as the build tool, Radix UI primitives with Tailwind CSS for styling, TanStack React Query for server state and caching, Wouter for routing, and React Hook Form for form handling.",
                    src: "/uixo/Prompt.jpg"
                },
                {
                    name: "New Features",
                    quote: "Live Preview — Supports React DOM and HTML in real-time. Reduced Lag — Improved rendering and processing performance. Iframe Refresh — Automatically updates the preview when code changes.",
                    src: "/uixo/LivePreviewPC.jpg"
                },
                {
                    name: "Output TSX",
                    quote: "Example output .tsx",
                    src: "/uixo/Output4.png"
                },
                {
                    name: "Output HTML",
                    quote: "Example output .html",
                    src: "/uixo/Output1.jpg"
                },
            ]
        },
        {
            title: "MCP Laravel UI",
            category: "MCP | AI",
            tags: ["python", "mcp"],
            url: "https://github.com/fikriaf/mcp_agents_create_laravel",
            image: "https://raw.githubusercontent.com/fikriaf/mcp_agents_create_laravel/refs/heads/main/image.png",
            logo: "/logo.webp",
            source: "mcp_agents_create_laravel",
            content: [
                {
                    name: "About",
                    quote: "An intelligent multi-agent system that automatically generates Laravel UI components from natural language prompts using AI agents.",
                    src: "https://raw.githubusercontent.com/fikriaf/mcp_agents_create_laravel/refs/heads/main/image.png"
                },
                {
                    name: "Feature",
                    quote: "AI-Powered UI Generation: Transform natural language descriptions into complete Laravel Blade components. Multi-Agent Architecture: Specialized agents handle different aspects of the generation process. Interactive Draft Preview: Preview HTML drafts in browser before generating Laravel components. Automatic Laravel Integration: Seamlessly moves generated components to your Laravel project. Component Validation: Built-in validation system ensures code quality. Route Generation: Automatically creates Laravel routes for your pages.",
                    src: "https://github.com/fikriaf/mcp_agents_create_laravel/blob/main/image3.png?raw=true"
                },
                {
                    name: "Tech Stack",
                    quote: "Prompt Processing: User input is expanded and detailed by the prompt expander → Draft Generation: Initial HTML draft is created for preview → Interactive Review: User can refine the design through iterative feedback → Component Planning: System analyzes and plans the component structure → Code Generation: Blade templates, components, and routes are generated → Validation: All generated code is validated for syntax and structure → Integration: Valid components are moved to the Laravel project → Launch: Application.",
                    src: "https://github.com/fikriaf/mcp_agents_create_laravel/blob/main/image2.png?raw=true"
                }
            ]
        },
        {
            title: "AssistMind AI",
            category: "Website | AI",
            tags: ["vite", "react", "typescript", "tailwind"],
            url: "https://shorturl.at/eyrsc",
            image: "/assistmind/image.png",
            logo: "/assistmind/logo.png",
            source: "AssistMind",
            content: [
                {
                    name: "About",
                    quote: "This is a modern full-stack AI chat application called 'AssistMind AI' - an executive assistant for strategic insights and analysis. The application features a React frontend with TypeScript, Express.js backend, and PostgreSQL database with Drizzle ORM. It provides a sophisticated chat interface with features like file uploads, prompt templates, message management, and a real-time preview system.",
                    src: "/assistmind/image.png"
                },
                {
                    name: "Frontend Architecture",
                    quote: "Framework: React 18 with TypeScript using Vite as the build tool. UI Library: Comprehensive design system built on Radix UI primitives with shadcn/ui components. Styling: Tailwind CSS with a custom dark theme using CSS variables for colors (obsidian, gold, platinum color palette). State Management: TanStack React Query for server state management and caching. Routing: Wouter for lightweight client-side routing. Form Handling: React Hook Form with Zod validation resolvers.",
                    src: "/assistmind/image.png"
                },
                {
                    name: "Backend Architecture",
                    quote: "Runtime: Node.js with Express.js framework using ESM modules. Database ORM: Drizzle ORM with PostgreSQL dialect for type-safe database operations. Data Storage: Dual storage approach with in-memory storage (MemStorage) for development and PostgreSQL for production. API Design: RESTful API with structured error handling and request logging middleware. Development Tools: Vite integration for hot module replacement in development mode.",
                    src: "/assistmind/image.png"
                },
            ]
        },
        {
            title: "Music API",
            category: "Backend | API",
            tags: ["express", "typescript"],
            url: "https://github.com/fikriaf/Music-API",
            image: "https://github.com/fikriaf/Music-API/blob/main/image.png?raw=true",
            logo: "/logo.webp",
            source: "Music-API",
            content: [
                {
                    name: "About",
                    quote: "Faftech Music API is a lightweight Node.js + Express application designed to serve and upload .mp3 audio files, complete with metadata duration extraction. It exposes two key endpoints: one for retrieving a list of available music files, and another for uploading new files.",
                    src: "https://github.com/fikriaf/Music-API/blob/main/Preview.png?raw=true"
                },
                {
                    name: "Tech Stack",
                    quote: "Node.js, Express.js, Multer (for handling file uploads), music-metadata (to parse audio metadata), TypeScript (optional).",
                    src: "https://github.com/fikriaf/Music-API/blob/main/Preview.png?raw=true"
                },
                {
                    name: "Feature",
                    quote: "Fast and simple API for .mp3 files. Static serving of uploaded audio. Extracts duration from audio metadata. Supports cross-origin requests (CORS). Upload .mp3 via multipart/form-data.",
                    src: "https://github.com/fikriaf/Music-API/blob/main/Preview.png?raw=true"
                },
            ]
        },
        {
            title: "AI Vision",
            category: "Website | AI",
            tags: ["vite", "react", "typescript", "tailwind", "express", "fast-api", "python"],
            url: "https://ai-vision-web.vercel.app/",
            image: "https://raw.githubusercontent.com/fikriaf/AI-Vision-Web/main/Preview.png",
            logo: "https://ai-vision-web.vercel.app/logo.png",
            source: "AI-Vision-Web",
            content: [
                {
                    name: "Frontend Components",
                    quote: "CameraFeed: Handles webcam access and real-time video streaming. ControlPanel: Configuration interface for detection parameters and model settings. PerformanceMetrics: Real-time system performance monitoring. UI Components: Complete Shadcn/ui component library for consistent interface.",
                    src: "https://raw.githubusercontent.com/fikriaf/AI-Vision-Web/main/Preview.png"
                },
                {
                    name: "Backend Services",
                    quote: "Halaman Update Nilai memungkinkan pengguna untuk mengatur sendiri bobot penilaian pada setiap mata kuliah. Komponen penilaian seperti Tugas, UTS, UAS, dan Partisipasi bisa diubah sesuai kebutuhan dengan total bobot 100%. Selain itu, tersedia tabel konversi nilai numerik ke dalam skala IPK (4.0), yang dapat disesuaikan secara fleksibel. Di bagian bawah, riwayat perubahan bobot dan aturan konversi juga ditampilkan untuk menjaga transparansi dan pelacakan perubahan.",
                    src: "https://raw.githubusercontent.com/fikriaf/AI-Vision-Web/main/image.png"
                },
                {
                    name: "Frontend Architecture",
                    quote: "Framework: React 18 with TypeScript. Build Tool: Vite for fast development and optimized builds. UI Framework: Shadcn/ui components built on Radix UI primitives. Styling: Tailwind CSS with CSS variables for theming. State Management: TanStack Query for server state management. Routing: Wouter for lightweight client-side routing.",
                    src: "https://raw.githubusercontent.com/fikriaf/AI-Vision-Web/main/Preview.png"
                },
                {
                    name: "Backend Architecture",
                    quote: "Primary Backend: Node.js with Express server. AI Processing: Separate Python FastAPI service for YOLO model inference. Communication: WebSocket connections for real-time data streaming. Session Management: In-memory storage with plans for database integration.",
                    src: "https://raw.githubusercontent.com/fikriaf/AI-Vision-Web/main/image.png"
                },
            ]
        },
        {
            title: "GPALytics",
            category: "Website",
            tags: ["vite", "react", "typescript", "bootstrap", "express", "mongodb"],
            url: "https://gpalytics-two.vercel.app/",
            image: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview.png",
            logo: "https://gpalytics-two.vercel.app/assets/logo-B8MVdj6B.png",
            source: "GPAlytics_FrontEnd",
            content: [
                {
                    name: "Dashboard",
                    quote: "Tampilan dashboard GPAnalytics dirancang untuk memberikan gambaran menyeluruh tentang performa akademik pengguna. Di sisi kiri terdapat sidebar navigasi yang terdiri dari beberapa menu utama: Dashboard sebagai halaman beranda yang menampilkan ringkasan IPK dan IPS; Mahasiswa untuk mengakses data mahasiswa; Update Nilai guna memperbarui nilai akademik; Statistik Akademik untuk menampilkan analisis performa belajar; serta Support Center sebagai pusat bantuan. Di bagian atas dashboard utama, ditampilkan informasi penting seperti IPK terbaru, IPS saat ini, serta prediksi IPK berikutnya, lengkap dengan grafik perkembangan nilai dari semester ke semester. Di bawahnya, pengguna bisa melihat daftar mata kuliah yang sedang diambil beserta proporsi tugas, UTS, dan UAS. Terdapat pula fitur AI Consultant yang siap membantu secara otomatis, seperti membuat jadwal belajar atau menjelaskan konsep tertentu. Selain itu, dashboard juga menampilkan daftar mata kuliah dengan nilai tertinggi dan rekomendasi pembelajaran, yang membantu pengguna untuk fokus pada area pengembangan seperti algoritma dan pemrograman. Antarmukanya bersih, responsif, dan informatif, sangat membantu bagi mahasiswa dalam memantau dan meningkatkan performa akademik mereka.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview.png"
                },
                {
                    name: "Chatbot",
                    quote: "Fitur AI Chat Consultation menjadi salah satu keunggulan dari dashboard GPAnalytics. Fitur ini memungkinkan pengguna untuk berinteraksi langsung dengan model AI cerdas seperti DeepSeek-R1 70B untuk menjawab pertanyaan seputar pembelajaran, seperti penjelasan konsep AI, pembuatan jadwal belajar, atau analisis performa akademik secara otomatis. Tampilan AI chat ini sederhana dan modern, memberi pengalaman konseling akademik digital yang interaktif dan personal.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview6.png"
                },
                {
                    name: "Mahasiswa",
                    quote: "Halaman Mahasiswa dalam GPAnalytics menampilkan informasi pribadi pengguna secara lengkap, termasuk nama, email, NIM, program studi, serta status dan angkatan. Di bagian tengah layar, terdapat ringkasan performa akademik yang terdiri dari IPK semester ini, mata kuliah dengan nilai terbaik, jumlah SKS yang telah ditempuh, dan prediksi tahun kelulusan. Semua informasi ini membantu pengguna untuk memantau progres studinya secara real time dan memahami sejauh mana mereka mendekati kelulusan.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview2.png"
                },
                {
                    name: "Update Nilai",
                    quote: "Halaman Update Nilai memungkinkan pengguna untuk mengatur sendiri bobot penilaian pada setiap mata kuliah. Komponen penilaian seperti Tugas, UTS, UAS, dan Partisipasi bisa diubah sesuai kebutuhan dengan total bobot 100%. Selain itu, tersedia tabel konversi nilai numerik ke dalam skala IPK (4.0), yang dapat disesuaikan secara fleksibel. Di bagian bawah, riwayat perubahan bobot dan aturan konversi juga ditampilkan untuk menjaga transparansi dan pelacakan perubahan.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview3.png"
                },
                {
                    name: "Statistik Akademik",
                    quote: "Pada halaman Statistik Akademik, pengguna disuguhkan berbagai data visual terkait perkembangan nilai selama beberapa semester. Grafik utama memperlihatkan tren nilai Tugas, UTS, dan UAS untuk masing-masing semester, disertai rata-rata nilai keseluruhan. Selain itu, bagian atas halaman juga menyajikan ringkasan berupa total mata kuliah, total SKS yang sudah ditempuh, dan nilai rata-rata keseluruhan. Halaman ini membantu mahasiswa untuk melakukan analisis mandiri terhadap performa akademiknya dari waktu ke waktu.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview4.png"
                },
                {
                    name: "Support Center",
                    quote: "Sementara itu, halaman Support Center dirancang sebagai pusat bantuan interaktif. Di dalamnya terdapat panduan penggunaan aplikasi, penjelasan tentang cara input nilai, melihat grafik IPK, memanfaatkan fitur prediksi akademik, dan memahami rekomendasi yang diberikan oleh sistem. Ada pula bagian FAQ, kebijakan privasi, dan kontak pengembang jika pengguna membutuhkan bantuan lebih lanjut. Semua informasi di halaman ini disusun dengan bahasa yang ramah pengguna untuk mempermudah navigasi dan pemahaman sistem.",
                    src: "https://raw.githubusercontent.com/fikriaf/GPAlytics_FrontEnd/main/Preview5.png"
                }
            ]
        },
        {
            title: "Wekker",
            category: "Website",
            tags: ["laravel", "javascript", "bootstrap", "css", "mysql"],
            url: "https://wekker.my.id",
            image: "https://github.com/user-attachments/assets/5a729bd5-603c-49b4-b9e8-1f2d95930075",
            logo: "https://raw.githubusercontent.com/fikriaf/wekker/refs/heads/main/public/wekker_dashboard/sources/logo/WEKKER.png",
            source: "wekker",
            content: [
                {
                    name: "Dashboard",
                    quote: "🔑 Key Features include: 🧠 Generate UI components from natural language prompts, ⚡ Real-time code streaming (see code as it’s generated), 👀 Live preview without refreshing or rebuilding, 🧩 Clean, separated output: HTML, CSS, and JS, 📱 Responsive layout powered by Bootstrap, 🖥️ Backend built with Laravel, 🪶 Lightweight, fast, and developer-friendly interface, 🔓 Easy login (no email verification), and ♾️ Unlimited code generation requests.",
                    src: "https://github.com/fikriaf/wekker/blob/main/Preview.png?raw=true"
                },
                {
                    name: "File Manager",
                    quote: "The File Manager section provides an intuitive interface for uploading, renaming, and deleting your files. You can manage multiple files effortlessly with quick access buttons for actions like view, duplicate, or remove. Uploaded files are neatly listed with timestamp details, and you can open them instantly inside the editor. This feature streamlines your workflow by keeping all your assets organized and ready to use in your projects.",
                    src: "https://github.com/fikriaf/wekker/blob/main/Preview2.png?raw=true"
                },
                {
                    name: "API Management",
                    quote: "The API Management panel allows users to securely manage their API keys for accessing the code generation service. You can generate, copy, or revoke your key with a single click. The interface is clean and straightforward, showing key status and creation time, making it easy to track and control access. It’s designed for developers who want to integrate Wekker’s features into their own applications with minimal setup.",
                    src: "https://github.com/fikriaf/wekker/blob/main/Preview3.png?raw=true"
                },
                {
                    name: "Tech Stack",
                    quote: "🧰 The project is built using a modern and efficient tech stack. At the core, it uses the Laravel framework (PHP) to handle backend operations and routing. The frontend is crafted with JavaScript, CSS, and styled using Bootstrap for responsive design. Data is stored and managed through a MySQL database. For real-time interaction, the app uses a custom Laravel controller to handle code streaming seamlessly.",
                    src: "https://github.com/fikriaf/wekker/blob/main/Preview4.png?raw=true"
                }
            ]
        }
    ]

    const allTags = useMemo(() => {
        const tags = new Set<string>();
        listProjects.forEach(project => {
            project.tags.forEach(tag => tags.add(tag));
        });
        return Array.from(tags).sort();
    }, [listProjects]);

    const filteredProjects = useMemo(() => {
        if (selectedTag === "all") return listProjects;
        return listProjects.filter(project => 
            project.tags.includes(selectedTag)
        );
    }, [listProjects, selectedTag]);

    return (
        <PageWrapper direction="left">
            {/* CONTENT */}
            <div className="container-fluid min-vh-100 bg-transparent mb-5 overflow-x-hidden">
                <div className="container-fluid indukProject">
                    {/* Heading */}
                    <div className="mb-5" style={{ width: "100%" }}>
                        <TrueFocus
                            sentence="My Project"
                            manualMode={false}
                            blurAmount={0}
                            borderColor="var(--primary)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>

                    {/* Filter Buttons */}
                    <div className="filter-container d-flex px-3 flex-wrap gap-3 justify-content-center mb-4">
                        <button 
                            className={`filter-btn ${selectedTag === "all" ? "active bg-dark text-white" : ""}`}
                            onClick={() => setSelectedTag("all")}
                        >
                            <span className="filter-text">All Projects</span>
                            <div className="filter-glow"></div>
                        </button>
                        {allTags.map(tag => (
                            <button 
                                key={tag}
                                className={`filter-btn ${selectedTag === tag ? "active" : ""}`}
                                onClick={() => setSelectedTag(tag)}
                                data-tech={tag}
                            >
                                <span className="filter-icon">
                                    {tag === "react"}
                                    {tag === "typescript"}
                                    {tag === "vite"}
                                    {tag === "tailwind"}
                                    {tag === "laravel"}
                                    {tag === "javascript"}
                                    {tag === "bootstrap"}
                                    {tag === "express"}
                                    {tag === "mongodb"}
                                    {tag === "mysql"}
                                    {tag === "python"}
                                    {tag === "fast-api"}
                                    {tag === "css"}
                                    {!["react", "typescript", "vite", "tailwind", "laravel", "javascript", "bootstrap", "express", "mongodb", "mysql", "python", "fast-api", "css"].includes(tag)}
                                </span>
                                <span className="filter-text">{tag}</span>
                                <div className="filter-glow"></div>
                            </button>
                        ))}
                    </div>
                    
                    {/* Card */}
                    <div className="mt-2 row g-md-5 cardProject">
                        {filteredProjects.map((item, idx) => (
                            <div key={idx} className="col-md-4 col-12 listProject" style={{height: "15rem", margin: "3% 0"}}>
                                <Card2 title={item.title} category={item.category} content={item.content}
                                tags={item.tags} img={item.image} url={item.url} logo={item.logo} source={item.source} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Back to Top */}
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top">
                <i className="bi bi-arrow-up"></i>
            </a>
        </PageWrapper>
    )
}

export default Project;