import { PlacesActions } from './types'

export const setQuery = (query: string) => ({
  type: PlacesActions.SetQuery,
  payload: query
})
