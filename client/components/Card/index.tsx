import React, { FC } from 'react';

type Props = {
    children: React.ReactNode
}
export const Card: FC<Props> = ({ children }) => {
    return <div className='card'>
        {children}
    </div>
}