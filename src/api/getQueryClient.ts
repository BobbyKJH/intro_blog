/** React */
import { cache } from 'react'
/** React-Query */
import { QueryClient } from '@tanstack/react-query'

const getQueryClient = cache(() => new QueryClient());

export default getQueryClient;
