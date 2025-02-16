import type { Category } from '@commercetools/platform-sdk';
import type { TreeNode, CategoriesObj } from '@/shared/types/types';

import { convertArrOfIdElemToIdObj } from '@/utils/arrays/convertArrOfIdElemToIdObj';

export const categoriesMock: Category[] = [
  {
    id: '17961d11-5114-495a-bad8-643daa70913c',
    version: 1,
    createdAt: '2024-09-01T18:30:28.014Z',
    lastModifiedAt: '2024-09-01T18:30:28.014Z',
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
    id: 'cc568bf3-85dc-43ae-bcf6-09e904416124',
    version: 1,
    createdAt: '2024-09-01T18:30:28.022Z',
    lastModifiedAt: '2024-09-01T18:30:28.022Z',
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
    id: '5667aecb-b311-4a42-b358-aedc802a28a7',
    version: 1,
    createdAt: '2024-09-01T18:30:28.025Z',
    lastModifiedAt: '2024-09-01T18:30:28.025Z',
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
    id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7',
    version: 1,
    createdAt: '2024-09-01T18:30:28.016Z',
    lastModifiedAt: '2024-09-01T18:30:28.016Z',
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
    id: 'e9391d20-298e-44d6-92f0-0dd2710068f9',
    version: 1,
    createdAt: '2024-09-01T18:30:28.327Z',
    lastModifiedAt: '2024-09-01T18:30:28.327Z',
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
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
    },
    orderHint: '.7',
    assets: []
  },
  {
    id: 'c8ad327e-131e-451f-ba2f-0bf3f98a41a9',
    version: 1,
    createdAt: '2024-09-01T18:30:28.327Z',
    lastModifiedAt: '2024-09-01T18:30:28.327Z',
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
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
    },
    orderHint: '.9',
    assets: []
  },
  {
    id: 'c40279da-6a57-42ea-a37b-38b839c1afab',
    version: 1,
    createdAt: '2024-09-01T18:30:28.337Z',
    lastModifiedAt: '2024-09-01T18:30:28.337Z',
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
        id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
      }
    ],
    parent: {
      typeId: 'category',
      id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
    },
    orderHint: '.8',
    assets: []
  },
  {
    id: '42ef2cb6-2310-409d-85a8-f70151e78da3',
    version: 1,
    createdAt: '2024-09-01T18:30:28.341Z',
    lastModifiedAt: '2024-09-01T18:30:28.341Z',
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
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
    },
    orderHint: '.9',
    assets: []
  },
  {
    id: '49935e80-e162-4a96-b67a-8d44b2e34808',
    version: 1,
    createdAt: '2024-09-01T18:30:28.347Z',
    lastModifiedAt: '2024-09-01T18:30:28.347Z',
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
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      }
    ],
    parent: {
      typeId: 'category',
      id: '5667aecb-b311-4a42-b358-aedc802a28a7'
    },
    orderHint: '.82',
    assets: []
  },
  {
    id: 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719',
    version: 1,
    createdAt: '2024-09-01T18:30:28.348Z',
    lastModifiedAt: '2024-09-01T18:30:28.348Z',
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
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      }
    ],
    parent: {
      typeId: 'category',
      id: '5667aecb-b311-4a42-b358-aedc802a28a7'
    },
    orderHint: '.86',
    assets: []
  },
  {
    id: 'ef20021b-1101-45d6-be8d-e312173ea093',
    version: 1,
    createdAt: '2024-09-01T18:30:28.363Z',
    lastModifiedAt: '2024-09-01T18:30:28.363Z',
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
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      }
    ],
    parent: {
      typeId: 'category',
      id: '5667aecb-b311-4a42-b358-aedc802a28a7'
    },
    orderHint: '.75',
    assets: []
  },
  {
    id: 'd8bb0c44-9264-49d7-a1e9-368f34a03aea',
    version: 1,
    createdAt: '2024-09-01T18:30:28.349Z',
    lastModifiedAt: '2024-09-01T18:30:28.349Z',
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
        id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
      }
    ],
    parent: {
      typeId: 'category',
      id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
    },
    orderHint: '.5',
    assets: []
  },
  {
    id: '71fe5f86-5e28-4e31-b834-bbfa4feee3b3',
    version: 1,
    createdAt: '2024-09-01T18:30:28.522Z',
    lastModifiedAt: '2024-09-01T18:30:28.522Z',
    key: 'serving-platters',
    name: {
      'en-GB': 'Serving Platters',
      'en-US': 'Serving Platters',
      'de-DE': 'Servierplatten'
    },
    slug: {
      'en-GB': 'serving-platters',
      'en-US': 'serving-platters',
      'de-DE': 'serving-platters'
    },
    ancestors: [
      {
        typeId: 'category',
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      },
      {
        typeId: 'category',
        id: 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719'
    },
    orderHint: '.0004',
    assets: []
  },
  {
    id: '3a6012ec-9b2e-4877-8c08-fce506bd0811',
    version: 1,
    createdAt: '2024-09-01T18:30:28.524Z',
    lastModifiedAt: '2024-09-01T18:30:28.524Z',
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
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      },
      {
        typeId: 'category',
        id: 'e9391d20-298e-44d6-92f0-0dd2710068f9'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'e9391d20-298e-44d6-92f0-0dd2710068f9'
    },
    orderHint: '0.0033',
    assets: []
  },
  {
    id: 'bd347644-40ad-4328-9f25-c6860bc14b20',
    version: 1,
    createdAt: '2024-09-01T18:30:28.527Z',
    lastModifiedAt: '2024-09-01T18:30:28.527Z',
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
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      },
      {
        typeId: 'category',
        id: '49935e80-e162-4a96-b67a-8d44b2e34808'
      }
    ],
    parent: {
      typeId: 'category',
      id: '49935e80-e162-4a96-b67a-8d44b2e34808'
    },
    orderHint: '.36',
    assets: []
  },
  {
    id: 'b621ada0-d2a3-4ba1-9570-ef6357e8c76d',
    version: 1,
    createdAt: '2024-09-01T18:30:28.526Z',
    lastModifiedAt: '2024-09-01T18:30:28.526Z',
    key: 'beds',
    name: {
      'en-GB': 'Beds',
      'en-US': 'Beds',
      'de-DE': 'Betten'
    },
    slug: {
      'en-GB': 'beds',
      'en-US': 'beds',
      'de-DE': 'beds'
    },
    ancestors: [
      {
        typeId: 'category',
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      },
      {
        typeId: 'category',
        id: '42ef2cb6-2310-409d-85a8-f70151e78da3'
      }
    ],
    parent: {
      typeId: 'category',
      id: '42ef2cb6-2310-409d-85a8-f70151e78da3'
    },
    orderHint: '.4',
    assets: []
  },
  {
    id: 'fa2456eb-e97a-4b47-bbd1-3f08c0b6e1be',
    version: 1,
    createdAt: '2024-09-01T18:30:28.527Z',
    lastModifiedAt: '2024-09-01T18:30:28.527Z',
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
        id: 'cc568bf3-85dc-43ae-bcf6-09e904416124'
      },
      {
        typeId: 'category',
        id: '42ef2cb6-2310-409d-85a8-f70151e78da3'
      }
    ],
    parent: {
      typeId: 'category',
      id: '42ef2cb6-2310-409d-85a8-f70151e78da3'
    },
    orderHint: '.1',
    assets: []
  },
  {
    id: '538f367e-4992-429e-b8af-266919788ec1',
    version: 1,
    createdAt: '2024-09-01T18:30:28.530Z',
    lastModifiedAt: '2024-09-01T18:30:28.530Z',
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
        id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
      },
      {
        typeId: 'category',
        id: 'c40279da-6a57-42ea-a37b-38b839c1afab'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'c40279da-6a57-42ea-a37b-38b839c1afab'
    },
    orderHint: '.4',
    assets: []
  },
  {
    id: '0ce0a111-795a-4d9c-9fab-812a49ad740a',
    version: 1,
    createdAt: '2024-09-01T18:30:28.542Z',
    lastModifiedAt: '2024-09-01T18:30:28.542Z',
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
        id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7'
      },
      {
        typeId: 'category',
        id: 'c40279da-6a57-42ea-a37b-38b839c1afab'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'c40279da-6a57-42ea-a37b-38b839c1afab'
    },
    orderHint: '.5',
    assets: []
  },
  {
    id: 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9',
    version: 1,
    createdAt: '2024-09-01T18:30:28.546Z',
    lastModifiedAt: '2024-09-01T18:30:28.546Z',
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
        id: '5667aecb-b311-4a42-b358-aedc802a28a7'
      },
      {
        typeId: 'category',
        id: 'ef20021b-1101-45d6-be8d-e312173ea093'
      }
    ],
    parent: {
      typeId: 'category',
      id: 'ef20021b-1101-45d6-be8d-e312173ea093'
    },
    orderHint: '.82',
    assets: []
  }
];

