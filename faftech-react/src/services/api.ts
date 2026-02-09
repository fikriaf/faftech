// API Service for Faftech Backend
// Base URL: https://faftech-be.vercel.app/api/v1

const API_BASE_URL = 'https://faftech-be.vercel.app/api/v1';
// const API_BASE_URL = 'http://localhost:3001/api/v1'; // For local development

interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}

// Generic fetch function
async function fetchApi<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`);
  
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }
  
  const result: ApiResponse<T> = await response.json();
  
  if (!result.success) {
    throw new Error(result.message || 'API request failed');
  }
  
  return result.data;
}

// Types
export interface Project {
  id: string;
  slug: string;
  title: string;
  category: string;
  tags: string[];
  url: string;
  image: string;
  logo: string;
  content: ProjectContent[];
}

export interface ProjectContent {
  name: string;
  quote: string;
  image_url: string;
}

export interface Experience {
  id: string;
  date_range: string;
  title: string;
  company: string;
  type: string;
  type_time: string;
  description: string[];
  skills: string[];
  images?: { image_url: string }[];
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  icon_url: string;
  proficiencies: { percent: number }[];
}

export interface Profile {
  id: string;
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  address: string;
  avatar_url: string;
  cv_url: string;
}

export interface Contact {
  email: string;
  phone: string;
  address: string;
  whatsapp_url: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactData {
  contact: Contact;
  socialLinks: SocialLink[];
}

export interface Achievement {
  id: string;
  title: string;
  slug: string;
  description: string;
  issuer: string;
  issue_date: string;
  category: string;
  type: 'certificate' | 'award' | 'publication' | 'patent' | 'conference';
  certificate_file_url?: string;
  is_featured: boolean;
}

// API Functions
export const api = {
  // Projects
  getProjects: () => fetchApi<Project[]>('/projects'),
  
  getProject: (slug: string) => fetchApi<Project>(`/projects/${slug}`),
  
  // Experiences
  getExperiences: () => fetchApi<Experience[]>('/experiences'),
  
  // Skills
  getSkills: () => fetchApi<SkillCategory[]>('/skills'),
  
  // Profile
  getProfile: () => fetchApi<Profile>('/profile'),
  
  // Contact
  getContact: () => fetchApi<ContactData>('/contact'),
  
  // Achievements
  getAchievements: (params?: { type?: string; category?: string; featured?: boolean }) => {
    const queryParams = new URLSearchParams();
    if (params?.type) queryParams.append('type', params.type);
    if (params?.category) queryParams.append('category', params.category);
    if (params?.featured) queryParams.append('featured', 'true');
    
    const query = queryParams.toString();
    return fetchApi<Achievement[]>(`/achievements${query ? `?${query}` : ''}`);
  },
};

export default api;
