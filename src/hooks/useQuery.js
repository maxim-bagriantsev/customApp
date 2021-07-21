import { useLocation } from 'react-router-dom';

// кастомный хук который получает параметры из кверистринг
export function useQuery() {
    return new URLSearchParams(useLocation().search);
  }