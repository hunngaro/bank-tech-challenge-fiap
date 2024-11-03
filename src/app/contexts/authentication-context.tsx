"use client";
import { FC, ReactNode, createContext, useState } from 'react';

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
  const [user, setUser] = useState<User | null | undefined>(null);
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
        console.log(userLogged)
        setUser(userLogged);
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
  };

  return (
    <AuthContext.Provider value={{login, user, logout}}>
        {children}
    </AuthContext.Provider>
  )
};


// export const useAuth = (): AuthContext<AuthContextProps> => {
//   const context = useContext(AuthContext);
//   if (!context) {
//     throw new Error('useAuth deve ser usado dentro de um AuthProvider');
//   }
//   return context;
// };
