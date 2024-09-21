import { useQueryUser } from '../hooks/useQueryUser'
import { Loader } from '@mantine/core'

export const UserInfo = () => {
  const loginStatus = "ログイン中"
  const { data: user, status } = useQueryUser()
  if (status === 'loading') return <Loader />
  return <p>{loginStatus} {user?.email}</p>
}