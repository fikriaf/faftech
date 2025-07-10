import React from "react";
import CategoryGroup from "./CategoryGroup";
import "./styles/ListArticles.css"

const OSCArticleSection: React.FC = () => {
  const oscArticles = [
    {
      href: "https://osc.medcom.id/community/teknologi-makin-maju-angka-kelahiran-di-indonesia-alami-penurunan-6911",
      img: "https://osccdn.medcom.id/images/content/2024/08/05/bdd9a3c3ec1b3d5b4fd6248095c3a23c.jpg",
      title: "Teknologi Makin Maju, Angka Kelahiran di Indonesia Alami Penurunan?",
    },
    {
      href: "https://osc.medcom.id/community/bedakan-saat-menggunakan-0-0-0-0-dan-127-0-0-1-6910",
      img: "https://osccdn.medcom.id/images/content/2024/08/05/8c31c6bc2ec1aa326514d5e45ba5a2aa.jpg",
      title: "Bedakan Saat Menggunakan 0.0.0.0 dan 127.0.0.1",
    },
    {
      href: "https://osc.medcom.id/community/kenalan-tentang-framework-node-js-dan-express-js-6909",
      img: "https://osccdn.medcom.id/images/content/2024/08/05/9111ea4b3b60cfd9e040b1a8fb8a3ef0.jpg",
      title: "Kenalan Tentang Framework Node.js dan Express.js",
    },
    {
      href: "https://osc.medcom.id/community/kunci-pembelajaran-kuliah-di-era-ai-6798",
      img: "https://osccdn.medcom.id/images/content/2024/07/04/e1a467f6d5aa8ef5cd2759b995571d3f.jpg",
      title: "Kunci Pembelajaran Kuliah di Era AI",
    },
    {
      href: "https://osc.medcom.id/community/para-backender-pemula-wajib-lihat-framework-backend-ini-6799",
      img: "https://osccdn.medcom.id/images/content/2024/07/04/77f9e51de9ccce1192b03c34105b3f0f.jpg",
      title: "Para Backender Pemula, Wajib Lihat Framework Backend ini",
    },
    {
      href: "https://osc.medcom.id/community/siapkan-dan-pahami-ini-jika-anda-ingin-menggeluti-bidang-machine-learning-ai-6744",
      img: "https://osccdn.medcom.id/images/content/2024/06/05/cee0ec40a51124f0d6e21fbb6257d98b.jpg",
      title: "Siapkan dan Pahami Ini jika Anda Ingin Menggeluti Bidang Machine Learning AI",
    },
    {
      href: "https://osc.medcom.id/community/perhatikan-kunci-pemahaman-deep-learning-pada-framework-keras-6746",
      img: "https://osccdn.medcom.id/images/content/2024/06/05/bbd3caa1b69f60b8d7385cad3f076c03.jpg",
      title: "Perhatikan Kunci Pemahaman Deep Learning pada Framework Keras",
    },
    {
      href: "https://osc.medcom.id/community/pentingnya-ethical-security-dalam-sebuah-perusahaan-6592",
      img: "https://osccdn.medcom.id/images/content/2024/04/26/51d60ee96bc21f143a9f203f3a06aada.jpg",
      title: "Pentingnya ethical security dalam sebuah perusahaan",
    },
    {
      href: "https://osc.medcom.id/community/solusi-kultur-negatif-pada-remaja-urban-6514",
      img: "https://osccdn.medcom.id/images/content/2024/03/13/f7a1c953cc584a534908579d55838e9d.jpg",
      title: "Solusi Kultur Negatif Pada Remaja Urban",
    },
    {
      href: "https://osc.medcom.id/community/perkembangan-kecanggihan-ai-malah-makin-melemahkan-keamanan-cyber-6354",
      img: "https://osccdn.medcom.id/images/content/2023/12/30/b2aa67a3214041c52fe36289f65330bc.jpg",
      title: "Perkembangan Kecanggihan AI malah Makin Melemahkan Keamanan Cyber",
    },
    {
        title: "Rahasia Loading Website Kilat: Optimasi Gambar dan Media dengan HTML & CSS",
        img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7whg5cv6n2tz5x2cky02sc.jpg",
        href: "https://kumparan.com/fikri-af/rahasia-loading-website-kilat-optimasi-gambar-dan-media-dengan-html-and-css-23imSyufXmO",
    },
    {
        title: "Comparing FastAPI vs Flask: Framework Python Mana yang Lebih Kuat di Industri?",
        img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7t4y7f1d8dbcjvxk1he3zg.jpg",
        href: "https://kumparan.com/fikri-af/comparing-fastapi-vs-flask-framework-python-mana-yang-lebih-kuat-di-industri-23ilodDk2ti",
    },
    {
        title: "Skalabilitas Tanpa Batas: Aplikasi Mikroservices dengan Kubernetes dan Docker",
        img: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7eqarr4ma6qx0fqtvwm4rw.jpg",
        href: "https://kumparan.com/fikri-af/skalabilitas-tanpa-batas-aplikasi-mikroservices-dengan-kubernetes-dan-docker-23iiYV5odeK",
    },
    {
        title: "Perihal Deepfake, Data Pengguna Internet di Indonesia Terlalu Rentan?",
        img: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-142342416-futuristic-face-scan-identity-hologram-with-data-and-personal-information-d.jpg?tr=w-730,h-486,fo-center",
        href: "https://www.goodnewsfromindonesia.id/2023/12/15/perihal-deepfake-data-pengguna-internet-di-indonesia-terlalu-rentan",
    },
    {
        title: "Penting bagi Pengembang Web Pemula Amankan Hak Cipta Intelektual",
        img: "https://geotimes.id/wp-content/uploads/2017/08/Desain-tanpa-judul-2-3.png",
        href: "https://geotimes.id/opini/penting-bagi-pengembang-web-pemula-amankan-hak-cipta-intelektual/",
    }
  ];
  return (
    <CategoryGroup className="kategori-2">
      {oscArticles.map((article, idx) => (
          <a
            key={idx}
            className="cat-item d-block bg-light text-center rounded p-3"
            href={article.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none" }}
          >
            <div className="rounded p-4 h-100 d-grid justify-content-between">
              <div className="icon mb-3">
                <img className="img-fluid" src={article.img} alt="Icon" />
                <span className="hover-text bg-dark p-2 py-1">Open</span>
              </div>
              <span>{article.title}</span>
            </div>
          </a>
      ))}
    </CategoryGroup>
  );
};

export default OSCArticleSection;
