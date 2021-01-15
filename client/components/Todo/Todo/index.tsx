import { FC } from 'react'
import { Card } from '../../index'

type Props = {
    title: string
    body: string
}
export const Todo: FC<Props> = ({ title, body }) => {
    return <Card>
        <div>Todo</div>
    </Card>
}