export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "13.0.4"
  }
  public: {
    Tables: {
      agent_events: {
        Row: {
          agent_id: string
          id: number
          ref_json: Json | null
          ts: string
          type: string
        }
        Insert: {
          agent_id: string
          id?: number
          ref_json?: Json | null
          ts?: string
          type: string
        }
        Update: {
          agent_id?: string
          id?: number
          ref_json?: Json | null
          ts?: string
          type?: string
        }
        Relationships: [
          {
            foreignKeyName: "agent_events_agent_id_fkey"
            columns: ["agent_id"]
            isOneToOne: false
            referencedRelation: "agents"
            referencedColumns: ["agent_id"]
          },
        ]
      }
      agents: {
        Row: {
          agent_id: string
          avatar_uri: string
          created_at: string
          display_name: string
          external_owner: string | null
          meta: Json | null
          metadata_uri: string | null
          model_version: string
          owner: string
          skills: string[] | null
          status: string
          sui_object_id: string | null
          tier: string | null
          treasury: number | null
          trust_ceiling: number
          trust_raw: number
          type: string | null
          updated_at: string
        }
        Insert: {
          agent_id: string
          avatar_uri: string
          created_at?: string
          display_name: string
          external_owner?: string | null
          meta?: Json | null
          metadata_uri?: string | null
          model_version?: string
          owner: string
          skills?: string[] | null
          status?: string
          sui_object_id?: string | null
          tier?: string | null
          treasury?: number | null
          trust_ceiling?: number
          trust_raw?: number
          type?: string | null
          updated_at?: string
        }
        Update: {
          agent_id?: string
          avatar_uri?: string
          created_at?: string
          display_name?: string
          external_owner?: string | null
          meta?: Json | null
          metadata_uri?: string | null
          model_version?: string
          owner?: string
          skills?: string[] | null
          status?: string
          sui_object_id?: string | null
          tier?: string | null
          treasury?: number | null
          trust_ceiling?: number
          trust_raw?: number
          type?: string | null
          updated_at?: string
        }
        Relationships: []
      }
      chat: {
        Row: {
          content: string
          created_at: string | null
          id: number
          wallet_addr: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: number
          wallet_addr: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: number
          wallet_addr?: string
        }
        Relationships: []
      }
      chat_messages: {
        Row: {
          content: string
          created_at: string | null
          id: string
          profile_id: string | null
          role: string
        }
        Insert: {
          content: string
          created_at?: string | null
          id?: string
          profile_id?: string | null
          role: string
        }
        Update: {
          content?: string
          created_at?: string | null
          id?: string
          profile_id?: string | null
          role?: string
        }
        Relationships: [
          {
            foreignKeyName: "chat_messages_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          image_url: string | null
          post_id: string
          sui_address: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          post_id: string
          sui_address: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          post_id?: string
          sui_address?: string
          updated_at?: string
        }
        Relationships: []
      }
      conversations: {
        Row: {
          created_at: string
          id: string
          last_message_at: string | null
          participant_1: string
          participant_2: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          participant_1: string
          participant_2: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          id?: string
          last_message_at?: string | null
          participant_1?: string
          participant_2?: string
          updated_at?: string
        }
        Relationships: []
      }
      feed_posts: {
        Row: {
          content: string
          created_at: string
          id: string
          image_url: string | null
          sui_address: string
          updated_at: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          sui_address: string
          updated_at?: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          sui_address?: string
          updated_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "fk_sui_address"
            columns: ["sui_address"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["sui_address"]
          },
        ]
      }
      follows: {
        Row: {
          created_at: string
          follower_sui_address: string
          following_sui_address: string
          id: string
        }
        Insert: {
          created_at?: string
          follower_sui_address: string
          following_sui_address: string
          id?: string
        }
        Update: {
          created_at?: string
          follower_sui_address?: string
          following_sui_address?: string
          id?: string
        }
        Relationships: []
      }
      messages: {
        Row: {
          content: string
          conversation_id: string
          created_at: string
          id: string
          message_type: string | null
          read_at: string | null
          sender_address: string
        }
        Insert: {
          content: string
          conversation_id: string
          created_at?: string
          id?: string
          message_type?: string | null
          read_at?: string | null
          sender_address: string
        }
        Update: {
          content?: string
          conversation_id?: string
          created_at?: string
          id?: string
          message_type?: string | null
          read_at?: string | null
          sender_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "messages_conversation_id_fkey"
            columns: ["conversation_id"]
            isOneToOne: false
            referencedRelation: "conversations"
            referencedColumns: ["id"]
          },
        ]
      }
      okx_connections: {
        Row: {
          address: string
          chain: string
          created_at: string
          id: string
          session_id: string | null
          user_identifier: string | null
        }
        Insert: {
          address: string
          chain: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_identifier?: string | null
        }
        Update: {
          address?: string
          chain?: string
          created_at?: string
          id?: string
          session_id?: string | null
          user_identifier?: string | null
        }
        Relationships: []
      }
      post_likes: {
        Row: {
          created_at: string
          id: string
          post_id: string
          sui_address: string
        }
        Insert: {
          created_at?: string
          id?: string
          post_id: string
          sui_address: string
        }
        Update: {
          created_at?: string
          id?: string
          post_id?: string
          sui_address?: string
        }
        Relationships: [
          {
            foreignKeyName: "post_likes_post_id_fkey"
            columns: ["post_id"]
            isOneToOne: false
            referencedRelation: "posts"
            referencedColumns: ["id"]
          },
        ]
      }
      posts: {
        Row: {
          content: string
          created_at: string
          id: string
          image_url: string | null
          sui_address: string
          updated_at: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          image_url?: string | null
          sui_address: string
          updated_at?: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          image_url?: string | null
          sui_address?: string
          updated_at?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: "posts_sui_address_fkey"
            columns: ["sui_address"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["sui_address"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          handle: string | null
          id: string
          is_verified: boolean | null
          pending_verification: boolean | null
          sui_address: string
          verification_request: Json | null
        }
        Insert: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          handle?: string | null
          id?: string
          is_verified?: boolean | null
          pending_verification?: boolean | null
          sui_address: string
          verification_request?: Json | null
        }
        Update: {
          avatar_url?: string | null
          bio?: string | null
          created_at?: string | null
          display_name?: string | null
          email?: string | null
          handle?: string | null
          id?: string
          is_verified?: boolean | null
          pending_verification?: boolean | null
          sui_address?: string
          verification_request?: Json | null
        }
        Relationships: []
      }
      swarm_members: {
        Row: {
          agent_id: string
          created_at: string
          id: string
          swarm_id: string
        }
        Insert: {
          agent_id: string
          created_at?: string
          id?: string
          swarm_id: string
        }
        Update: {
          agent_id?: string
          created_at?: string
          id?: string
          swarm_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      v_feed: {
        Row: {
          avatar_url: string | null
          content: string | null
          created_at: string | null
          display_name: string | null
          handle: string | null
          id: string | null
          sui_address: string | null
          updated_at: string | null
        }
        Relationships: [
          {
            foreignKeyName: "fk_sui_address"
            columns: ["sui_address"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["sui_address"]
          },
        ]
      }
    }
    Functions: {
      cascade_pause: {
        Args: { pause: boolean; swarm_id: string }
        Returns: undefined
      }
      get_current_user_wallet_address: { Args: never; Returns: string }
      get_follower_count: {
        Args: { user_sui_address: string }
        Returns: number
      }
      get_following_count: {
        Args: { user_sui_address: string }
        Returns: number
      }
      get_okx_connections_for_admin: {
        Args: never
        Returns: {
          address: string
          chain: string
          connection_count: number
          created_at: string
          id: string
        }[]
      }
      get_or_create_conversation: {
        Args: { other_user_address: string }
        Returns: string
      }
      get_or_create_profile: {
        Args: { user_email?: string; wallet_address: string }
        Returns: {
          avatar_url: string | null
          bio: string | null
          created_at: string | null
          display_name: string | null
          email: string | null
          handle: string | null
          id: string
          is_verified: boolean | null
          pending_verification: boolean | null
          sui_address: string
          verification_request: Json | null
        }
        SetofOptions: {
          from: "*"
          to: "profiles"
          isOneToOne: true
          isSetofReturn: false
        }
      }
      get_post_like_count: { Args: { post_uuid: string }; Returns: number }
      get_safe_profile_data: {
        Args: { profile_sui_address: string }
        Returns: {
          avatar_url: string
          bio: string
          created_at: string
          display_name: string
          handle: string
          id: string
          is_verified: boolean
          sui_address: string
        }[]
      }
      is_following: {
        Args: { follower_address: string; following_address: string }
        Returns: boolean
      }
      request_verification: {
        Args: { verification_data: Json }
        Returns: undefined
      }
      upsert_agent: {
        Args: {
          p_agent_id: string
          p_avatar_uri?: string
          p_display_name: string
          p_meta?: Json
          p_owner: string
          p_skills?: string[]
          p_status?: string
          p_tier?: string
          p_treasury?: number
          p_trust_raw?: number
          p_type?: string
        }
        Returns: undefined
      }
      user_liked_post: { Args: { post_uuid: string }; Returns: boolean }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
