import { Category, ProductProjection } from '@commercetools/platform-sdk';
// TODO Delete this

export const goods: ProductProjection[] = [
  {
    id: 'c12bac95-ce65-4040-9c0b-5ae8031c112a',
    version: 3,
    productType: {
      typeId: 'product-type',
      id: 'dcc68a3b-0959-44c6-9a90-3c31e481c850'
    },
    name: {
      'en-US': 'Leather Coaster',
      'en-GB': 'Leather Coaster',
      'de-DE': 'Leder Untersetzer'
    },
    description: {
      'en-GB':
        'A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.',
      'en-US':
        'A round leather coaster is designed to be placed underneath a drink to protect the surface beneath from moisture and heat. It measures around 4 inches in diameter and is made of high-quality leather material. The edges of the coaster is finished with brass. The underside of the coaster features a non-slip material to prevent it from sliding on smooth surfaces.',
      'de-DE':
        'Ein runder Lederuntersetzer ist so konzipiert, dass er unter einem Getränk platziert werden kann, um die darunter liegende Oberfläche vor Feuchtigkeit und Hitze zu schützen. Es misst etwa 4 Zoll im Durchmesser und besteht aus hochwertigem Ledermaterial. Die Kanten des Untersetzers sind mit Messing veredelt. Die Unterseite des Untersetzers ist mit einem rutschfesten Material versehen, um ein Verrutschen auf glatten Oberflächen zu verhindern.'
    },
    categories: [
      {
        typeId: 'category',
        id: 'f21062a5-2656-4893-8ac4-59ccef724bf2'
      },
      {
        typeId: 'category',
        id: '391b0d1e-40cf-4d8c-8b10-5aafa1c5ae8b'
      },
      {
        typeId: 'category',
        id: 'eed88c71-7578-4b93-9dee-ffedc2745fb8'
      }
    ],
    categoryOrderHints: {},
    slug: {
      'en-US': 'leather-coaster',
      'en-GB': 'leather-coaster',
      'de-DE': 'untersetzer-aus-leder'
    },
    variants: [],
    masterVariant: {
      attributes: [
        {
          name: 'productspec',
          value: {
            'en-GB': '- Includes 4 coasters',
            'de-DE': '- Enthält 4 Untersetzer',
            'en-US': '- Includes 4 coasters'
          }
        },
        {
          name: 'color',
          value: {
            'en-GB': '#000',
            'de-DE': '#000',
            'en-US': '#000'
          }
        },
        {
          name: 'colorlabel',
          value: {
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
            'en-US': 'Black'
          }
        },
        {
          name: 'color-filter',
          value: {
            key: '#000',
            label: {
              'de-DE': 'Schwarz',
              'en-GB': 'Black',
              'en-US': 'Black'
            }
          }
        }
      ],
      availability: {
        isOnStock: true,
        availableQuantity: 1000,
        version: 1,
        id: 'ee5ecb8a-5fb1-493e-879a-6c84d10591eb'
      },
      assets: [],
      images: [
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Leather_Coaster-1.1.jpeg',
          dimensions: {
            w: 2864,
            h: 2864
          }
        }
      ],
      prices: [
        {
          id: 'e1fa032d-5cbf-43f6-b0f1-a83682fda316',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 2499,
            fractionDigits: 2
          },
          country: 'DE'
        },
        {
          id: '845fb1ba-4d85-434d-a81a-4b914f3fdf0e',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 2499,
            fractionDigits: 2
          },
          country: 'GB'
        },
        {
          id: 'e893a56b-8cba-4156-98ab-4e3447dd087f',
          value: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 2499,
            fractionDigits: 2
          },
          country: 'US'
        }
      ],
      sku: 'LCO-034',
      id: 1
    },
    searchKeywords: {},
    hasStagedChanges: false,
    published: true,
    key: 'leather-coaster',
    taxCategory: {
      typeId: 'tax-category',
      id: '5109a286-ffb6-420f-91d8-43a3d98e62ed'
    },
    createdAt: '2024-04-30T17:47:24.632Z',
    lastModifiedAt: '2024-04-30T17:47:28.640Z'
  },
  {
    id: 'a61b3e1e-77c3-46ba-9107-c59a464b6821',
    version: 3,
    productType: {
      typeId: 'product-type',
      id: 'dcc68a3b-0959-44c6-9a90-3c31e481c850'
    },
    name: {
      'en-GB': 'Opal King Bed',
      'de-DE': 'Opal King Bett',
      'en-US': 'Opal King Bed'
    },
    description: {
      'en-GB':
        'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.',
      'de-DE':
        'Ein modernes Kingsize-Bett mit getuftetem Kopfteil ist ein stilvolles und elegantes Möbelstück, das einen Hauch von Luxus und Raffinesse in jedes Schlafzimmer bringen kann. Die Matratzenplattform ist groß genug, um eine Kingsize-Matratze aufzunehmen, und das gesamte Bett ist mit klaren, schlanken Linien gestaltet, die ihm einen modernen Look verleihen. Das getuftete Kopfteil ist das Herzstück des Bettes und oft der Blickfang schlechthin. Es ist aus weichem, strapazierfähigem Stoff gefertigt, der in einem quadratischen Muster getuftet ist. Das getuftete Design verleiht dem Kopfteil ein plüschiges, gepolstertes Aussehen und macht es bequem, wenn man im Bett sitzt, um zu lesen oder fernzusehen. Das Gesamtdesign des Bettes ist modern und unterstreicht die Schönheit des getufteten Kopfteils. Insgesamt ist ein modernes Doppelbett mit getuftetem Kopfteil ein Highlight, das jedes Schlafzimmer mit Stil und Komfort bereichert.',
      'en-US':
        'A modern king bed with a tufted headboard is a stylish and elegant piece of furniture that can bring a touch of luxury and sophistication to any bedroom. The mattress platform is large enough to accommodate a king-size mattress, and the entire bed is designed with clean, sleek lines that give it a modern look.  The tufted headboard is the centerpiece of the bed and is often the most eye-catching feature. It is made of soft, durable fabric that is tufted in a square pattern. The tufted design gives the headboard a plush, cushioned appearance, making it comfortable for sitting up in bed to read or watch TV.  The overall design of the bed is modern, emphasizing the beauty of the tufted headboard.   Overall, a modern king bed with a tufted headboard is a statement piece that can add both style and comfort to any bedroom.'
    },
    categories: [
      {
        typeId: 'category',
        id: '6e77ab1d-85ed-4961-9534-a378fc703c1d'
      },
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      },
      {
        typeId: 'category',
        id: 'bad3e22b-ce3c-4161-85a5-d988b8a90c6e'
      }
    ],
    categoryOrderHints: {},
    slug: {
      'en-GB': 'opal-king-bed',
      'de-DE': 'opal-kingsize-bett',
      'en-US': 'opal-king-bed'
    },
    variants: [],
    masterVariant: {
      attributes: [
        {
          name: 'productspec',
          value: {
            'en-GB': '- Assembly included',
            'de-DE': '- Montage inklusive',
            'en-US': '- Assembly included'
          }
        },
        {
          name: 'color',
          value: {
            'en-GB': '#000',
            'de-DE': '#000',
            'en-US': '#000'
          }
        },
        {
          name: 'colorlabel',
          value: {
            'en-GB': 'Black',
            'de-DE': 'Schwarz',
            'en-US': 'Black'
          }
        },
        {
          name: 'color-filter',
          value: {
            key: '#000',
            label: {
              'de-DE': 'Schwarz',
              'en-GB': 'Black',
              'en-US': 'Black'
            }
          }
        }
      ],
      availability: {
        isOnStock: true,
        availableQuantity: 100,
        version: 1,
        id: '4c6f4efd-73cf-41db-ae47-a20c21253bcb'
      },
      assets: [],
      images: [
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Opal_King_Bed-1.1.jpeg',
          dimensions: {
            w: 2000,
            h: 2000
          }
        }
      ],
      prices: [
        {
          id: '94e6694a-f637-48ac-9743-bfe1ac0a787a',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 129900,
            fractionDigits: 2
          },
          country: 'DE'
        },
        {
          id: '6b6a4117-e14e-463e-aa23-237496261c9b',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 129900,
            fractionDigits: 2
          },
          country: 'GB'
        },
        {
          id: '2a4714c0-257a-4999-b302-037b8b69a52d',
          value: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 129900,
            fractionDigits: 2
          },
          country: 'US'
        }
      ],
      sku: 'MTB-023',
      id: 1
    },
    searchKeywords: {},
    hasStagedChanges: false,
    published: true,
    key: 'opal-king-bed',
    taxCategory: {
      typeId: 'tax-category',
      id: '5109a286-ffb6-420f-91d8-43a3d98e62ed'
    },
    createdAt: '2024-04-30T17:47:24.663Z',
    lastModifiedAt: '2024-04-30T17:47:29.156Z'
  },
  {
    id: 'e171ef03-185c-4be4-a887-3fcd9e9f5d50',
    version: 5,
    productType: {
      typeId: 'product-type',
      id: 'dcc68a3b-0959-44c6-9a90-3c31e481c850'
    },
    name: {
      'en-GB': 'Patterned Pillow Cover',
      'de-DE': 'Gemusterter Kissenbezug',
      'en-US': 'Patterned Pillow Cover'
    },
    description: {
      'en-GB':
        'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.',
      'de-DE':
        'Ein Art-Deco-Samtkissenbezug mit geometrischem Muster ist ein luxuriöses und stilvolles Accessoire für jeden Raum in Ihrem Zuhause. Er ist aus weichem, plüschigem Samtstoff gefertigt, der sich weich und glatt anfühlt. Der Samt hat einen reichen, schimmernden Glanz, der dem Kissenbezug eine elegante und anspruchsvolle Note verleiht. Der Kissenbezug weist ein geometrisches Design auf, das vom Art-déco-Stil des frühen 20. Jahrhunderts inspiriert ist. Jahrhunderts inspiriert ist. Das Design umfasst kühne und eckige Formen. Der Kissenbezug wird oft als dekorativer Akzent für ein Bett, ein Sofa oder einen Sessel verwendet und kann jedem Raum im Haus einen Hauch von Glamour und Raffinesse verleihen. Er lässt sich mit anderen vom Art déco inspirierten Accessoires wie Lampen, Vasen und Wandbildern kombinieren, um ein stimmiges und stilvolles Gesamtbild zu schaffen. Der Samtstoff ist strapazierfähig und pflegeleicht und kann mit einem feuchten Tuch oder Schwamm abgewischt werden. Er sollte regelmäßig an der Luft getrocknet und aufgefächert werden, damit er seine Form und Struktur behält.  Insgesamt ist ein Art-Déco-Samtkissenbezug mit geometrischem Muster ein luxuriöses und stilvolles Accessoire, das die Schönheit und den Komfort eines jeden Raums im Haus verbessern kann.',
      'en-US':
        'An art deco velvet pillow cover with geometric design is a luxurious and stylish accessory for any room in the home. It is made from soft, plush velvet fabric that feels soft and smooth to the touch. The velvet has a rich, lustrous sheen that adds an elegant and sophisticated touch to the pillow cover.  The pillow cover features a geometric design that is inspired by the art deco style of the early 20th century. The design includes bold and angular shapes.  The pillow cover is often used as a decorative accent for a bed, sofa, or accent chair, and can add a touch of glamour and sophistication to any room in the home. It can be paired with other art deco-inspired accessories, such as lamps, vases, and wall art, to create a cohesive and stylish look.  The velvet fabric is durable and easy to clean, and can be spot cleaned with a damp cloth or sponge. It should be air-dried and fluffed periodically to maintain its shape and texture.  Overall, an art deco velvet pillow cover with geometric design is a luxurious and stylish accessory that can enhance the beauty and comfort of any room in the home.'
    },
    categories: [
      {
        typeId: 'category',
        id: 'd75bd451-771e-4c40-abf5-56b3c72fe5d3'
      },
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      }
    ],
    categoryOrderHints: {},
    slug: {
      'en-GB': 'patterned-pillow-cover',
      'de-DE': 'gemusterte-kissenhlle',
      'en-US': 'patterned-pillow-cover'
    },
    variants: [
      {
        attributes: [
          {
            name: 'productspec',
            value: {
              'en-GB': '- Machine washable\n- Pillow not included',
              'de-DE': '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
              'en-US': '- Machine washable\n- Pillow not included'
            }
          },
          {
            name: 'color',
            value: {
              'en-GB': '#0f0f0f',
              'de-DE': '#0f0f0f',
              'en-US': '#0f0f0f'
            }
          },
          {
            name: 'colorlabel',
            value: {
              'en-GB': 'Black',
              'de-DE': 'Schwarz',
              'en-US': 'Black'
            }
          },
          {
            name: 'new-arrival',
            value: false
          },
          {
            name: 'color-filter',
            value: {
              key: '#000',
              label: {
                'de-DE': 'Schwarz',
                'en-GB': 'Black',
                'en-US': 'Black'
              }
            }
          }
        ],
        availability: {
          isOnStock: true,
          availableQuantity: 100,
          version: 1,
          id: '203768d3-c5e9-488a-82e3-018a541fb9ec'
        },
        assets: [],
        images: [
          {
            url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Patterned_Pillow_Cover-2.1.jpeg',
            dimensions: {
              w: 6047,
              h: 4031
            }
          }
        ],
        prices: [
          {
            id: '615f7dc7-0599-4b62-aad9-3f5d4e55e326',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 1499,
              fractionDigits: 2
            },
            country: 'DE'
          },
          {
            id: '8ab2406e-3ce8-48bd-b537-23b3a1471c1f',
            value: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 1499,
              fractionDigits: 2
            },
            country: 'GB'
          },
          {
            id: 'a79c10ae-8463-4ed6-9363-80155e2113b1',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 1499,
              fractionDigits: 2
            },
            country: 'US'
          }
        ],
        sku: 'ADPC-7',
        id: 2
      }
    ],
    masterVariant: {
      attributes: [
        {
          name: 'productspec',
          value: {
            'en-GB': '- Machine washable\n- Pillow not included',
            'de-DE': '- Waschmaschinenfest\n- Kissen nicht im Lieferumfang enthalten',
            'en-US': '- Machine washable\n- Pillow not included'
          }
        },
        {
          name: 'color',
          value: {
            'en-GB': '#9c9087',
            'de-DE': '#9c9087',
            'en-US': '#9c9087'
          }
        },
        {
          name: 'colorlabel',
          value: {
            'en-GB': 'Mauve',
            'de-DE': 'Mauve',
            'en-US': 'Mauve'
          }
        },
        {
          name: 'new-arrival',
          value: false
        },
        {
          name: 'color-filter',
          value: {
            key: '#A020F0',
            label: {
              'de-DE': 'Lila',
              'en-GB': 'Purple',
              'en-US': 'Purple'
            }
          }
        }
      ],
      availability: {
        isOnStock: true,
        availableQuantity: 100,
        version: 1,
        id: 'f45cd721-384f-48be-b0be-3202f36729ff'
      },
      assets: [],
      images: [
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Patterned_Pillow_Cover-1.1.jpeg',
          dimensions: {
            w: 6240,
            h: 4160
          }
        }
      ],
      prices: [
        {
          id: '81beaa14-6e76-428d-8132-81b04c1899d6',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 1499,
            fractionDigits: 2
          },
          country: 'DE'
        },
        {
          id: '2418f203-38e1-40dd-84f6-b7deaa4329ef',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 1499,
            fractionDigits: 2
          },
          country: 'GB'
        },
        {
          id: '42b2550e-316f-402c-b4e1-888cff20e967',
          value: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 1499,
            fractionDigits: 2
          },
          country: 'US'
        }
      ],
      sku: 'ADPC-09',
      id: 1
    },
    searchKeywords: {},
    hasStagedChanges: false,
    published: true,
    key: 'patterned-pillow-cover',
    taxCategory: {
      typeId: 'tax-category',
      id: '5109a286-ffb6-420f-91d8-43a3d98e62ed'
    },
    createdAt: '2024-04-30T17:47:24.631Z',
    lastModifiedAt: '2024-04-30T17:47:29.190Z'
  },
  {
    id: 'a4d148b4-9d95-4f9f-8ca6-0f573e7145f4',
    version: 4,
    productType: {
      typeId: 'product-type',
      id: 'dcc68a3b-0959-44c6-9a90-3c31e481c850'
    },
    name: {
      'en-US': 'Charcoal Chair',
      'en-GB': 'Charcoal Chair',
      'de-DE': 'Stuhl "Hokzkohle"'
    },
    description: {
      'en-GB':
        'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
      'en-US':
        'This chair with leather upholstery features a sturdy frame and legs. The seat and backrest are covered in high-quality leather, which may be smooth or textured depending on the design. The leather is stretched taut over a layer of padding to provide comfort and support for the person sitting in the chair.  The chair has a high backrest making it ideal for the dining room or a study room.  Overall, a chair with leather upholstery is typically sleek and modern in design, providing a comfortable and stylish seating option for any room.',
      'de-DE':
        'Dieser Stuhl mit Lederbezug verfügt über einen stabilen Rahmen und Beine. Sitzfläche und Rückenlehne sind mit hochwertigem Leder bezogen, das je nach Ausführung glatt oder strukturiert sein kann. Das Leder wird straff über eine Polsterschicht gespannt, um der auf dem Stuhl sitzenden Person Komfort und Halt zu bieten.  Der Stuhl hat eine hohe Rückenlehne, was ihn ideal für das Esszimmer oder ein Arbeitszimmer macht.  Ein Stuhl mit Lederpolsterung ist elegant und modern im Design und bietet eine komfortable und stilvolle Sitzgelegenheit für jeden Raum.'
    },
    categories: [
      {
        typeId: 'category',
        id: '7904032b-dedc-4a21-8cb1-951c4bd6f04d'
      },
      {
        typeId: 'category',
        id: 'f533488d-4b24-4f9d-a223-a6cb98691096'
      },
      {
        typeId: 'category',
        id: '89a07a22-e308-45ec-af5a-955a53c9c3a1'
      }
    ],
    categoryOrderHints: {},
    slug: {
      'en-US': 'charcoal-chair',
      'en-GB': 'charcoal-chair',
      'de-DE': 'holzkohle-stuhl'
    },
    variants: [],
    masterVariant: {
      attributes: [
        {
          name: 'productspec',
          value: {
            'en-GB': '- Includes 1 chair',
            'de-DE': '- Beinhaltet 1 Stuhl',
            'en-US': '- Includes 1 chair'
          }
        },
        {
          name: 'color',
          value: {
            'en-GB': '#000',
            'de-DE': '#000',
            'en-US': '#000'
          }
        },
        {
          name: 'colorlabel',
          value: {
            'en-GB': 'Charcoal',
            'de-DE': 'Holzkohle',
            'en-US': 'Charcoal'
          }
        },
        {
          name: 'color-filter',
          value: {
            key: '#000',
            label: {
              'de-DE': 'Schwarz',
              'en-GB': 'Black',
              'en-US': 'Black'
            }
          }
        },
        {
          name: 'finishlabel',
          value: {
            'en-GB': 'Oak',
            'de-DE': 'Eiche',
            'en-US': 'Oak'
          }
        },
        {
          name: 'finish',
          value: {
            'en-GB': '#E2C897',
            'de-DE': '#E2C897',
            'en-US': '#E2C897'
          }
        }
      ],
      availability: {
        isOnStock: true,
        availableQuantity: 100,
        version: 1,
        id: '0458a552-5d65-427a-b70d-fce5f783d368'
      },
      assets: [],
      images: [
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.2.jpeg',
          dimensions: {
            w: 3300,
            h: 5309
          }
        },
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Charcoal_Chair-1.1.jpeg',
          dimensions: {
            w: 5906,
            h: 5906
          }
        }
      ],
      prices: [
        {
          id: '99420fd7-0b3a-4316-a206-ebee7c326e9f',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 9900,
            fractionDigits: 2
          },
          country: 'DE',
          discounted: {
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 8415,
              fractionDigits: 2
            },
            discount: {
              typeId: 'product-discount',
              id: 'c94bbe13-61f1-4a1b-bcf1-46389a2b8f02'
            }
          }
        },
        {
          id: 'a6439701-ccea-42c6-90c1-5fb95982cf1b',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 9900,
            fractionDigits: 2
          },
          country: 'GB',
          discounted: {
            value: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 8415,
              fractionDigits: 2
            },
            discount: {
              typeId: 'product-discount',
              id: 'c94bbe13-61f1-4a1b-bcf1-46389a2b8f02'
            }
          }
        },
        {
          id: '96c717ba-f04c-4ac9-af97-cc58b8a45ba0',
          value: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 9900,
            fractionDigits: 2
          },
          country: 'US',
          discounted: {
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 8415,
              fractionDigits: 2
            },
            discount: {
              typeId: 'product-discount',
              id: 'c94bbe13-61f1-4a1b-bcf1-46389a2b8f02'
            }
          }
        }
      ],
      sku: 'CCH-093',
      id: 1
    },
    searchKeywords: {},
    hasStagedChanges: false,
    published: true,
    key: 'charcoal-chair',
    taxCategory: {
      typeId: 'tax-category',
      id: '5109a286-ffb6-420f-91d8-43a3d98e62ed'
    },
    createdAt: '2024-04-30T17:47:24.570Z',
    lastModifiedAt: '2024-04-30T17:47:30.029Z'
  },
  {
    id: '52988236-0c14-4c6d-9c77-3bd649702e3a',
    version: 5,
    productType: {
      typeId: 'product-type',
      id: 'dcc68a3b-0959-44c6-9a90-3c31e481c850'
    },
    name: {
      'en-GB': 'Meadow Rug',
      'de-DE': 'Wiesenteppich',
      'en-US': 'Meadow Rug'
    },
    description: {
      'en-GB':
        "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space.",
      'de-DE':
        'Ein Plüschteppich ist eine Art von Teppich, der weich und bequem unter den Füßen liegt. Plüschteppiche zeichnen sich durch ihren dichten Flor aus. Die Fasern sind dicht gepackt und verleihen dem Teppich ein üppiges und luxuriöses Gefühl. Aufgrund ihrer Weichheit und ihres Komforts werden Plüschteppiche häufig in Schlafzimmern, Wohnzimmern und anderen Bereichen verwendet, in denen die Menschen viel Zeit sitzend oder faulenzend auf dem Boden verbringen. Sie sind auch eine beliebte Wahl für Kindergärten und Kinderzimmer, da sie einen sicheren und bequemen Spielbereich für Kinder bieten. Insgesamt ist ein Plüschteppich eine gemütliche und einladende Ergänzung für jedes Zuhause. Seine weiche Textur und sein luxuriöses Gefühl machen ihn zu einer beliebten Wahl für alle, die eine warme und einladende Atmosphäre in ihrem Wohnraum schaffen wollen.',
      'en-US':
        "A plush area rug is a type of rug that is designed to be soft and comfortable underfoot. Plush rugs are characterized by their thick pile. The fibers are densely packed together, giving the rug a lush and luxurious feel.   Because of their softness and comfort, plush area rugs are often used in bedrooms, living rooms, and other areas where people spend a lot of time sitting or lounging on the floor. They are also a popular choice for nurseries and children's rooms, as they provide a safe and comfortable play area for kids.  Overall, a plush area rug is a cozy and inviting addition to any home. Its soft texture and luxurious feel make it a popular choice for those who want to create a warm and inviting atmosphere in their living space."
    },
    categories: [
      {
        typeId: 'category',
        id: '2be8240d-5bff-4243-8e63-9d7c7df4f16c'
      },
      {
        typeId: 'category',
        id: 'a2ca088b-f873-4d2e-b242-7ff0e99ee2e3'
      },
      {
        typeId: 'category',
        id: '4d2f2ad4-2ce2-4784-84fc-d4581e5a9aad'
      }
    ],
    categoryOrderHints: {},
    slug: {
      'en-GB': 'meadow-rug',
      'de-DE': 'meadow-teppich',
      'en-US': 'meadow-rug'
    },
    variants: [
      {
        attributes: [
          {
            name: 'productspec',
            value: {
              'en-GB': '- 3ft x 5ft',
              'de-DE': '- 3 Fuß x 5 Fuß',
              'en-US': '- 3ft x 5ft'
            }
          },
          {
            name: 'color',
            value: {
              'en-GB': '#050505',
              'de-DE': '#050505',
              'en-US': '#050505'
            }
          },
          {
            name: 'colorlabel',
            value: {
              'en-GB': 'Black',
              'de-DE': 'Schwarz',
              'en-US': 'Black'
            }
          },
          {
            name: 'color-filter',
            value: {
              key: '#000',
              label: {
                'de-DE': 'Schwarz',
                'en-GB': 'Black',
                'en-US': 'Black'
              }
            }
          }
        ],
        availability: {
          isOnStock: true,
          availableQuantity: 100,
          version: 1,
          id: '3e8c087b-f2b7-4700-9151-7605f1b1e31a'
        },
        assets: [],
        images: [
          {
            url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-2.1.jpeg',
            dimensions: {
              w: 4500,
              h: 3000
            }
          }
        ],
        prices: [
          {
            id: '74759991-ab0a-4330-8f21-b2c269dd9448',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'DE'
          },
          {
            id: '8c1efb70-0d95-49f3-9364-34c65e7ff6bd',
            value: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'GB'
          },
          {
            id: '2ddb34a5-db6a-43c4-b23b-f86b6b7f9bb0',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'US'
          }
        ],
        sku: 'MR-08',
        id: 2
      },
      {
        attributes: [
          {
            name: 'productspec',
            value: {
              'en-GB': '- 3ft x 5ft',
              'de-DE': '- 3 Fuß x 5 Fuß',
              'en-US': '- 3ft x 5ft'
            }
          },
          {
            name: 'color',
            value: {
              'en-GB': '#bed1e8',
              'de-DE': '#bed1e8',
              'en-US': '#bed1e8'
            }
          },
          {
            name: 'colorlabel',
            value: {
              'en-GB': 'Robbin Blue',
              'de-DE': 'Robbin Blue',
              'en-US': 'Robbin Blue'
            }
          },
          {
            name: 'color-filter',
            value: {
              key: '#0000FF',
              label: {
                'de-DE': 'Blau',
                'en-GB': 'Blue',
                'en-US': 'Blue'
              }
            }
          }
        ],
        availability: {
          isOnStock: true,
          availableQuantity: 100,
          version: 1,
          id: 'a3fb02e6-bc81-4383-9f2e-521375df9211'
        },
        assets: [],
        images: [
          {
            url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-3.1.jpeg',
            dimensions: {
              w: 4500,
              h: 3000
            }
          }
        ],
        prices: [
          {
            id: 'f3b1bf87-3309-479a-8746-49860fe71099',
            value: {
              type: 'centPrecision',
              currencyCode: 'EUR',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'DE'
          },
          {
            id: '841bf680-43d2-4803-b4b7-4db6b4675368',
            value: {
              type: 'centPrecision',
              currencyCode: 'GBP',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'GB'
          },
          {
            id: 'ece7462f-ff9d-4795-8d69-4c4ef3dc13b8',
            value: {
              type: 'centPrecision',
              currencyCode: 'USD',
              centAmount: 29900,
              fractionDigits: 2
            },
            country: 'US'
          }
        ],
        sku: 'MR-05',
        id: 3
      }
    ],
    masterVariant: {
      attributes: [
        {
          name: 'productspec',
          value: {
            'en-GB': '- 3ft x 5ft',
            'de-DE': '- 3 Fuß x 5 Fuß',
            'en-US': '- 3ft x 5ft'
          }
        },
        {
          name: 'color',
          value: {
            'en-GB': '#b3b1ab',
            'de-DE': '#b3b1ab',
            'en-US': '#b3b1ab'
          }
        },
        {
          name: 'colorlabel',
          value: {
            'en-GB': 'Gray',
            'de-DE': 'Grau',
            'en-US': 'Gray'
          }
        },
        {
          name: 'color-filter',
          value: {
            key: '#808080',
            label: {
              'de-DE': 'Grau',
              'en-GB': 'Gray',
              'en-US': 'Gray'
            }
          }
        }
      ],
      assets: [],
      images: [
        {
          url: 'https://storage.googleapis.com/merchant-center-europe/sample-data/goodstore/Meadow_Rug-1.1.jpeg',
          dimensions: {
            w: 4500,
            h: 3000
          }
        }
      ],
      prices: [
        {
          id: '91b7b2dc-b349-4c2e-bce9-10b68c0c1cd4',
          value: {
            type: 'centPrecision',
            currencyCode: 'EUR',
            centAmount: 29900,
            fractionDigits: 2
          },
          country: 'DE'
        },
        {
          id: 'a7d1890f-d585-4a04-bd04-8a8cac584747',
          value: {
            type: 'centPrecision',
            currencyCode: 'GBP',
            centAmount: 29900,
            fractionDigits: 2
          },
          country: 'GB'
        },
        {
          id: '387c67a3-139a-474b-be73-2f8f0c0c6095',
          value: {
            type: 'centPrecision',
            currencyCode: 'USD',
            centAmount: 29900,
            fractionDigits: 2
          },
          country: 'US'
        }
      ],
      sku: 'MR-03',
      id: 1
    },
    searchKeywords: {},
    hasStagedChanges: false,
    published: true,
    key: 'meadow-rug',
    taxCategory: {
      typeId: 'tax-category',
      id: '5109a286-ffb6-420f-91d8-43a3d98e62ed'
    },
    createdAt: '2024-04-30T17:47:24.650Z',
    lastModifiedAt: '2024-04-30T17:47:29.165Z'
  }
];
