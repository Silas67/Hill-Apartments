export type Property = {
  id: string;
  slug: string | null;
  title: string;
  description: string | null;
  listing_type: "rent" | "sale";
  category: "sites_services" | "ultra" | "third_party";
  property_type: string | null;
  price: number;
  beds: number | null;
  baths: number | null;
  size_sqm: number | null;
  location: string;
  address: string | null;
  features: string[];
  images: string[];
  video_url: string | null;
  featured: boolean;
  status: "draft" | "published" | "sold" | "let";
  created_at: string;
  updated_at: string;
};

export type ContactMessage = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  subject: string | null;
  message: string;
  property_id: string | null;
  is_read: boolean;
  created_at: string;
};

export type Subscriber = {
  id: string;
  email: string;
  created_at: string;
};
