export default function () {
  return [{
    title: 'Dashboards',
    items: [{
      title: 'Analytics',
      to: '/analytics',
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }],
  },
  {
    title: 'Data',
    items: [{
      title: 'Users',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'users',
      },
    }, {
      title: 'Asumsi Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-asumsi-keuangan-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Neraca Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-neraca-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Laba Rugi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-laba-rugi-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Harga Pokok Penjualan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-harga-pokok-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Arus Kas',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-arus-kas-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Investasi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-investasi-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Penerimaan Negara',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-penerimaan-negara-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Keuangan Lainnya',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-keuangan-lainnya-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Sumber Pembiayaan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-sumber-pembiayaan-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Anggaran Belanja',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-anggaran-belanja-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'Asumsi Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-asumsi-keuangan-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Neraca Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-neraca-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Laba Rugi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-laba-rugi-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Arus Kas',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-arus-kas-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Investasi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-investasi-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Penerimaan Negara',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-penerimaan-negara-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Keuangan Lainnya',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-keuangan-lainnya-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Anggaran Belanja',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-anggaran-belanja-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Sumber Pembiayaan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-sumber-pembiayaan-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'Belanja Barang',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-belanja-barang',
      },
    }, {
      title: 'Rekap Belanja Barang',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'rekap-belanja-barang',
      },
    }, {
      title: 'Companies',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'company-list',
      },
    }, {
      title: 'Goods',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: {
        name: 'company-list',
      },
    }],
  }, {
    title: 'Miscellaneous',
    items: [{
      title: 'Overview',
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: {
        name: 'components-overview',
      },
    }, {
      title: 'Add New Post',
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: {
        name: 'add-new-post',
      },
    }, {
      title: 'Blog Posts',
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: {
        name: 'blog-posts',
      },
    }],
  },
  ];
}
