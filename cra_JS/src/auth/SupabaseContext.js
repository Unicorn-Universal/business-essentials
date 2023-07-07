import { createContext, useEffect, useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import PropTypes from 'prop-types';

// config
import { SUPABASE_API } from '../config-global';

// ----------------------------------------------------------------------

const initialState = {
  isInitialized: false,
  isAuthenticated: false,
  user: null,
};

const SupabaseContext = createContext(null);

const supabase = createClient(SUPABASE_API, SUPABASE_API_KEY);

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export function SupabaseProvider({ children }) {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    const session = supabase.auth.session();
    const user = session?.user ?? null;
    const isAuthenticated = user !== null;

    setState({
      isInitialized: true,
      isAuthenticated,
      user,
    });

    const { data: authListener } = supabase.auth.onAuthStateChange((event, session) => {
      const user = session?.user ?? null;
      const isAuthenticated = user !== null;

      setState({
        isInitialized: true,
        isAuthenticated,
        user,
      });
    });

    return () => {
      authListener.unsubscribe();
    };
  }, []);

  const { user, isAuthenticated } = state;

  const memoizedValue = {
    isInitialized: state.isInitialized,
    isAuthenticated,
    user,
    method: 'supabase',
    // Add your Supabase authentication methods here
    // For example:
    // login,
    // logout,
    // register,
    // etc.
  };

  return <SupabaseContext.Provider value={memoizedValue}>{children}</SupabaseContext.Provider>;
}

export function useSupabase() {
  return useContext(SupabaseContext);
}
