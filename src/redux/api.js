

export default async function getGreetings() { 

  const baseUrl = 'http://127.0.0.1:3000/api/v1/greetings'

  const response = await fetch(baseUrl)
  try {
    const data = await response.json()
    return data
  } catch (err) { throw new Error('can not get greetings') }
}
