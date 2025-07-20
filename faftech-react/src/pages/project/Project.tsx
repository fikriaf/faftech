import React from "react";
import PageWrapper from "../../components/PageWrapper";
import Card2 from "../../components/Card2";
import TrueFocus from "../../components/TrueFocus";
import "./Project.css"

const Project: React.FC = () => {

    const listProjects = [
        {
            title: "AI Vision",
            category: "Website | AI",
            tags: ["react", "typescript", "express", "fast-api", "python"],
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
            tags: ["react", "typescript", "express", "mongodb"],
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
            tags: ["laravel", "filament", "mysql"],
            url: "https://wekker.vercel.app",
            image: "https://github.com/user-attachments/assets/5a729bd5-603c-49b4-b9e8-1f2d95930075",
            logo: "https://raw.githubusercontent.com/fikriaf/wekker/refs/heads/main/public/wekker_dashboard/sources/logo/WEKKER.png",
            source: "wekker",
            content: [
                {
                    name: "Dashboard",
                    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum itaque quam eveniet tenetur. Nostrum, possimus! Inventore omnis eaque non magnam? Molestias, earum tempore! Porro nam ea consectetur officiis quam? Fuga rem vero eos eius itaque magni libero! Obcaecati quam quia dolor ratione necessitatibus culpa explicabo, est a aliquid sunt numquam nisi consequuntur nostrum cum molestias incidunt odio blanditiis ab.",
                    src: "https://github.com/user-attachments/assets/5a729bd5-603c-49b4-b9e8-1f2d95930075"
                },
                {
                    name: "Dashboard",
                    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum itaque quam eveniet tenetur. Nostrum, possimus! Inventore omnis eaque non magnam? Molestias, earum tempore! Porro nam ea consectetur officiis quam? Fuga rem vero eos eius itaque magni libero! Obcaecati quam quia dolor ratione necessitatibus culpa explicabo, est a aliquid sunt numquam nisi consequuntur nostrum cum molestias incidunt odio blanditiis ab.",
                    src: "https://github.com/user-attachments/assets/5a729bd5-603c-49b4-b9e8-1f2d95930075"
                },
                {
                    name: "Dashboard",
                    quote: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae cum itaque quam eveniet tenetur. Nostrum, possimus! Inventore omnis eaque non magnam? Molestias, earum tempore! Porro nam ea consectetur officiis quam? Fuga rem vero eos eius itaque magni libero! Obcaecati quam quia dolor ratione necessitatibus culpa explicabo, est a aliquid sunt numquam nisi consequuntur nostrum cum molestias incidunt odio blanditiis ab.",
                    src: "https://github.com/user-attachments/assets/5a729bd5-603c-49b4-b9e8-1f2d95930075"
                }
            ]
        }
    ]

    return (
        <PageWrapper direction="left">
            {/* CONTENT */}
            <div className="container-fluid min-vh-100 bg-transparent mb-5">
                <div className="container-fluid indukProject">
                    {/* Heading */}
                    <div className="" style={{ width: "100%" }}>
                        <TrueFocus
                            sentence="My Project"
                            manualMode={false}
                            blurAmount={0}
                            borderColor="var(--primary)"
                            animationDuration={2}
                            pauseBetweenAnimations={1}
                        />
                    </div>
                    {/* Card */}
                    <div className="mt-5 row g-md-5 cardProject">
                        {listProjects.map((item, idx) => (
                            <>
                            <div className="col-md-4 col-12 listProject" style={{height: "15rem", margin: "5rem 0"}}>
                                <Card2 title={item.title} category={item.category} content={item.content}
                                tags={item.tags} img={item.image} url={item.url} logo={item.logo} source={item.source} />
                            </div>
                            </>
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