import { describe, test, expect } from 'vitest';
import { INPUTS } from '@/features/AuthForms/data/AuthForms.constants';
import { checkAllInputs, checkCredentialInputs } from '@/features/AuthForms/data/AuthForms.helpers';

describe('Given checkCredentialInputs function', () => {
  test("When inputsValues doesn't have email record, should return false", () => {
    const inputsValues = {
      [INPUTS.password.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.password.name]: '',
      [INPUTS.email.name]: ''
    };
    const result = checkCredentialInputs(inputsValues, inputsErrors);

    expect(result).toBeFalsy();
  });

  test("When inputsValues doesn't have password record, should return false", () => {
    const inputsValues = {
      [INPUTS.email.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.password.name]: '',
      [INPUTS.email.name]: ''
    };
    const result = checkCredentialInputs(inputsValues, inputsErrors);

    expect(result).toBeFalsy();
  });

  test('When inputsErrors has non empty email record, should return false', () => {
    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.password.name]: '',
      [INPUTS.email.name]: '1'
    };
    const result = checkCredentialInputs(inputsValues, inputsErrors);

    expect(result).toBeFalsy();
  });

  test('When inputsErrors has non empty password record, should return false', () => {
    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: ''
    };
    const result = checkCredentialInputs(inputsValues, inputsErrors);

    expect(result).toBeFalsy();
  });

  test('When inputsErrors has empty password and email records and inputsValues has non empty password and email records, should return true', () => {
    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.password.name]: '',
      [INPUTS.email.name]: ''
    };
    const result = checkCredentialInputs(inputsValues, inputsErrors);

    expect(result).toBeTruthy();
  });
});

describe('Given checkAllInputs function', () => {
  test("When inputsValues doesn't have at least one record by keys in INPUTS, should return false", () => {
    const isSameAddress = false;

    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1',
      [INPUTS.lastName.name]: '1',
      [INPUTS.firstName.name]: '1',
      [INPUTS.birthday.name]: '1',
      [INPUTS.billingCity.name]: '1',
      [INPUTS.billingCountry.name]: '1',
      [INPUTS.billingPostalCode.name]: '1',
      [INPUTS.billingStreet.name]: '1',
      [INPUTS.shippingCity.name]: '1',
      [INPUTS.shippingCountry.name]: '1',
      [INPUTS.shippingPostalCode.name]: '1'
    };
    const inputsErrors = {};
    const result = checkAllInputs(inputsValues, inputsErrors, isSameAddress);

    expect(result).toBeFalsy();
  });

  test('When inputsErrors has at least one non empty record by key in INPUTS, should return false', () => {
    const isSameAddress = false;

    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1',
      [INPUTS.lastName.name]: '1',
      [INPUTS.firstName.name]: '1',
      [INPUTS.birthday.name]: '1',
      [INPUTS.billingCity.name]: '1',
      [INPUTS.billingCountry.name]: '1',
      [INPUTS.billingPostalCode.name]: '1',
      [INPUTS.billingStreet.name]: '1',
      [INPUTS.shippingCity.name]: '1',
      [INPUTS.shippingCountry.name]: '1',
      [INPUTS.shippingPostalCode.name]: '1',
      [INPUTS.shippingStreet.name]: '1'
    };
    const inputsErrors = {
      [INPUTS.shippingStreet.name]: '1'
    };
    const result = checkAllInputs(inputsValues, inputsErrors, isSameAddress);

    expect(result).toBeFalsy();
  });

  test("When inputsValues has record by each key in INPUTS and inputsErrors doesn't have non empty records by key in INPUTS, should return true", () => {
    const isSameAddress = false;

    const inputsValues = {
      [INPUTS.password.name]: '1',
      [INPUTS.email.name]: '1',
      [INPUTS.lastName.name]: '1',
      [INPUTS.firstName.name]: '1',
      [INPUTS.birthday.name]: '1',
      [INPUTS.billingCity.name]: '1',
      [INPUTS.billingCountry.name]: '1',
      [INPUTS.billingPostalCode.name]: '1',
      [INPUTS.billingStreet.name]: '1',
      [INPUTS.shippingCity.name]: '1',
      [INPUTS.shippingCountry.name]: '1',
      [INPUTS.shippingPostalCode.name]: '1',
      [INPUTS.shippingStreet.name]: '1'
    };
    const inputsErrors = {};
    const result = checkAllInputs(inputsValues, inputsErrors, isSameAddress);

    expect(result).toBeTruthy();
  });
});
