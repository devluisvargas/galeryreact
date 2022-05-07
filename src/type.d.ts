interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
  small_s3: string;
}

interface Links {
  self: string;
  html: string;
  download: string;
  download_location: string;
}

interface Wallpapers {
  status: string;
  approved_on: Date;
}

interface ColorOfWater {
  status: string;
  approved_on: Date;
}

interface Experimental {
  status: string;
  approved_on: Date;
}

interface TexturesPatterns {
  status: string;
  approved_on: Date;
}

interface TopicSubmissions {
  wallpapers: Wallpapers;
  "color-of-water": ColorOfWater;
  experimental: Experimental;
  "textures-patterns": TexturesPatterns;
}

interface Links2 {
  self: string;
  html: string;
  photos: string;
  likes: string;
  portfolio: string;
  following: string;
  followers: string;
}

interface ProfileImage {
  small: string;
  medium: string;
  large: string;
}

interface Social {
  instagram_username: string;
  portfolio_url?: any;
  twitter_username: string;
  paypal_email?: any;
}

interface User {
  id: string;
  updated_at: Date;
  username: string;
  name: string;
  first_name: string;
  last_name: string;
  twitter_username: string;
  portfolio_url?: any;
  bio: string;
  location: string;
  links: Links2;
  profile_image: ProfileImage;
  instagram_username: string;
  total_collections: number;
  total_likes: number;
  total_photos: number;
  accepted_tos: boolean;
  for_hire: boolean;
  social: Social;
}

interface Exif {
  make: string;
  model: string;
  name: string;
  exposure_time: string;
  aperture: string;
  focal_length: string;
  iso: number;
}

interface Position {
  latitude?: any;
  longitude?: any;
}

interface Location {
  title?: any;
  name?: any;
  city?: any;
  country?: any;
  position: Position;
}

export interface Image {
  id: string;
  created_at: Date;
  updated_at: Date;
  promoted_at: Date;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description?: any;
  alt_description?: any;
  urls: Urls;
  links: Links;
  categories: any[];
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship?: any;
  topic_submissions: TopicSubmissions;
  user: User;
  exif: Exif;
  location: Location;
  views: number;
  downloads: number;
}
