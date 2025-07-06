import React from "react";
import CategoryGroup from "./CategoryGroup";

const ListOtherArticleSection: React.FC = () => {
    const listOtherArticle = [
        {
            title: "Rahasia Loading Website Kilat: Optimasi Gambar dan Media dengan HTML & CSS",
            image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7whg5cv6n2tz5x2cky02sc.jpg",
            href: "https://kumparan.com/fikri-af/rahasia-loading-website-kilat-optimasi-gambar-dan-media-dengan-html-and-css-23imSyufXmO",
            delay: "0.1s"
        },
        {
            title: "Comparing FastAPI vs Flask: Framework Python Mana yang Lebih Kuat di Industri?",
            image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7t4y7f1d8dbcjvxk1he3zg.jpg",
            href: "https://kumparan.com/fikri-af/comparing-fastapi-vs-flask-framework-python-mana-yang-lebih-kuat-di-industri-23ilodDk2ti",
            delay: "0.3s"
        },
        {
            title: "Skalabilitas Tanpa Batas: Aplikasi Mikroservices dengan Kubernetes dan Docker",
            image: "https://blue.kumparan.com/image/upload/fl_progressive,fl_lossy,c_fill,q_auto:best,w_640/v1634025439/01ja7eqarr4ma6qx0fqtvwm4rw.jpg",
            href: "https://kumparan.com/fikri-af/skalabilitas-tanpa-batas-aplikasi-mikroservices-dengan-kubernetes-dan-docker-23iiYV5odeK",
            delay: "0.5s"
        },
        {
            title: "Perihal Deepfake, Data Pengguna Internet di Indonesia Terlalu Rentan?",
            image: "https://ik.imagekit.io/goodid/gnfi/uploads/articles/large-142342416-futuristic-face-scan-identity-hologram-with-data-and-personal-information-d.jpg?tr=w-730,h-486,fo-center",
            href: "https://www.goodnewsfromindonesia.id/2023/12/15/perihal-deepfake-data-pengguna-internet-di-indonesia-terlalu-rentan",
            delay: "0.7s"
        },
        {
            title: "Penting bagi Pengembang Web Pemula Amankan Hak Cipta Intelektual",
            image: "https://geotimes.id/wp-content/uploads/2017/08/Desain-tanpa-judul-2-3.png",
            href: "https://geotimes.id/opini/penting-bagi-pengembang-web-pemula-amankan-hak-cipta-intelektual/",
            delay: "1s"
        }
    ]

    return (
        <CategoryGroup className="kategori-2">
            {listOtherArticle.map((article, idx) => (
                <a
                    key={idx}
                    className="cat-item d-block bg-light text-center rounded p-3"
                    href={article.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none" }}
                >
                    <div className="rounded p-4 h-100 d-grid justify-content-between">
                        <div className="icon mb-3 ratio ratio-16x9">
                            <img className="img-fluid" src={article.image} alt="Icon" />
                        </div>
                        <span>{article.title}</span>
                    </div>
                </a>
            ))}
        </CategoryGroup>
    )
}

export default ListOtherArticleSection;