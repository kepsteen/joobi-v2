export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  graphql_public: {
    Tables: {
      [_ in never]: never
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      graphql: {
        Args: {
          operationName?: string
          query?: string
          variables?: Json
          extensions?: Json
        }
        Returns: Json
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
  public: {
    Tables: {
      applications: {
        Row: {
          company_id: number | null
          created_at: string
          id: string
          link: string | null
          location: string | null
          notes: string | null
          position: string | null
          rejection_reason: string | null
          salary: string | null
          status: Database["public"]["Enums"]["Applications"] | null
          submitted_at: string | null
          type: Database["public"]["Enums"]["Job types"] | null
          user_id: string | null
        }
        Insert: {
          company_id?: number | null
          created_at?: string
          id?: string
          link?: string | null
          location?: string | null
          notes?: string | null
          position?: string | null
          rejection_reason?: string | null
          salary?: string | null
          status?: Database["public"]["Enums"]["Applications"] | null
          submitted_at?: string | null
          type?: Database["public"]["Enums"]["Job types"] | null
          user_id?: string | null
        }
        Update: {
          company_id?: number | null
          created_at?: string
          id?: string
          link?: string | null
          location?: string | null
          notes?: string | null
          position?: string | null
          rejection_reason?: string | null
          salary?: string | null
          status?: Database["public"]["Enums"]["Applications"] | null
          submitted_at?: string | null
          type?: Database["public"]["Enums"]["Job types"] | null
          user_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "applications_company_id_fkey"
            columns: ["company_id"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
        ]
      }
      companies: {
        Row: {
          id: number
          name: string | null
          stack: string[] | null
        }
        Insert: {
          id?: number
          name?: string | null
          stack?: string[] | null
        }
        Update: {
          id?: number
          name?: string | null
          stack?: string[] | null
        }
        Relationships: []
      }
      profiles: {
        Row: {
          avatar_url: string | null
          full_name: string | null
          id: string
          updated_at: string | null
          username: string | null
        }
        Insert: {
          avatar_url?: string | null
          full_name?: string | null
          id: string
          updated_at?: string | null
          username?: string | null
        }
        Update: {
          avatar_url?: string | null
          full_name?: string | null
          id?: string
          updated_at?: string | null
          username?: string | null
        }
        Relationships: []
      }
      quiz_questions: {
        Row: {
          created_at: string
          id: number
          question: string | null
          subject: string | null
          type: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          question?: string | null
          subject?: string | null
          type?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          question?: string | null
          subject?: string | null
          type?: string | null
        }
        Relationships: []
      }
      user_stats: {
        Row: {
          applications_submitted: number | null
          bugs_fixed: number | null
          daily_challenges: number | null
          id: string
          level: number | null
          login_streak: number | null
          questions_answered: number | null
          weekly_challenges: number | null
          xp: number | null
        }
        Insert: {
          applications_submitted?: number | null
          bugs_fixed?: number | null
          daily_challenges?: number | null
          id: string
          level?: number | null
          login_streak?: number | null
          questions_answered?: number | null
          weekly_challenges?: number | null
          xp?: number | null
        }
        Update: {
          applications_submitted?: number | null
          bugs_fixed?: number | null
          daily_challenges?: number | null
          id?: string
          level?: number | null
          login_streak?: number | null
          questions_answered?: number | null
          weekly_challenges?: number | null
          xp?: number | null
        }
        Relationships: []
      }
      user_visits: {
        Row: {
          id: string
          most_recent_visit: string | null
          start_of_current_streak: string
        }
        Insert: {
          id: string
          most_recent_visit?: string | null
          start_of_current_streak: string
        }
        Update: {
          id?: string
          most_recent_visit?: string | null
          start_of_current_streak?: string
        }
        Relationships: []
      }
      xp_events: {
        Row: {
          created_at: string
          delta: number | null
          event: string | null
          id: number
          user_id: string | null
        }
        Insert: {
          created_at?: string
          delta?: number | null
          event?: string | null
          id?: number
          user_id?: string | null
        }
        Update: {
          created_at?: string
          delta?: number | null
          event?: string | null
          id?: number
          user_id?: string | null
        }
        Relationships: []
      }
      xp_to_level: {
        Row: {
          level: number
          xp_required: number | null
        }
        Insert: {
          level: number
          xp_required?: number | null
        }
        Update: {
          level?: number
          xp_required?: number | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      delete_old_records: {
        Args: Record<PropertyKey, never>
        Returns: undefined
      }
    }
    Enums: {
      Applications: "To apply" | "Applied" | "Rejected" | "No answer"
      "Job types": "Remote" | "On-site" | "Hybrid"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
