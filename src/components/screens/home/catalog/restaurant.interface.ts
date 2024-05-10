export interface IResraurant {
  slug: string
  name: string
  priceRating: '$$$$' | '$$$' | '$$' |'$' 
  kitchens: string []
  rating: number
  destination: number
  img: string,
  categories: ('cafe' | 'cinema' | 'stand-up' | 'ice-cream')[]
}