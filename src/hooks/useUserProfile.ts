import { useEffect, useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { User } from '@supabase/supabase-js';

export type PlanType = 'free' | 'pro' | 'business';

export interface UserProfile {
  id: string;
  user_id: string;
  email: string;
  plan_type: PlanType;
  created_at: string;
  updated_at: string;
}

export const useUserProfile = () => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setLoading(false);
      }
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
      if (session?.user) {
        fetchProfile(session.user.id);
      } else {
        setProfile(null);
        setLoading(false);
      }
    });

    return () => subscription.unsubscribe();
  }, []);

  const fetchProfile = async (userId: string) => {
    try {
      const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('user_id', userId)
        .maybeSingle();

      if (error) throw error;
      setProfile(data as UserProfile);
    } catch (error) {
      console.error('Error fetching profile:', error);
    } finally {
      setLoading(false);
    }
  };

  const updatePlan = async (newPlan: PlanType) => {
    if (!user) return;

    try {
      const { error } = await supabase
        .from('profiles')
        .update({ plan_type: newPlan })
        .eq('user_id', user.id);

      if (error) throw error;
      
      // Refresh profile
      await fetchProfile(user.id);
    } catch (error) {
      console.error('Error updating plan:', error);
      throw error;
    }
  };

  return {
    profile,
    user,
    loading,
    updatePlan,
    planType: profile?.plan_type ?? 'free'
  };
};
