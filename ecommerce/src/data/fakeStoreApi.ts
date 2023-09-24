const BASE_URL = 'https://fakestoreapi.com'

export const getProductById = async (id: number) => {
  const response = await fetch(`${BASE_URL}/products/${id}`)
  const responseJson = await response.json()
  return responseJson
}
