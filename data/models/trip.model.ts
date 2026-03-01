export interface Trip {
  id: string;
  userId: string;

  name: string;
  description: string | null;

  country: string | null;
  city: string | null;
  county: string | null;

  startDate: string | null;
  endDate: string | null;

  coverImage: string | null;
  gallery: string[];

  isFavorite: boolean;
  isPublic: boolean;
  isArchived: boolean;

  createdAt: string;
  updatedAt: string;
}

export interface CreateTrip {
  name: string;
  description?: string | null;

  country?: string | null;
  city?: string | null;
  county?: string | null;

  startDate?: string | null;
  endDate?: string | null;

  coverImage?: string | null;
  gallery?: string[];

  isFavorite?: boolean;
  isPublic?: boolean;
}

export interface UpdateTrip {
  id: string;

  name?: string;
  description?: string | null;

  country?: string | null;
  city?: string | null;
  county?: string | null;

  startDate?: string | null;
  endDate?: string | null;

  coverImage?: string | null;
  gallery?: string[];

  isFavorite?: boolean;
  isPublic?: boolean;
  isArchived?: boolean;
}
