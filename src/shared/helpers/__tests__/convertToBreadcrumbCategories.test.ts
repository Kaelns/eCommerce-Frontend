import { categoriesObjMock } from '@/shared/__tests__/mocks/categories.mock';
import { convertToBreadcrumbCategories } from '@/shared/helpers/convertToBreadcrumbCategories';

describe('convertToBreadcrumb', () => {
  it('should convert a TreeNode to a breadcrumb', () => {
    const furnitureId = 'cc568bf3-85dc-43ae-bcf6-09e904416124';

    const base = convertToBreadcrumbCategories(furnitureId, categoriesObjMock);
    expect(base).toEqual([furnitureId]);

    const collectionsId = 'e9391d20-298e-44d6-92f0-0dd2710068f9';
    const theTraditionalistId = '3a6012ec-9b2e-4877-8c08-fce506bd0811';

    const result = convertToBreadcrumbCategories(theTraditionalistId, categoriesObjMock);
    expect(result).toEqual([furnitureId, collectionsId, theTraditionalistId]);

    const kitchenId = '5667aecb-b311-4a42-b358-aedc802a28a7';
    const barAndGlasswareId = '49935e80-e162-4a96-b67a-8d44b2e34808';
    const barAccessoriesId = 'bd347644-40ad-4328-9f25-c6860bc14b20';

    const result2 = convertToBreadcrumbCategories(barAccessoriesId, categoriesObjMock);
    expect(result2).toEqual([kitchenId, barAndGlasswareId, barAccessoriesId]);

    const servewareId = 'e9e84e47-5f05-44c9-92e2-50b1d9a2f719';
    const servingPlattersId = '71fe5f86-5e28-4e31-b834-bbfa4feee3b3';

    const result3 = convertToBreadcrumbCategories(servingPlattersId, categoriesObjMock);
    expect(result3).toEqual([kitchenId, servewareId, servingPlattersId]);

    const homeDecorId = '00a5de3b-65cc-4e2d-987c-b24ab114e1b7';
    const roomDecorId = 'c40279da-6a57-42ea-a37b-38b839c1afab';
    const rugsId = '538f367e-4992-429e-b8af-266919788ec1';
    const homeAccentsId = '0ce0a111-795a-4d9c-9fab-812a49ad740a';

    const result4 = convertToBreadcrumbCategories(rugsId, categoriesObjMock);
    expect(result4).toEqual([homeDecorId, roomDecorId, rugsId]);

    const result5 = convertToBreadcrumbCategories(homeAccentsId, categoriesObjMock);
    expect(result5).toEqual([homeDecorId, roomDecorId, homeAccentsId]);
  });
});
