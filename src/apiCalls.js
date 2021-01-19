export const getOrders = () => {
  return fetch('http://localhost:3001/api/v1/orders')
      .then(response => response.json())
}

export const postOrder = (name, ingredients) => {
  if (name !== '' && ingredients.length > 0) {
    return fetch('http://localhost:3001/api/v1/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        ingredients: ingredients
      })
    })
    .then(response => response.json())
    .catch(err => console.log(err))
  }
}