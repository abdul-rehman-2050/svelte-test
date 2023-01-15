import { toast } from '@zerodevx/svelte-toast'

export const toastSuccess = m => toast.push(m, {
  theme: {
    '--toastBackground': 'green',
    '--toastColor': 'white',
    '--toastBarBackground': 'olive'
  }
})

export const toastWarning = m => toast.push(m, { theme: {  } })

export const toastFailure = m => toast.push(m, { theme: { theme: {
    '--toastBackground': 'red',
    '--toastColor': 'white',
    '--toastBarBackground': 'olive'
  } } })