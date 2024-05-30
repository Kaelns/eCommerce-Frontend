import { beforeAll, vi } from 'vitest';

beforeAll(() => {
  vi.mock('react-router-dom', async () => {
    const mod = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
    return {
      ...mod,
      useNavigate: () => vi.fn(),
      useLocation: () => vi.fn()
    };
  });
});
