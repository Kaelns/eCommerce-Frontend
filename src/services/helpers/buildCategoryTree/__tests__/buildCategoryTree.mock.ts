import { Category } from '@commercetools/platform-sdk';
import { ICategoryTreeNode } from '@/shared/types';

export const initialCategories: Category[] = [
  {
    id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8',
    version: 1,
    createdAt: '2024-04-30T17:47:23.584Z',
    lastModifiedAt: '2024-04-30T17:47:23.584Z',

    key: 'kitchen',
    name: {
      'en-GB': 'Kitchen',
      'en-US': 'Kitchen',
      'de-DE': 'Küche'
    },
    slug: {
      'en-GB': 'kitchen',
      'en-US': 'kitchen',
      'de-DE': 'kitchen'
    },
    ancestors: [],
    orderHint: '0.3',
    assets: []
  },
  {
    id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d',
    version: 1,
    createdAt: '2024-04-30T17:47:23.591Z',
    lastModifiedAt: '2024-04-30T17:47:23.591Z',

    key: 'furniture',
    name: {
      'en-GB': 'Furniture',
      'en-US': 'Furniture',
      'de-DE': 'Möbel'
    },
    slug: {
      'en-GB': 'furniture',
      'en-US': 'furniture',
      'de-DE': 'furniture'
    },
    ancestors: [],
    orderHint: '0.2',
    assets: []
  },
  {
    id: '940377c6-fb2f-4815-8254-1e383878c14f',
    version: 1,
    createdAt: '2024-04-30T17:47:23.591Z',
    lastModifiedAt: '2024-04-30T17:47:23.591Z',

    key: 'new-arrivals',
    name: {
      'en-GB': 'New Arrivals',
      'en-US': 'New Arrivals',
      'de-DE': 'Neuheiten'
    },
    slug: {
      'en-GB': 'new-arrivals',
      'en-US': 'new-arrivals',
      'de-DE': 'ganz-neu'
    },
    ancestors: [],
    orderHint: '0.4',
    assets: []
  },
  {
    id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad',
    version: 1,
    createdAt: '2024-04-30T17:47:23.597Z',
    lastModifiedAt: '2024-04-30T17:47:23.597Z',

    key: 'home-decor',
    name: {
      'en-GB': 'Home Decor',
      'en-US': 'Home Decor',
      'de-DE': 'Dekoration'
    },
    slug: {
      'en-GB': 'home-decor',
      'en-US': 'home-decor',
      'de-DE': 'home-decor'
    },
    ancestors: [],
    orderHint: '0.1',
    assets: []
  },
  {
    id: '6e77ab1d-85ed-4961-9534-a378fc703c1d',
    version: 1,
    createdAt: '2024-04-30T17:47:23.816Z',
    lastModifiedAt: '2024-04-30T17:47:23.816Z',

    key: 'bedroom-furniture',
    name: {
      'en-GB': 'Bedroom Furniture',
      'en-US': 'Bedroom Furniture',
      'de-DE': 'Schlafzimmer'
    },
    slug: {
      'en-GB': 'bedroom-furniture',
      'en-US': 'bedroom-furniture',
      'de-DE': 'bedroom-furniture'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      }
    ],
    parent: {
      typeId: 'category',
      id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
    },
    orderHint: '.9',
    assets: []
  },
  {
    id: '56eb9d23-341d-4b0c-847a-49b9bb6baecb',
    version: 1,
    createdAt: '2024-04-30T17:47:23.825Z',
    lastModifiedAt: '2024-04-30T17:47:23.825Z',

    key: 'serveware',
    name: {
      'en-GB': 'Collections',
      'en-US': 'Kitchen Collections',
      'de-DE': 'Alles zum Servieren'
    },
    slug: {
      'en-GB': 'kitchen-collections',
      'en-US': 'kitchen-collections',
      'de-DE': 'serveware'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
    },
    orderHint: '.86',
    assets: []
  },
  {
    id: '89a07a22-e308-45ec-af5a-955a53c9c3a1',
    version: 1,
    createdAt: '2024-04-30T17:47:23.828Z',
    lastModifiedAt: '2024-04-30T17:47:23.828Z',

    key: 'living-room-furniture',
    name: {
      'en-GB': 'Living Room Furniture',
      'en-US': 'Living Room Furniture',
      'de-DE': 'Wohnzimmer'
    },
    slug: {
      'en-GB': 'living-room-furniture',
      'en-US': 'living-room-furniture',
      'de-DE': 'living-room-furniture'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      }
    ],
    parent: {
      typeId: 'category',
      id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
    },
    orderHint: '.9',
    assets: []
  },
  {
    id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c',
    version: 1,
    createdAt: '2024-04-30T17:47:23.832Z',
    lastModifiedAt: '2024-04-30T17:47:23.832Z',

    key: 'room-decor',
    name: {
      'en-GB': 'Room Decor',
      'en-US': 'Room Decor',
      'de-DE': 'Zimmerdekoration'
    },
    slug: {
      'en-GB': 'room-decor',
      'en-US': 'room-decor',
      'de-DE': 'zimmerdekoration'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      }
    ],
    parent: {
      typeId: 'category',
      id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
    },
    orderHint: '.8',
    assets: []
  },
  {
    id: 'd75bd451-771e-4c40-abf5-56b3c72fe5d3',
    version: 1,
    createdAt: '2024-04-30T17:47:23.831Z',
    lastModifiedAt: '2024-04-30T17:47:23.831Z',

    key: 'bedding',
    name: {
      'en-GB': 'Bedding',
      'en-US': 'Bedding',
      'de-DE': 'Bettwäsche'
    },
    slug: {
      'en-GB': 'bedding',
      'en-US': 'bedding',
      'de-DE': 'bettwsche'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      }
    ],
    parent: {
      typeId: 'category',
      id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
    },
    orderHint: '.5',
    assets: []
  },
  {
    id: '900355a4-8ab0-4775-8651-defaa4e261b6',
    version: 1,
    createdAt: '2024-04-30T17:47:23.836Z',
    lastModifiedAt: '2024-04-30T17:47:23.836Z',

    key: 'dinnerware',
    name: {
      'en-GB': 'Serving and Tableware',
      'en-US': 'Dinnerware',
      'de-DE': 'Geschirr'
    },
    slug: {
      'en-GB': 'serving-and-tableware',
      'en-US': 'serving-and-tableware',
      'de-DE': 'dinnerware'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
    },
    orderHint: '.75',
    assets: []
  },
  {
    id: '1ded45e2-2074-4df4-85cb-e8cec00b1642',
    version: 1,
    createdAt: '2024-04-30T17:47:23.834Z',
    lastModifiedAt: '2024-04-30T17:47:23.834Z',

    key: 'collections',
    name: {
      'en-GB': 'Collections',
      'en-US': 'Collections',
      'de-DE': 'Sonderkollektionen'
    },
    slug: {
      'en-GB': 'furniture-collections',
      'en-US': 'furniture-collections',
      'de-DE': 'collections'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      }
    ],
    parent: {
      typeId: 'category',
      id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
    },
    orderHint: '.7',
    assets: []
  },
  {
    id: '391b0d1e-40cf-4d8c-8b10-5aafa1c5ae8b',
    version: 1,
    createdAt: '2024-04-30T17:47:23.843Z',
    lastModifiedAt: '2024-04-30T17:47:23.843Z',

    key: 'bar-and-glassware',
    name: {
      'en-GB': 'Bar and Glassware',
      'en-US': 'Bar and Glassware',
      'de-DE': 'Gläser und Barzubehör'
    },
    slug: {
      'en-GB': 'bar-and-glassware',
      'en-US': 'bar-and-glassware',
      'de-DE': 'bar-and-glassware'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
    },
    orderHint: '.82',
    assets: []
  },
  {
    id: '10155e7d-a4ba-479d-b38a-a36476a05778',
    version: 1,
    createdAt: '2024-04-30T17:47:23.929Z',
    lastModifiedAt: '2024-04-30T17:47:23.929Z',

    key: 'home-accents',
    name: {
      'en-GB': 'Home Accents',
      'en-US': 'Home Accents',
      'de-DE': 'Accessoires'
    },
    slug: {
      'en-GB': 'home-accents',
      'en-US': 'home-accents',
      'de-DE': 'home-akzente'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      },
      {
        typeId: 'category',
        id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c'
      }
    ],
    parent: {
      typeId: 'category',
      id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c'
    },
    orderHint: '.5',
    assets: []
  },
  {
    id: 'de80c9fc-3e46-48c7-8fa6-134f1ac3e715',
    version: 1,
    createdAt: '2024-04-30T17:47:23.931Z',
    lastModifiedAt: '2024-04-30T17:47:23.931Z',

    key: 'storage--tables',
    name: {
      'en-GB': 'Storage & Tables',
      'en-US': 'Dressers',
      'de-DE': 'Kommoden'
    },
    slug: {
      'en-GB': 'storage-and-tables',
      'en-US': 'storage-and-tables',
      'de-DE': 'dressers'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      },
      {
        typeId: 'category',
        id: '6e77ab1d-85ed-4961-9534-a378fc703c1d'
      }
    ],
    parent: {
      typeId: 'category',
      id: '6e77ab1d-85ed-4961-9534-a378fc703c1d'
    },
    orderHint: '.1',
    assets: []
  },
  {
    id: '10ae909d-9745-4b44-8e1f-ced3b811e6c3',
    version: 1,
    createdAt: '2024-04-30T17:47:23.931Z',
    lastModifiedAt: '2024-04-30T17:47:23.931Z',

    key: 'the-traditionalist',
    name: {
      'en-GB': 'The Traditionalist',
      'en-US': 'The Traditionalist',
      'de-DE': 'The Traditionalist'
    },
    slug: {
      'en-GB': 'the-traditionalist',
      'en-US': 'the-traditionalist',
      'de-DE': 'the-traditionalist'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      },
      {
        typeId: 'category',
        id: '1ded45e2-2074-4df4-85cb-e8cec00b1642'
      }
    ],
    parent: {
      typeId: 'category',
      id: '1ded45e2-2074-4df4-85cb-e8cec00b1642'
    },
    orderHint: '0.0033',
    assets: []
  },
  {
    id: 'acf1ef12-fddb-44e5-915f-d8a2df8650a3',
    version: 1,
    createdAt: '2024-04-30T17:47:23.939Z',
    lastModifiedAt: '2024-04-30T17:47:23.939Z',

    key: 'bowls',
    name: {
      'en-GB': 'Bowls',
      'en-US': 'Bowls',
      'de-DE': 'Schalen'
    },
    slug: {
      'en-GB': 'bowls',
      'en-US': 'bowls',
      'de-DE': 'bowls'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      },
      {
        typeId: 'category',
        id: '900355a4-8ab0-4775-8651-defaa4e261b6'
      }
    ],
    parent: {
      typeId: 'category',
      id: '900355a4-8ab0-4775-8651-defaa4e261b6'
    },
    orderHint: '.56',
    assets: []
  },
  {
    id: '2b9f876b-0fb9-4b33-9c87-cc588e727076',
    version: 1,
    createdAt: '2024-04-30T17:47:23.940Z',
    lastModifiedAt: '2024-04-30T17:47:23.940Z',

    key: 'cheese-trays',
    name: {
      'en-GB': 'Cheese Trays',
      'en-US': 'Cheese Trays',
      'de-DE': 'Käseplatten'
    },
    slug: {
      'en-GB': 'cheese-trays',
      'en-US': 'cheese-trays',
      'de-DE': 'cheese-trays'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      },
      {
        typeId: 'category',
        id: '56eb9d23-341d-4b0c-847a-49b9bb6baecb'
      }
    ],
    parent: {
      typeId: 'category',
      id: '56eb9d23-341d-4b0c-847a-49b9bb6baecb'
    },
    orderHint: '.12',
    assets: []
  },
  {
    id: 'f21062a5-2656-4893-8ac4-59ccef724bf2',
    version: 1,
    createdAt: '2024-04-30T17:47:23.942Z',
    lastModifiedAt: '2024-04-30T17:47:23.942Z',

    key: 'bar-accessories',
    name: {
      'en-GB': 'Bar Accessories',
      'en-US': 'Bar Accessories',
      'de-DE': 'Barzubehör'
    },
    slug: {
      'en-GB': 'bar-accessories',
      'en-US': 'bar-accessories',
      'de-DE': 'bar-accessories'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      },
      {
        typeId: 'category',
        id: '391b0d1e-40cf-4d8c-8b10-5aafa1c5ae8b'
      }
    ],
    parent: {
      typeId: 'category',
      id: '391b0d1e-40cf-4d8c-8b10-5aafa1c5ae8b'
    },
    orderHint: '.36',
    assets: []
  },
  {
    id: 'a2ca088b-f873-4d2e-b242-7ff0e99ee2e3',
    version: 1,
    createdAt: '2024-04-30T17:47:23.945Z',
    lastModifiedAt: '2024-04-30T17:47:23.945Z',

    key: 'rugs',
    name: {
      'en-GB': 'Rugs',
      'en-US': 'Rugs',
      'de-DE': 'Teppiche'
    },
    slug: {
      'en-GB': 'rugs',
      'en-US': 'rugs',
      'de-DE': 'teppiche'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      },
      {
        typeId: 'category',
        id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c'
      }
    ],
    parent: {
      typeId: 'category',
      id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c'
    },
    orderHint: '.4',
    assets: []
  },
  {
    id: 'dceb3452-1d8c-4078-84ca-95801120442f',
    version: 1,
    createdAt: '2024-04-30T17:47:23.952Z',
    lastModifiedAt: '2024-04-30T17:47:23.952Z',

    key: 'plates',
    name: {
      'en-GB': 'Plates',
      'en-US': 'Plates',
      'de-DE': 'Platten'
    },
    slug: {
      'en-GB': 'plates',
      'en-US': 'plates',
      'de-DE': 'plates'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      },
      {
        typeId: 'category',
        id: '900355a4-8ab0-4775-8651-defaa4e261b6'
      }
    ],
    parent: {
      typeId: 'category',
      id: '900355a4-8ab0-4775-8651-defaa4e261b6'
    },
    orderHint: '.82',
    assets: []
  }
];

