import { useRouter } from 'next/router'
import axios from 'axios'
import { LogoutIcon } from '@heroicons/react/solid'
import { Layout } from '../components/Layout'
import { NextPage } from 'next'
import { UserInfo } from '../components/UserInfo'
import { useQueryClient } from '@tanstack/react-query'
import { TaskForm } from '@/components/TaskForm'
import { TaskList } from '@/components/TaskList'

const Dashboard: NextPage = () => {
    const router = useRouter()
    const queryClient = useQueryClient()
    const logout = async () => {
        queryClient.removeQueries(['tasks'])
        queryClient.removeQueries(['user'])
        await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/logout`)
        router.push('/')
    }
    return (
        <Layout title="Task Board">
            <LogoutIcon
                className="mb-6 h-6 w-6 cursor-pointer text-blue-500"
                onClick={logout}
            />
            <UserInfo />
            <TaskForm />
            <TaskList />
            <button onClick={() => window.location.reload()} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                リロード
            </button>
            <div className="mt-3">
                <a href="https://www.yahoo.co.jp" target="_blank" className="text-blue-500 hover:text-blue-700 underline">
                    Yahoo!へのリンク
                </a>
            </div>
        </Layout>
    )
}

export default Dashboard