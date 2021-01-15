import Head from 'next/head'

import { Todo } from '../../components'

export default () => {
  return (
    <div>
      <h1>Todos</h1>
      <Todo title='Very cool todo!' body='This text about . . .' />
    </div>
  )
}
