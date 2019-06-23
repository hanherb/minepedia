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
      title: 'CSV Asumsi Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-asumsi-keuangan-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Neraca Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-neraca-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Harga Pokok Penjualan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-harga-pokok-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Arus Kas',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-arus-kas-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Investasi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-investasi-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Penerimaan Negara',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-penerimaan-negara-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Keuangan Lainnya',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-keuangan-lainnya-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Sumber Pembiayaan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-sumber-pembiayaan-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Anggaran Belanja',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-anggaran-belanja-op',
        tahapan_kegiatan: 'Operasi Produksi',
      },
    }, {
      title: 'CSV Asumsi Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-asumsi-keuangan-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Neraca Keuangan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-neraca-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Arus Kas',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-arus-kas-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Investasi',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-investasi-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Penerimaan Negara',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-penerimaan-negara-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Keuangan Lainnya',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-keuangan-lainnya-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Anggaran Belanja',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-anggaran-belanja-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
      },
    }, {
      title: 'CSV Sumber Pembiayaan',
      htmlBefore: '<i class="material-icons">&#xE7FD;</i>',
      to: {
        name: 'csv-sumber-pembiayaan-eksplorasi',
        tahapan_kegiatan: 'Eksplorasi',
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
