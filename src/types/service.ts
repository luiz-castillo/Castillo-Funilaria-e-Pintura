export interface Service {
  id: string
  icon: string
  title: string
  shortDescription: string
  longDescription?: string
}

export interface Testimonial {
  id: string
  name: string
  rating: number
  comment: string
  date: string
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface BeforeAfterItem {
  id: string
  vehicle: string
  serviceType: string
  description: string
  before: string
  after: string
}
