// Sistem Biodata Mahasiswa
    const namaMahasiswa = "Agil Ali";
    const nim = "1412230100";
    let programStudi = "Teknik Informatika";
    let semester = 7;
    let statusAktif = true;

    console.log(typeof namaMahasiswa);
    console.log(typeof nim);
    console.log(typeof programStudi);
    console.log(typeof semester);
    console.log(typeof statusAktif);

    console.log(`
        ===== BIODATA MAHASISWA =====
        Nama     : ${namaMahasiswa}
        NIM      : ${nim}
        Prodi    : ${programStudi}
        Semester : ${semester}
        Status   : ${statusAktif}
        =============================
        `);