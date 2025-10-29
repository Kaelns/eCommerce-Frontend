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
  vi.mock('@/app/store', async () => {
    const mod = await vi.importActual<typeof import('@/app/store/store')>('@/store/store');
    return {
      ...mod,
      useAppDispatch: () => vi.fn()
    };
  });
});

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn()
  }))
});
