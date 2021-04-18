export const loadingState = (state) => ({
  ...state,
  loading: true
})

export const errorState = (state, action) => ({
  ...state,
  error: action.payload.error
})
