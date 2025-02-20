import type { FetchBaseQueryError } from '@reduxjs/toolkit/query';

export class RTKQueryError extends Error {
  constructor(
    public message: string,
    public status: FetchBaseQueryError['status'],
    public name = 'RTKQueryError'
  ) {
    super(message);
  }
}
