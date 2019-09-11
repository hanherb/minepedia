export default function () {
  return [{
    title: 'Dashboards',
    items: [{
      title: 'Analytics',
      to: {
        name: 'analytics',
      },
      htmlBefore: '<i class="material-icons">&#xE917;</i>',
      htmlAfter: '',
    }],
  },
  {
    title: 'Companies',
    role: 'admin',
    items: [],
  }];
}
