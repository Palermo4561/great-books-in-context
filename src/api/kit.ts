import { kitInstance } from '@/api/instance'

export async function postSubscriber(email_address: string, first_name: string) {
  return kitInstance
    .post('/v4/subscribers', { email_address, first_name })
    .then((res) => res)
    .catch((err) => err)
}
