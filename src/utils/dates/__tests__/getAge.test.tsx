import { getAge } from '@/utils/dates/getAge';

describe('Given getAge function', () => {
  const endPoint = new Date('2025-01-05');

  it('Properly calculates age', () => {
    const birthday = new Date('2020-01-04');
    expect(getAge(birthday, endPoint)).toEqual(5);
  });

  it('Properly calculates age when there was no birthday in this year yet', () => {
    const birthday = new Date('2020-01-06');
    expect(getAge(birthday, endPoint)).toEqual(4);
  });

  it('Properly calculates age on the edge', () => {
    const birthday = new Date('2020-01-05');
    expect(getAge(birthday, endPoint)).toEqual(5);
  });

  it('Returns 0 if birthday = endPoint', () => {
    expect(getAge(endPoint, endPoint)).toEqual(0);
  });

  it('Returns negative if birthday >> endPoint', () => {
    const birthday = new Date('2030-01-04');
    expect(getAge(birthday, endPoint)).toBeLessThan(0);
  });
});
