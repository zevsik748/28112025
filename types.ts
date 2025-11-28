export interface AIModel {
  name: string;
  category: 'video' | 'image' | 'audio' | 'text' | 'utility';
}

export interface CurriculumDay {
  day: string;
  title: string;
  description: string;
}
