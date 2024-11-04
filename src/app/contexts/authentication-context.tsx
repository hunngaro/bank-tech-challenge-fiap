"use client";
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactNode, createContext, useEffect, useState } from 'react';

// Definindo os tipos para o contexto
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

interface AuthContextProps {
  user: User | null | undefined;
  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps>(
    {} as AuthContextProps
)

interface AuthProviderProps {
    children: ReactNode;
  }

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const pathname = usePathname()
  const router = useRouter()
  const [user, setUser] = useState<User | null | undefined>(null);
  const [loading, setLoading] = useState(true)

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await fetch(`http://localhost:3001/users`);
      
      // Verificando se a resposta foi bem-sucedida
      if (!response.ok) {
        throw new Error('Erro na resposta do servidor');
      }
  
      const data: User[] = await response.json();
  
      if (data.length) {
        const userLogged = data.find( res => (res.email === email && res.password === password));
        const { id, name, email: loggedEmail } = userLogged!
        setUser(userLogged);
        localStorage.setItem('@bytebank:user', JSON.stringify({ id, name, email: loggedEmail }))
        return userLogged ? true : false
      }
      return false
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return false;
    }
  };
  
  const logout = () => {
    setUser(null);
    localStorage.removeItem('@bytebank:user')
  };

  useEffect(() => {
    const storageUser = localStorage.getItem('@bytebank:user')
    const user: User = JSON.parse(storageUser!)
    if (user && user.id) {
      setUser(user)
      const customPathname = pathname === '/' ? '/dashboard' : pathname
      router.push(customPathname)
    } else {
      router.push('/')
    }
    setLoading(false)
  }, [])

  if (loading) {
    return null
  }

  return (
    <AuthContext.Provider value={{login, user, logout}}>
      {children}
    </AuthContext.Provider>
  )
};
