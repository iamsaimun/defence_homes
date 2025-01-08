export type formState =
  | {
      errors?: {
        full_name?: string[];
        phone?: string[];
        designation?: string[];
      };
      success?: string;
    }
  | undefined;