export const categoriesTree: ICategoryTreeNode[] = [
  {
    id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8',
    key: 'kitchen',
    children: [
      {
        id: 'acf1ef12-fddb-44e5-915f-d8a2df8650a3',
        key: 'bowls',
        children: []
      },
      {
        id: '2b9f876b-0fb9-4b33-9c87-cc588e727076',
        key: 'cheese-trays',
        children: []
      },
      {
        id: 'f21062a5-2656-4893-8ac4-59ccef724bf2',
        key: 'bar-accessories',
        children: []
      },
      {
        id: 'dceb3452-1d8c-4078-84ca-95801120442f',
        key: 'plates',
        children: []
      }
    ]
  },
  {
    id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d',
    key: 'furniture',
    children: [
      {
        id: '56eb9d23-341d-4b0c-847a-49b9bb6baecb',
        key: 'serveware',
        children: []
      },
      {
        id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c',
        key: 'room-decor',
        children: []
      },
      {
        id: '391b0d1e-40cf-4d8c-8b10-5aafa1c5ae8b',
        key: 'bar-and-glassware',
        children: []
      },
      {
        id: 'de80c9fc-3e46-48c7-8fa6-134f1ac3e715',
        key: 'storage--tables',
        children: []
      },
      {
        id: '10ae909d-9745-4b44-8e1f-ced3b811e6c3',
        key: 'the-traditionalist',
        children: []
      }
    ]
  },
  {
    id: '940377c6-fb2f-4815-8254-1e383878c14f',
    key: 'new-arrivals',
    children: []
  },
  {
    id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad',
    key: 'home-decor',
    children: [
      {
        id: '900355a4-8ab0-4775-8651-defaa4e261b6',
        key: 'dinnerware',
        children: []
      },
      {
        id: '10155e7d-a4ba-479d-b38a-a36476a05778',
        key: 'home-accents',
        children: []
      },
      {
        id: 'a2ca088b-f873-4d2e-b242-7ff0e99ee2e3',
        key: 'rugs',
        children: []
      }
    ]
  }
];
