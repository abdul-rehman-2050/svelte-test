import { toast } from '@zerodevx/svelte-toast'

export const toastSuccess = m => toast.push(m, {
  theme: {
    '--toastColor': 'mintcream',
    '--toastBackground': 'rgba(72,187,120,0.9)',
    '--toastBarBackground': '#2F855A'
  }
})

export const toastWarning = m => toast.push(m, { theme: {  } })

export const toastFailure = m => toast.push(m, {  theme: {
  '--toastColor': 'mintcream',
  '--toastBackground': 'rgba(207,0,0,0.9)',
  '--toastBarBackground': '#dc3545'
  } } )


  