import React from 'react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
    return (
        <div className="container d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '80vh' }}>
        <div className="text-center">
            <h1 className="display-1 text-primary fw-bold">404</h1>
            <h3 className="mb-3">Halaman Tidak Ditemukan</h3>
            <p className="mb-4">
            Maaf, halaman yang Anda cari tidak tersedia atau sudah dipindahkan.
            </p>
            <Link to="/" className="btn btn-primary px-4 py-2">
            Kembali ke Beranda
            </Link>
        </div>
        </div>
    );
};

export default NotFound;
