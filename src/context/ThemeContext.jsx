import {useEffect, useMemo, useState, createContext, useContext} from 'react';

const ThemeContext = createContext(null);

export function ThemeProvider({children, initial = 'light'}) {
  const [theme, setTheme] = useState(initial);

  const toggleTheme = () => setTheme(t => (t === 'light' ? 'dark' : 'light'));

  // автоматично ставимо атрибут на <html>
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const value = useMemo(() => ({theme, toggleTheme}), [theme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme повинна використовуватися тільки всередині ThemeProvider');
  return ctx;
}