export const categoriesObjMock: CategoriesObj = convertArrOfIdElemToIdObj(categoriesMock);

export const categoriesTreeMock: TreeNode[] = [
  {
    id: '17961d11-5114-495a-bad8-643daa70913c',
    key: 'new-arrivals',
    children: []
  },
  {
    id: 'cc568bf3-85dc-43ae-bcf6-09e904416124',
    key: 'furniture',
    children: [
      {
        id: 'e9391d20-298e-44d6-92f0-0dd2710068f9',
        key: 'collections',
        children: [
          {
            id: '3a6012ec-9b2e-4877-8c08-fce506bd0811',
            key: 'the-traditionalist',
            children: []
          }
        ]
      },
      {
        id: 'c8ad327e-131e-451f-ba2f-0bf3f98a41a9',
        key: 'living-room-furniture',
        children: []
      },
      {
        id: '42ef2cb6-2310-409d-85a8-f70151e78da3',
        key: 'bedroom-furniture',
        children: [
          {
            id: 'b621ada0-d2a3-4ba1-9570-ef6357e8c76d',
            key: 'beds',
            children: []
          },
          {
            id: 'fa2456eb-e97a-4b47-bbd1-3f08c0b6e1be',
            key: 'storage--tables',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '5667aecb-b311-4a42-b358-aedc802a28a7',
    key: 'kitchen',
    children: [
      {
        id: '49935e80-e162-4a96-b67a-8d44b2e34808',
        key: 'bar-and-glassware',
        children: [
          {
            id: 'bd347644-40ad-4328-9f25-c6860bc14b20',
            key: 'bar-accessories',
            children: []
          }
        ]
      },
      {
        id: 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719',
        key: 'serveware',
        children: [
          {
            id: '71fe5f86-5e28-4e31-b834-bbfa4feee3b3',
            key: 'serving-platters',
            children: []
          }
        ]
      },
      {
        id: 'ef20021b-1101-45d6-be8d-e312173ea093',
        key: 'dinnerware',
        children: [
          {
            id: 'd1ab0fd1-a2d4-4b10-bdfa-261bd74346d9',
            key: 'plates',
            children: []
          }
        ]
      }
    ]
  },
  {
    id: '00a5de3b-65cc-4e2d-987c-b24ab114e1b7',
    key: 'home-decor',
    children: [
      {
        id: 'c40279da-6a57-42ea-a37b-38b839c1afab',
        key: 'room-decor',
        children: [
          {
            id: '538f367e-4992-429e-b8af-266919788ec1',
            key: 'rugs',
            children: []
          },
          {
            id: '0ce0a111-795a-4d9c-9fab-812a49ad740a',
            key: 'home-accents',
            children: []
          }
        ]
      },
      {
        id: 'd8bb0c44-9264-49d7-a1e9-368f34a03aea',
        key: 'bedding',
        children: []
      }
    ]
  }
];
